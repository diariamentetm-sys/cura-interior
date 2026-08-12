"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, Suspense, useState } from "react";
import { Button } from "@/components/Button";
import { createClient } from "@/lib/supabase/client";
import { syncLocalProgressToSupabase } from "@/lib/portalSync";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/meu-mapa";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { data, error: signError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signError) {
      setLoading(false);
      setError("Não foi possível entrar. Verifique email e senha.");
      return;
    }

    if (data.user) {
      try {
        await syncLocalProgressToSupabase(data.user.id);
      } catch {
        // ignore
      }
    }

    setLoading(false);
    router.push(next);
  }

  async function handleGoogle() {
    const supabase = createClient();
    const origin = window.location.origin;
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${origin}/auth/callback?next=${encodeURIComponent(next)}`,
      },
    });
  }

  return (
    <div className="mx-auto w-full max-w-md px-5 py-16 sm:px-8">
      <div className="space-y-3 text-center">
        <h1 className="font-display text-4xl text-ink">Entrar</h1>
        <p className="text-ink-muted">
          Continue construindo seu mapa pessoal.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-10 space-y-4">
        <label className="block space-y-2 text-sm">
          <span>Email</span>
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-sm border border-border bg-bg-elevated px-4 py-3 outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-wine"
          />
        </label>
        <label className="block space-y-2 text-sm">
          <span>Senha</span>
          <input
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-sm border border-border bg-bg-elevated px-4 py-3 outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-wine"
          />
        </label>
        {error && <p className="text-sm text-terracotta">{error}</p>}
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </Button>
      </form>

      <div className="mt-4">
        <Button
          type="button"
          variant="secondary"
          className="w-full"
          onClick={() => void handleGoogle()}
        >
          Continuar com Google
        </Button>
      </div>

      <div className="mt-6 space-y-2 text-center text-sm text-ink-muted">
        <p>
          <Link href="/recuperar-senha" className="hover:text-ink">
            Recuperar senha
          </Link>
        </p>
        <p>
          Ainda sem mapa?{" "}
          <Link href="/cadastro" className="text-wine hover:opacity-80">
            Criar conta
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="py-24 text-center text-ink-muted">Carregando...</div>}>
      <LoginForm />
    </Suspense>
  );
}
