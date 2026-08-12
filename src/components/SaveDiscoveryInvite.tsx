"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/Button";

type SaveDiscoveryInviteProps = {
  authenticated: boolean;
};

export function SaveDiscoveryInvite({ authenticated }: SaveDiscoveryInviteProps) {
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    if (authenticated) {
      setDismissed(true);
      return;
    }
    try {
      setDismissed(
        window.localStorage.getItem("cura-interior:invite-dismissed") === "1",
      );
    } catch {
      setDismissed(false);
    }
  }, [authenticated]);

  function dismiss() {
    try {
      window.localStorage.setItem("cura-interior:invite-dismissed", "1");
    } catch {
      // ignore
    }
    setDismissed(true);
  }

  if (authenticated || dismissed) return null;

  return (
    <section className="card-panel animate-fade-in space-y-4 p-6 sm:p-8">
      <p className="section-eyebrow">Mapa pessoal</p>
      <h2 className="display-xl text-3xl text-ink">
        Quer guardar
        <br />
        essa descoberta?
      </h2>
      <p className="max-w-2xl text-base leading-relaxed text-ink-muted">
        Crie seu perfil para acompanhar seus resultados e construir seu mapa ao
        longo do tempo.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button href="/cadastro">Criar meu mapa</Button>
        <Button variant="ghost" onClick={dismiss}>
          Continuar sem conta
        </Button>
      </div>
    </section>
  );
}
