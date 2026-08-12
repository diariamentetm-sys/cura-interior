import Link from "next/link";
import { Button } from "@/components/Button";
import { discoveryStages } from "@/data/discoveryStages";
import {
  getQuestionnaire,
  type DiscoveryStatus,
  type QuestionnaireSlug,
} from "@/data/questionnaires";

const MARKER_COLORS = [
  "bg-[#F2A8C4]",
  "bg-[#7BA3D9]",
  "bg-[#2F4A6E]",
  "bg-[#8B3A4A]",
  "bg-[#7FA86A]",
] as const;

const RING_COLORS = [
  "border-[#F2A8C4]",
  "border-[#7BA3D9]",
  "border-[#2F4A6E]",
  "border-[#8B3A4A]",
  "border-[#7FA86A]",
] as const;

const FILL_COLORS = [
  "#F2A8C4",
  "#7BA3D9",
  "#2F4A6E",
  "#8B3A4A",
  "#7FA86A",
] as const;

type DiscoveryPathProps = {
  statuses?: Partial<Record<QuestionnaireSlug, DiscoveryStatus>>;
  completedCount?: number;
};

export function DiscoveryPath({
  statuses = {},
  completedCount = 0,
}: DiscoveryPathProps) {
  return (
    <div className="space-y-14">
      <div className="max-w-3xl space-y-4">
        <p className="section-eyebrow">Como funciona</p>
        <h2 className="display-xl text-4xl text-ink sm:text-5xl md:text-6xl">
          Seu caminho
          <br />
          de descoberta.
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          Cinco camadas. Sem obrigação de ordem. Cada uma revela um pedaço
          diferente de você.
        </p>
      </div>

      <div className="space-y-16">
        {discoveryStages.map((stage, stageIndex) => {
          const unlockedIntegration =
            stage.isIntegration && completedCount >= 3;

          if (stage.isIntegration) {
            return (
              <section key={stage.id} className="space-y-6">
                <StageIntro
                  index={stageIndex}
                  title={stage.title}
                  message={stage.message}
                  text={stage.text}
                />
                <div className="rounded-[1.75rem] border border-border bg-white px-5 py-6 sm:px-7 sm:py-7">
                  {unlockedIntegration ? (
                    <Button href="/meu-mapa">Ver como tudo se conecta</Button>
                  ) : (
                    <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
                      Essa camada aparece quando algumas descobertas já fazem
                      parte do seu mapa.
                    </p>
                  )}
                </div>
              </section>
            );
          }

          return (
            <section key={stage.id} className="space-y-6">
              <StageIntro
                index={stageIndex}
                title={stage.title}
                message={stage.message}
                text={stage.text}
              />

              <ol className="relative space-y-3 rounded-[1.75rem] border border-border bg-white px-4 py-5 sm:px-6 sm:py-6">
                <div
                  className="pointer-events-none absolute top-10 bottom-10 left-[2.15rem] w-px bg-[#E6E2DE] sm:left-[2.4rem]"
                  aria-hidden="true"
                />

                {stage.questionnaires.map((slug) => {
                  const meta = getQuestionnaire(slug)!;
                  const status = statuses[slug] ?? "unexplored";
                  const colorIndex = (meta.order - 1) % MARKER_COLORS.length;

                  return (
                    <li key={slug}>
                      <article className="relative z-[1] flex items-center gap-4 rounded-2xl bg-[#FAF8F6] px-3 py-4 sm:gap-5 sm:px-4 sm:py-5">
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white sm:h-14 sm:w-14 sm:text-base ${MARKER_COLORS[colorIndex]}`}
                        >
                          {String(meta.order).padStart(2, "0")}
                        </div>

                        <div className="min-w-0 flex-1 space-y-1">
                          <p className="text-xs text-ink-muted sm:text-sm">
                            Etapa {stage.id}
                            <span className="mx-1.5 text-[#D8D3CE]">·</span>
                            {meta.estimatedTime}
                            {meta.order === 1 && status === "unexplored" && (
                              <>
                                <span className="mx-1.5 text-[#D8D3CE]">·</span>
                                <span className="font-medium text-accent">
                                  Começa por aqui
                                </span>
                              </>
                            )}
                          </p>
                          <h3 className="font-display text-xl leading-tight text-ink sm:text-2xl">
                            <Link
                              href={meta.href}
                              className="transition-opacity hover:opacity-70"
                            >
                              {meta.name}
                            </Link>
                          </h3>
                        </div>

                        <div className="flex shrink-0 items-center gap-3">
                          <Button
                            href={meta.href}
                            variant="ghost"
                            className="!min-h-9 !px-3 !text-xs hidden sm:inline-flex"
                          >
                            Abrir
                          </Button>
                          <span
                            className={`h-6 w-6 rounded-full border-[2.5px] ${RING_COLORS[colorIndex]}`}
                            style={
                              status === "known"
                                ? { backgroundColor: FILL_COLORS[colorIndex] }
                                : undefined
                            }
                            title={
                              status === "known"
                                ? "Conhecido"
                                : status === "discovering"
                                  ? "Em descoberta"
                                  : "Ainda não explorado"
                            }
                            aria-label={
                              status === "known"
                                ? "Conhecido"
                                : status === "discovering"
                                  ? "Em descoberta"
                                  : "Ainda não explorado"
                            }
                          />
                        </div>
                      </article>
                    </li>
                  );
                })}
              </ol>
            </section>
          );
        })}
      </div>
    </div>
  );
}

function StageIntro({
  index,
  title,
  message,
  text,
}: {
  index: number;
  title: string;
  message: string;
  text: string;
}) {
  const accents = [
    "text-accent",
    "text-accent-blue",
    "text-accent-pink",
    "text-accent-green",
    "text-petrol",
  ] as const;

  return (
    <div className="max-w-2xl space-y-3">
      <p className="section-eyebrow">
        Camada {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="font-display text-2xl text-ink sm:text-3xl">{title}</h3>
      <p className={`text-sm font-semibold ${accents[index % accents.length]}`}>
        {message}
      </p>
      <p className="text-base leading-relaxed text-ink-muted">{text}</p>
    </div>
  );
}
