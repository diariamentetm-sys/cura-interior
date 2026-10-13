"use client";

import { Button } from "@/components/Button";
import { JungSketch } from "@/components/JungSketch";
import { MagazineModuleSection } from "@/components/MagazineModuleSection";
import { useAuth } from "@/components/AuthProvider";
import { modules } from "@/data/instruments";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function HomePage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setHydrated(true);
    const media = window.matchMedia("(min-width: 1024px)");
    const sync = () => setIsDesktop(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!loading && user) {
      router.replace("/meu-mapa");
    }
  }, [loading, user, router]);

  return (
    <div className="w-full">
      <section className="animate-fade-up relative mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col justify-center overflow-hidden px-5 py-14 sm:px-8 sm:py-16 lg:min-h-[78vh]">
        {hydrated && isDesktop && (
          <div className="pointer-events-none absolute inset-y-0 right-[-8%] flex w-[58%] items-center xl:right-[-4%] xl:w-[52%]">
            <div className="hero-jung-stage w-full">
              <JungSketch className="hero-jung w-full" align="right" />
            </div>
          </div>
        )}

        <div className="relative z-10 max-w-xl xl:max-w-2xl">
          <p className="section-eyebrow mb-6">Cura Interior</p>
          <h1 className="display-xl text-5xl text-ink sm:text-6xl md:text-7xl">
            Conhecer a si
            <br />
            mesmo é um
            <br />
            <span className="text-accent">caminho.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl">
            Cinco territórios. Questionários prontos — escolha um e veja o
            resultado na hora.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="#territorios">Explorar territórios</Button>
            <Button href="/instrumentos/big-five" variant="secondary">
              Começar pelo Big Five
            </Button>
          </div>
        </div>

        {hydrated && !isDesktop && (
          <div className="relative z-10 mt-12 flex justify-center">
            <div className="hero-jung-stage w-[72%] max-w-sm">
              <JungSketch
                className="hero-jung hero-jung-mobile w-full"
                align="center"
                labeled
              />
            </div>
          </div>
        )}
      </section>

      <div id="territorios" className="scroll-mt-24">
        {modules.map((module) => (
          <div
            key={module.slug}
            id={`modulo-${module.slug}`}
            className="scroll-mt-24"
          >
            <MagazineModuleSection module={module} />
          </div>
        ))}
      </div>

      <section id="como-funciona" className="scroll-mt-24 border-t border-border">
        <div className="mx-auto max-w-6xl space-y-6 px-5 py-16 sm:px-8 sm:py-20">
          <p className="section-eyebrow !text-accent-pink">Como funciona</p>
          <p className="display-xl max-w-4xl text-3xl text-ink sm:text-4xl md:text-5xl">
            Abra um questionário, responda, receba o
            <span className="text-accent"> resultado.</span>
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            Sem trilhas obrigatórias. Cada teste tem metodologia e pontuação
            próprias.
          </p>
          <Link
            href="/explorar"
            className="inline-flex text-sm font-semibold tracking-wide text-accent-pink underline-offset-4 transition-opacity hover:opacity-70"
          >
            Ver catálogo completo
          </Link>
        </div>
      </section>
    </div>
  );
}
