"use client";

import Image from "next/image";
import type { IntelectoAccessoryId, IntelectoLook } from "@/lib/intelectoLook";

const expressionMotion: Record<IntelectoLook["expression"], string> = {
  serena: "intelecto-mood-welcome",
  curiosa: "intelecto-mood-discovery",
  celebra: "intelecto-mood-achievement",
};

function AccessoryLayer({ accessory }: { accessory: IntelectoAccessoryId }) {
  if (accessory === "oculos") {
    return (
      <svg
        viewBox="0 0 120 40"
        className="pointer-events-none absolute top-[43%] left-1/2 w-[34%] -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <circle cx="28" cy="20" r="12" fill="none" stroke="#2c2420" strokeWidth="4" />
        <circle cx="92" cy="20" r="12" fill="none" stroke="#2c2420" strokeWidth="4" />
        <path d="M40 20h40" stroke="#2c2420" strokeWidth="4" />
      </svg>
    );
  }

  if (accessory === "chapeu") {
    return (
      <svg
        viewBox="0 0 80 36"
        className="pointer-events-none absolute top-[16%] left-1/2 w-[28%] -translate-x-1/2"
        aria-hidden="true"
      >
        <ellipse cx="40" cy="28" rx="36" ry="7" fill="#0a9dcf" />
        <path d="M18 28c2-16 12-22 22-22s20 6 22 22" fill="#0a9dcf" />
      </svg>
    );
  }

  if (accessory === "laco") {
    return (
      <svg
        viewBox="0 0 48 32"
        className="pointer-events-none absolute top-[34%] left-[68%] w-[14%]"
        aria-hidden="true"
      >
        <path d="M24 16C24 16 14 2 6 8c-4 8 10 12 18 8" fill="#e63946" />
        <path d="M24 16c0 0 10-14 18-8 4 8-10 12-18 8" fill="#e63946" />
        <circle cx="24" cy="16" r="4" fill="#2c2420" />
      </svg>
    );
  }

  return null;
}

type IntelectoPortraitProps = {
  look: IntelectoLook;
  className?: string;
};

export function IntelectoPortrait({ look, className = "" }: IntelectoPortraitProps) {
  return (
    <div className={`${expressionMotion[look.expression]} ${className || "relative h-full w-full"}`}>
      <Image
        src="/images/intelecto-magico.png"
        alt=""
        fill
        className="object-contain p-1.5"
        sizes="320px"
      />
      <AccessoryLayer accessory={look.accessory} />
    </div>
  );
}
