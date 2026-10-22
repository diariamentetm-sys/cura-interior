"use client";

import { useEffect, useState } from "react";
import { IntelectoPortrait } from "@/components/perfil/IntelectoPortrait";
import {
  INTELECTO_LOOK_EVENT,
  defaultIntelectoLook,
  intelectoLookLabel,
  readIntelectoLook,
  type IntelectoLook,
} from "@/lib/intelectoLook";

const sizeClasses = {
  sm: "h-12 w-12",
  md: "h-28 w-28 sm:h-32 sm:w-32",
} as const;

type IntelectoAvatarProps = {
  userId: string;
  size?: keyof typeof sizeClasses;
};

export function IntelectoAvatar({ userId, size = "md" }: IntelectoAvatarProps) {
  const [look, setLook] = useState<IntelectoLook>(defaultIntelectoLook);

  useEffect(() => {
    setLook(readIntelectoLook(userId));

    function onLookChange(event: Event) {
      const detail = (
        event as CustomEvent<{ userId?: string; look?: IntelectoLook }>
      ).detail;
      if (detail?.userId === userId && detail.look) setLook(detail.look);
    }

    window.addEventListener(INTELECTO_LOOK_EVENT, onLookChange);
    return () => window.removeEventListener(INTELECTO_LOOK_EVENT, onLookChange);
  }, [userId]);

  const labels = intelectoLookLabel(look);

  return (
    <div
      className={`relative overflow-hidden rounded-full border-[1.5px] border-border bg-sand/70 ${sizeClasses[size]}`}
      role="img"
      aria-label={`Intelecto Mágico, ${labels.expression}, ${labels.accessory}`}
    >
      <IntelectoPortrait look={look} className="absolute inset-0" />
    </div>
  );
}
