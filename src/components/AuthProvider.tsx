"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";
import { reloadAccountPortal } from "@/lib/portalSync";
import {
  STABLE_EMPTY_PORTAL,
  localResultsBelongTo,
  syncPortalState,
  type PortalState,
} from "@/lib/portalProgress";

type Profile = {
  display_name: string | null;
  avatar_type: string;
  discovery_level: number;
};

type AuthContextValue = {
  user: User | null;
  profile: Profile | null;
  portal: PortalState;
  syncError: string | null;
  loading: boolean;
  refreshPortal: () => Promise<void>;
  refreshProfile: () => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

function readableSyncError(error: unknown): string {
  const message = error instanceof Error ? error.message : "";
  const detail =
    !message || /fetch|network|timeout|failed to fetch/i.test(message)
      ? "A conta não conseguiu falar com o banco."
      : message;
  return `${detail} O Meu Mapa está mostrando os testes deste dispositivo, não a confirmação da conta.`;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [portal, setPortal] = useState<PortalState>(STABLE_EMPTY_PORTAL);
  const [syncError, setSyncError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [supabase] = useState(() => createClient());

  const refreshPortal = useCallback(async () => {
    const {
      data: { user: current },
    } = await supabase.auth.getUser();

    if (!current) {
      setPortal(syncPortalState());
      return;
    }

    try {
      const state = await reloadAccountPortal(current.id);
      setPortal(state);
      setSyncError(null);
    } catch (error) {
      setSyncError(readableSyncError(error));
      setPortal(
        localResultsBelongTo(current.id) ? syncPortalState() : STABLE_EMPTY_PORTAL,
      );
    }
  }, [supabase]);

  const refreshProfile = useCallback(async () => {
    const {
      data: { user: current },
    } = await supabase.auth.getUser();

    setUser(current);

    if (!current) {
      setProfile(null);
      return;
    }

    const { data } = await supabase
      .from("cura_profiles")
      .select("display_name, avatar_type, discovery_level")
      .eq("user_id", current.id)
      .maybeSingle();

    setProfile(
      data ?? {
        display_name:
          current.user_metadata?.full_name ??
          current.user_metadata?.name ??
          current.email?.split("@")[0] ??
          null,
        avatar_type: "abstract",
        discovery_level: 0,
      },
    );
  }, [supabase]);

  useEffect(() => {
    let mounted = true;

    async function init() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!mounted) return;

      setUser(session?.user ?? null);

      if (!session?.user) {
        setPortal(syncPortalState());
        setLoading(false);
        return;
      }

      if (!localResultsBelongTo(session.user.id)) {
        setPortal(STABLE_EMPTY_PORTAL);
      }

      await refreshPortal();
      if (!mounted) return;
      await refreshProfile();
      if (mounted) setLoading(false);
    }

    void init();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null);

      if (session?.user && (event === "SIGNED_IN" || event === "TOKEN_REFRESHED")) {
        if (!localResultsBelongTo(session.user.id)) {
          setPortal(STABLE_EMPTY_PORTAL);
        }
        await refreshPortal();
        await refreshProfile();
      }

      if (event === "SIGNED_OUT") {
        setProfile(null);
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [refreshPortal, refreshProfile, supabase]);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    setUser(null);
    setProfile(null);
  }, [supabase]);

  const value = useMemo(
    () => ({
      user,
      profile,
      portal,
      syncError,
      loading,
      refreshPortal,
      refreshProfile,
      signOut,
    }),
    [user, profile, portal, syncError, loading, refreshPortal, refreshProfile, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
