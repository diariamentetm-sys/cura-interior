"use client";

import { useAuth } from "@/components/AuthProvider";
import { BadgeGrid } from "@/components/BadgeCard";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ConquistasPage() {
  const { user, portal, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) router.replace("/login?next=/conquistas");
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <div className="py-24 text-center text-ink-muted">
        Abrindo suas descobertas...
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="space-y-4">
        <p className="section-eyebrow">Conquistas</p>
        <h1 className="display-xl text-4xl text-ink sm:text-5xl md:text-6xl">
          Suas descobertas
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-ink-muted">
          Símbolos de momentos importantes da sua trajetória — não medalhas de
          corrida.
        </p>
      </div>

      <div className="mt-12">
        <BadgeGrid unlocked={portal.unlockedBadges} />
      </div>
    </div>
  );
}
