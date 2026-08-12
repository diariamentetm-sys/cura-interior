"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Button } from "@/components/Button";
import { createClient } from "@/lib/supabase/client";

export default function RecuperarSenhaPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    const supabase = createClient();
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(
      email,
      {
        redirectTo: `${window.location.origin}/login`,
      },
    );

    setLoading(false);

    if (resetError) {
      setError("Não foi possível enviar o email agora.");
      return;
    }

    setMessage("Se o email existir, você receberá um link de recuperação.");
  }

  return (
    <div className="mx-auto w-full max-w-md px-5 py-16 sm:px-8">
      <div className="space-y-3 text-center">
        <h1 className="font-display text-4xl text-ink">Recuperar senha</h1>
        <p className="text-ink-muted">
          Enviaremos um link para você continuar com calma.
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
        {error && <p className="text-sm text-terracotta">{error}</p>}
        {message && <p className="text-sm text-olive">{message}</p>}
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Enviando..." : "Enviar link"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-ink-muted">
        <Link href="/login" className="hover:text-ink">
          Voltar ao login
        </Link>
      </p>
    </div>
  );
}
