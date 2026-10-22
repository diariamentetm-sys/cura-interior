"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";

const STORAGE_KEY = "cura-intelecto-look";

const accessories = [
  { id: "nenhum", label: "Sem acessório" },
  { id: "oculos", label: "Óculos" },
  { id: "chapeu", label: "Chapéu" },
  { id: "laco", label: "Laço" },
] as const;

const expressions = [
  { id: "serena", label: "Serena" },
  { id: "curiosa", label: "Curiosa" },
  { id: "celebra", label: "Celebra" },
] as const;

type AccessoryId = (typeof accessories)[number]["id"];
type ExpressionId = (typeof expressions)[number]["id"];

type Look = {
  accessory: AccessoryId;
  expression: ExpressionId;
};

const defaultLook: Look = { accessory: "nenhum", expression: "serena" };

function readLook(userId: string): Look {
  try {
    const raw = window.localStorage.getItem(`${STORAGE_KEY}:${userId}`);
    if (!raw) return defaultLook;
    const parsed = JSON.parse(raw) as Partial<Look>;
    const accessory = accessories.some((item) => item.id === parsed.accessory)
      ? parsed.accessory!
      : defaultLook.accessory;
    const expression = expressions.some((item) => item.id === parsed.expression)
      ? parsed.expression!
      : defaultLook.expression;
    return { accessory, expression };
  } catch {
    return defaultLook;
  }
}

type IntelectoCustomizerProps = {
  userId: string;
};

export function IntelectoCustomizer({ userId }: IntelectoCustomizerProps) {
  const [look, setLook] = useState<Look>(defaultLook);
  const [ready, setReady] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    setLook(readLook(userId));
    setReady(true);
  }, [userId]);

  function saveLook() {
    window.localStorage.setItem(
      `${STORAGE_KEY}:${userId}`,
      JSON.stringify(look),
    );
    setMessage("Combinação salva neste dispositivo.");
  }

  const accessoryLabel =
    accessories.find((item) => item.id === look.accessory)?.label ??
    "Sem acessório";
  const expressionLabel =
    expressions.find((item) => item.id === look.expression)?.label ?? "Serena";

  return (
    <section className="mt-12 space-y-5 border-t border-border pt-10">
      <div className="space-y-2">
        <h2 className="font-display text-2xl text-ink">Seu Intelecto</h2>
        <p className="text-sm leading-relaxed text-ink-muted">
          A identidade do mascote permanece: cérebro rosa, membros pretos e
          tênis azuis. Os acessórios oficiais entram depois, em camadas, sem
          redesenhar o personagem.
        </p>
      </div>

      <figure className="overflow-hidden rounded-[1.5rem] border border-border bg-sand/50">
        <div className="relative mx-auto h-56 w-full max-w-xs">
          <Image
            src="/images/intelecto-magico.png"
            alt="Intelecto Mágico, mascote do Cura Interior"
            fill
            className="object-contain p-4"
            sizes="320px"
          />
        </div>
        <figcaption className="px-4 pb-4 text-center text-sm text-ink-muted">
          {expressionLabel} · {accessoryLabel}
          {look.accessory !== "nenhum"
            ? " · ilustração do acessório em breve"
            : ""}
        </figcaption>
      </figure>

      <fieldset className="space-y-3" disabled={!ready}>
        <legend className="text-sm font-semibold text-ink">Acessório</legend>
        <div className="flex flex-wrap gap-2">
          {accessories.map((item) => (
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

      <fieldset className="space-y-3" disabled={!ready}>
        <legend className="text-sm font-semibold text-ink">Expressão</legend>
        <div className="flex flex-wrap gap-2">
          {expressions.map((item) => (
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
                  setLook((current) => ({ ...current, expression: item.id }))
                }
              />
              {item.label}
            </label>
          ))}
        </div>
      </fieldset>

      {message ? <p className="text-sm text-olive">{message}</p> : null}

      <Button type="button" onClick={saveLook}>
        Salvar combinação
      </Button>
    </section>
  );
}
