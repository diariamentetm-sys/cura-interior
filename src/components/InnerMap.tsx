import {
  getQuestionnaire,
  getStatusLabel,
  type DiscoveryStatus,
  type QuestionnaireSlug,
} from "@/data/questionnaires";

type InnerMapProps = {
  statuses: Record<QuestionnaireSlug, DiscoveryStatus>;
};

const nodes: Array<{
  slug: QuestionnaireSlug;
  desktop: string;
  mobileOrder: number;
}> = [
  { slug: "persona", desktop: "top-0 left-1/2 -translate-x-1/2", mobileOrder: 1 },
  {
    slug: "arquetipos",
    desktop: "top-1/2 left-0 -translate-y-1/2",
    mobileOrder: 2,
  },
  {
    slug: "sombra",
    desktop: "top-1/2 right-0 -translate-y-1/2 translate-x-0",
    mobileOrder: 3,
  },
  {
    slug: "necessidades-emocionais",
    desktop: "bottom-8 left-1/2 -translate-x-1/2",
    mobileOrder: 4,
  },
  {
    slug: "conflitos-internos",
    desktop: "bottom-0 left-1/2 -translate-x-1/2 translate-y-2",
    mobileOrder: 5,
  },
];

function StatusMark({ status }: { status: DiscoveryStatus }) {
  if (status === "known") {
    return <span className="text-accent-green" aria-hidden="true">●</span>;
  }
  if (status === "discovering") {
    return <span className="text-accent" aria-hidden="true">◐</span>;
  }
  return <span className="text-ink-muted/50" aria-hidden="true">○</span>;
}

export function InnerMap({ statuses }: InnerMapProps) {
  return (
    <div className="w-full">
      <div className="relative mx-auto hidden h-80 w-full max-w-md sm:block">
        <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="font-display text-2xl text-ink">Você</p>
        </div>

        {statuses.arquetipos === "known" && (
          <div className="absolute top-1/2 left-[18%] h-px w-[28%] bg-border" />
        )}
        {statuses.sombra === "known" && (
          <div className="absolute top-1/2 right-[18%] h-px w-[28%] bg-border" />
        )}
        {statuses.persona === "known" && (
          <div className="absolute top-[22%] left-1/2 h-[18%] w-px -translate-x-1/2 bg-border" />
        )}
        {statuses["necessidades-emocionais"] === "known" && (
          <div className="absolute bottom-[28%] left-1/2 h-[14%] w-px -translate-x-1/2 bg-border" />
        )}

        {nodes.map((node) => {
          const meta = getQuestionnaire(node.slug)!;
          const status = statuses[node.slug];
          return (
            <div
              key={node.slug}
              className={`absolute ${node.desktop} text-center`}
            >
              <p className="flex items-center justify-center gap-2 text-sm text-ink">
                <StatusMark status={status} />
                <span>{meta.name}</span>
              </p>
              <p className="mt-1 text-xs text-ink-muted">
                {getStatusLabel(status)}
              </p>
            </div>
          );
        })}
      </div>

      <ul className="space-y-4 sm:hidden">
        <li className="text-center">
          <p className="font-display text-2xl text-ink">Você</p>
        </li>
        {[...nodes]
          .sort((a, b) => a.mobileOrder - b.mobileOrder)
          .map((node) => {
            const meta = getQuestionnaire(node.slug)!;
            const status = statuses[node.slug];
            return (
              <li
                key={node.slug}
                className="flex items-center justify-between border-t border-border/60 pt-3"
              >
                <span className="flex items-center gap-2 text-sm text-ink">
                  <StatusMark status={status} />
                  {meta.name}
                </span>
                <span className="text-xs text-ink-muted">
                  {getStatusLabel(status)}
                </span>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
