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
import { syncLocalProgressToSupabase } from "@/lib/portalSync";
import {
  loadPortalState,
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
  loading: boolean;
  refreshPortal: () => void;
  refreshProfile: () => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const supabase = useMemo(() => createClient(), []);
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [portal, setPortal] = useState<PortalState>(() =>
    typeof window === "undefined" ? loadPortalState() : syncPortalState(),
  );
  const [loading, setLoading] = useState(true);

  const refreshPortal = useCallback(() => {
    setPortal(syncPortalState());
  }, []);

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
      refreshPortal();
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!mounted) return;

      setUser(session?.user ?? null);

      if (session?.user) {
        try {
          await syncLocalProgressToSupabase(session.user.id);
        } catch {
          // Network/auth errors shouldn't block the app.
        }
        await refreshProfile();
      }

      setLoading(false);
    }

    void init();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null);

      if (session?.user && (event === "SIGNED_IN" || event === "TOKEN_REFRESHED")) {
        try {
          await syncLocalProgressToSupabase(session.user.id);
        } catch {
          // ignore
        }
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
      loading,
      refreshPortal,
      refreshProfile,
      signOut,
    }),
    [user, profile, portal, loading, refreshPortal, refreshProfile, signOut],
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
