"use client";

import Image from "next/image";
import type { IntelectoMood } from "@/lib/meuMapa";

type IntelectoCompanionProps = {
  mood: IntelectoMood;
  line: string;
  size?: "md" | "lg";
  tone?: "onHero" | "onLight";
};

const moodClass: Record<IntelectoMood, string> = {
  welcome: "intelecto-mood-welcome",
  discovery: "intelecto-mood-discovery",
  achievement: "intelecto-mood-achievement",
  return: "intelecto-mood-return",
  mapComplete: "intelecto-mood-complete",
};

export function IntelectoCompanion({
  mood,
  line,
  size = "lg",
  tone = "onHero",
}: IntelectoCompanionProps) {
  const bubbleTone =
    tone === "onHero"
      ? "border-cream/25 bg-cream/15 text-cream"
      : "border-border bg-bg-elevated text-ink shadow-sm";

  return (
    <div className="relative mx-auto flex w-full max-w-[18rem] flex-col items-center gap-4 sm:max-w-[22rem]">
      <p
        className={`max-w-[16rem] rounded-2xl border px-4 py-3 text-center text-sm leading-relaxed motion-safe:animate-fade-up ${bubbleTone}`}
        role="status"
        aria-live="polite"
      >
        {line}
      </p>

      <div className={`relative ${moodClass[mood]}`}>
        <div
          className="absolute bottom-4 left-1/2 h-14 w-36 -translate-x-1/2 rounded-[100%] bg-ink/15 blur-xl"
          aria-hidden="true"
        />
        <Image
          src="/images/hero/intelecto-magico.svg"
          alt="Intelecto Mágico"
          width={size === "lg" ? 420 : 280}
          height={size === "lg" ? 420 : 280}
          className={`relative z-[1] h-auto w-full drop-shadow-lg ${
            size === "lg" ? "max-w-[16rem] sm:max-w-[20rem]" : "max-w-[11rem]"
          }`}
          priority={size === "lg"}
        />
      </div>
    </div>
  );
}
