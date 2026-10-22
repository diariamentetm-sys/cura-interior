"use client";

import { IntelectoPortrait } from "@/components/perfil/IntelectoPortrait";
import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/Button";
import {
  intelectoAccessories,
  intelectoExpressions,
  intelectoLookLabel,
  readIntelectoLook,
  writeIntelectoLook,
  type IntelectoLook,
} from "@/lib/intelectoLook";

type IntelectoAvatarDrawerProps = {
  userId: string;
  open: boolean;
  onClose: () => void;
};

export function IntelectoAvatarDrawer({
  userId,
  open,
  onClose,
}: IntelectoAvatarDrawerProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  const [look, setLook] = useState<IntelectoLook>(() => readIntelectoLook(userId));
  const [message, setMessage] = useState<string | null>(null);

  onCloseRef.current = onClose;

  useEffect(() => {
    if (!open) return;
    setLook(readIntelectoLook(userId));
    setMessage(null);
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onCloseRef.current();
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, userId]);

  if (!open) return null;

  const labels = intelectoLookLabel(look);

  function saveLook() {
    writeIntelectoLook(userId, look);
    setMessage("Combinação salva neste dispositivo.");
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button
        type="button"
        className="absolute inset-0 bg-ink/40"
        aria-label="Fechar edição do avatar"
        onClick={onClose}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex h-full w-full max-w-md flex-col bg-bg shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-5 sm:px-6">
          <div className="space-y-1">
            <h2 id={titleId} className="font-display text-2xl text-ink">
              Editar avatar
            </h2>
            <p className="text-sm leading-relaxed text-ink-muted">
              Escolha acessórios para estilizar o Intelecto Mágico. O
              personagem permanece o mesmo.
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="rounded-full px-3 py-2 text-sm font-semibold text-ink-muted hover:text-ink"
          >
            Fechar
          </button>
        </div>

        <div className="flex-1 space-y-8 overflow-y-auto px-5 py-6 sm:px-6">
          <figure className="overflow-hidden rounded-[1.5rem] border border-border bg-sand/50">
            <div className="relative mx-auto h-56 w-full max-w-xs">
              <IntelectoPortrait look={look} className="absolute inset-0" />
            </div>
            <figcaption className="px-4 pb-4 text-center text-sm text-ink-muted">
              {labels.expression} · {labels.accessory}
            </figcaption>
          </figure>

          <fieldset className="space-y-3">
            <legend className="text-sm font-semibold text-ink">Acessório</legend>
            <div className="flex flex-wrap gap-2">
              {intelectoAccessories.map((item) => (
                <label
                  key={item.id}
                  className={`cursor-pointer rounded-full border px-4 py-2 text-sm ${
                    look.accessory === item.id
                      ? "border-hero bg-hero text-cream"
                      : "border-border text-ink"
                  }`}
                >
                  <input
                    type="radio"
                    name="acessorio"
                    className="sr-only"
                    checked={look.accessory === item.id}
                    onChange={() =>
                      setLook((current) => ({ ...current, accessory: item.id }))
                    }
                  />
                  {item.label}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="space-y-3">
            <legend className="text-sm font-semibold text-ink">Expressão</legend>
            <div className="flex flex-wrap gap-2">
              {intelectoExpressions.map((item) => (
                <label
                  key={item.id}
                  className={`cursor-pointer rounded-full border px-4 py-2 text-sm ${
                    look.expression === item.id
                      ? "border-hero bg-hero text-cream"
                      : "border-border text-ink"
                  }`}
                >
                  <input
                    type="radio"
                    name="expressao"
                    className="sr-only"
                    checked={look.expression === item.id}
                    onChange={() =>
                      setLook((current) => ({
                        ...current,
                        expression: item.id,
                      }))
                    }
                  />
                  {item.label}
                </label>
              ))}
            </div>
          </fieldset>

          {message ? <p className="text-sm text-olive">{message}</p> : null}
        </div>

        <div className="border-t border-border px-5 py-4 sm:px-6">
          <Button type="button" onClick={saveLook}>
            Salvar combinação
          </Button>
        </div>
      </aside>
    </div>
  );
}
