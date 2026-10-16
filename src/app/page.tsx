"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Button";
import { HeroScene } from "@/components/HeroScene";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { MagazineModuleSection } from "@/components/MagazineModuleSection";
import { useAuth } from "@/components/AuthProvider";
import { modules } from "@/data/instruments";

export default function HomePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.replace("/meu-mapa");
    }
  }, [loading, user, router]);

  return (
    <div className="w-full">
      <section className="hero-stage animate-fade-up relative isolate min-h-[min(100svh,920px)] w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero/background.svg"
          alt=""
          className="hero-backdrop"
          aria-hidden="true"
          draggable={false}
        />
        <HeroScene />

        <div className="relative z-20 mx-auto flex min-h-[min(100svh,920px)] w-full max-w-6xl items-center px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
          <div className="hero-copy max-w-[22rem] text-left sm:max-w-xl lg:max-w-2xl">
            <h1 className="hero-title display-xl text-cream">
              <span className="hero-title-line">Quem se conhece,</span>
              <span className="hero-title-line">escolhe melhor o</span>
              <span className="hero-title-line">
                próprio <span className="text-accent-yellow">caminho.</span>
              </span>
            </h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-cream/90 sm:text-xl lg:max-w-lg">
              Um espaço para se conhecer com leveza — explorar quem você é, como
              sente e o que te move.
            </p>
            <div className="mt-10">
              <Button
                href="#territorios"
                className="!bg-cream !text-ink shadow-[0_12px_32px_-12px_rgba(44,36,32,0.45)] hover:!bg-white hover:!text-ink focus-visible:!outline-cream"
              >
                Faça seu primeiro teste
              </Button>
            </div>
          </div>
        </div>
      </section>

      <HowItWorksSection />

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
    </div>
  );
}
