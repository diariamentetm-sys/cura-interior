"use client";

import { useAuth } from "@/components/AuthProvider";
import { Button } from "@/components/Button";
import { IntelectoAvatar } from "@/components/perfil/IntelectoAvatar";
import { IntelectoAvatarDrawer } from "@/components/perfil/IntelectoAvatarDrawer";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PerfilPage() {
  const { user, profile, loading, refreshProfile, signOut } = useAuth();
  const router = useRouter();
  const [displayName, setDisplayName] = useState("");
  const [avatarType, setAvatarType] = useState<"abstract" | "initials">(
    "abstract",
  );
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [avatarEditorOpen, setAvatarEditorOpen] = useState(false);

  useEffect(() => {
    if (!loading && !user) router.replace("/login?next=/perfil");
  }, [loading, user, router]);

  useEffect(() => {
    setDisplayName(profile?.display_name ?? "");
    setAvatarType(
      profile?.avatar_type === "initials" ? "initials" : "abstract",
    );
  }, [profile]);

  async function handleSave(event: React.FormEvent) {
    event.preventDefault();
    if (!user) return;
    setSaving(true);
    setMessage(null);

    const supabase = createClient();
    const { error } = await supabase.from("cura_profiles").upsert(
      {
        user_id: user.id,
        display_name: displayName.trim() || null,
        avatar_type: avatarType,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id" },
    );

    setSaving(false);
    if (error) {
      setMessage("Não foi possível salvar agora. Tente novamente.");
      return;
    }

    await refreshProfile();
    setMessage("Perfil atualizado.");
  }

  if (loading || !user) {
    return (
      <div className="py-24 text-center text-ink-muted">Abrindo perfil...</div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-2xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="space-y-4">
        <p className="section-eyebrow">Perfil</p>
        <h1 className="display-xl text-4xl text-ink sm:text-5xl">
          Seu espaço
        </h1>
        <p className="text-base text-ink-muted">
          Seu mapa pertence a você. Nenhum resultado é público automaticamente.
        </p>
      </div>

      <div className="mt-10 flex flex-col items-center gap-3">
        <IntelectoAvatar userId={user.id} />
        <button
          type="button"
          onClick={() => setAvatarEditorOpen(true)}
          className="text-sm font-medium text-ink-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
        >
          Editar avatar
        </button>
      </div>

      <IntelectoAvatarDrawer
        userId={user.id}
        open={avatarEditorOpen}
        onClose={() => setAvatarEditorOpen(false)}
      />

      <form onSubmit={handleSave} className="mt-10 space-y-6">
        <label className="block space-y-2">
          <span className="text-sm text-ink">Nome</span>
          <input
            value={displayName}
            onChange={(event) => setDisplayName(event.target.value)}
            className="w-full rounded-sm border border-border bg-bg-elevated px-4 py-3 text-ink outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-wine"
          />
        </label>

        <p className="border-t border-border/70 pt-6 text-sm text-ink-muted">
          O histórico das avaliações e das insígnias fica no{" "}
          <a href="/meu-mapa" className="font-semibold text-hero">
            Meu Mapa
          </a>
          .
        </p>

        {message && <p className="text-sm text-olive">{message}</p>}

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button type="submit" disabled={saving}>
            {saving ? "Salvando..." : "Salvar"}
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={async () => {
              await signOut();
              router.push("/");
            }}
          >
            Sair
          </Button>
        </div>
      </form>
    </div>
  );
}
