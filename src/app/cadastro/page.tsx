"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Button } from "@/components/Button";
import { createClient } from "@/lib/supabase/client";
import { syncLocalProgressToSupabase } from "@/lib/portalSync";

export default function CadastroPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    const supabase = createClient();
    const { data, error: signError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: name },
        emailRedirectTo: `${window.location.origin}/auth/callback?next=/meu-mapa`,
      },
    });

    if (signError) {
      setLoading(false);
      setError("Não foi possível criar a conta. Tente novamente.");
      return;
    }

    if (data.user && data.session) {
      try {
        await syncLocalProgressToSupabase(data.user.id);
      } catch {
        // ignore
      }
      setLoading(false);
      router.push("/meu-mapa");
      return;
    }

    setLoading(false);
    setMessage(
      "Conta criada. Se necessário, confirme o email para continuar seu mapa.",
    );
  }

  async function handleGoogle() {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=/meu-mapa`,
      },
    });
  }

  return (
    <div className="mx-auto w-full max-w-md px-5 py-16 sm:px-8">
      <div className="space-y-3 text-center">
        <h1 className="font-display text-4xl text-ink">Criar meu mapa</h1>
        <p className="text-ink-muted">
          Guarde suas descobertas e acompanhe sua trajetória com calma.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-10 space-y-4">
        <label className="block space-y-2 text-sm">
          <span>Nome</span>
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full rounded-sm border border-border bg-bg-elevated px-4 py-3 outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-wine"
          />
        </label>
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
            minLength={6}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-sm border border-border bg-bg-elevated px-4 py-3 outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-wine"
          />
        </label>
        {error && <p className="text-sm text-terracotta">{error}</p>}
        {message && <p className="text-sm text-olive">{message}</p>}
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Criando..." : "Criar conta"}
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

      <p className="mt-6 text-center text-sm text-ink-muted">
        Já tem conta?{" "}
        <Link href="/login" className="text-wine hover:opacity-80">
          Entrar
        </Link>
      </p>
    </div>
  );
}
