"use client";

import { Button } from "@/components/Button";
import { DiscoveryPath } from "@/components/DiscoveryPath";
import { useAuth } from "@/components/AuthProvider";
import {
  getDiscoveryLevel,
  getQuestionnaireStatus,
} from "@/lib/portalProgress";
import {
  questionnaires,
  type DiscoveryStatus,
  type QuestionnaireSlug,
} from "@/data/questionnaires";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const { user, portal, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.replace("/meu-mapa");
    }
  }, [loading, user, router]);

  const statuses = Object.fromEntries(
    questionnaires.map((item) => [
      item.slug,
      getQuestionnaireStatus(item.slug, portal),
    ]),
  ) as Record<QuestionnaireSlug, DiscoveryStatus>;

  return (
    <div className="w-full">
      <section className="animate-fade-up mx-auto flex min-h-[78vh] w-full max-w-6xl flex-col justify-center px-5 py-16 sm:px-8 sm:py-24">
        <p className="section-eyebrow mb-6">Cura Interior</p>
        <h1 className="display-xl max-w-4xl text-5xl text-ink sm:text-6xl md:text-7xl">
          Conhecer a si
          <br />
          mesmo é um
          <br />
          <span className="text-accent">caminho.</span>
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl">
          Personalidade, emoções e padrões — uma camada de cada vez. Sem
          checklist. Sem pressão.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href="/arquetipos">Começar a me conhecer</Button>
          <Button href="/explorar" variant="secondary">
            Explorar questionários
          </Button>
        </div>
      </section>

      <section className="block-dark">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="section-eyebrow !text-accent-pink mb-6">Manifesto</p>
          <p className="display-xl max-w-4xl text-3xl text-ink-inverse sm:text-4xl md:text-5xl">
            Autoconhecimento não precisa parecer consultório.
            <span className="text-accent"> Pode ser vivo.</span> Direto. Um
            pouco ousado.
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            Você não precisa descobrir tudo de uma vez. Cada experiência é só
            mais uma parte do mapa.
          </p>
        </div>
      </section>

      <section
        id="como-funciona"
        className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24"
      >
        <DiscoveryPath
          statuses={statuses}
          completedCount={getDiscoveryLevel(portal.completions)}
        />
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
        <article className="card-panel overflow-hidden p-7 sm:p-10 md:flex md:items-end md:justify-between md:gap-10">
          <div className="max-w-2xl space-y-4">
            <p className="section-eyebrow">Por onde começar?</p>
            <p className="stage-number text-6xl text-accent sm:text-7xl">01</p>
            <h2 className="display-xl text-3xl text-ink sm:text-4xl">
              Arquétipos.
            </h2>
            <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
              O ponto mais acessível do mapa: padrões que aparecem nas suas
              relações, escolhas e jeitos de viver. Depois você decide o
              resto.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <Button href="/arquetipos">Fazer minha primeira descoberta</Button>
          </div>
        </article>
      </section>
    </div>
  );
}
