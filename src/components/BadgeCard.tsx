import { MedalMark } from "@/components/mapa/MedalMark";
import { badges, type BadgeSlug } from "@/data/badges";

type BadgeCardProps = {
  slug: BadgeSlug;
  unlocked: boolean;
  unlockedAt?: string;
};

export function BadgeCard({ slug, unlocked, unlockedAt }: BadgeCardProps) {
  const badge = badges.find((item) => item.slug === slug);
  if (!badge) return null;

  return (
    <article
      className={`card-panel space-y-3 px-5 py-6 transition-opacity ${
        unlocked ? "" : "opacity-45"
      }`}
    >
      <MedalMark
        symbol={badge.symbol}
        unlocked={unlocked}
        label={badge.name}
      />
      <div className="space-y-1">
        <h3 className="font-display text-xl text-ink">{badge.name}</h3>
        <p className="text-sm leading-relaxed text-ink-muted">{badge.message}</p>
        {unlocked && unlockedAt && (
          <p className="pt-1 text-xs text-ink-muted">
            Conhecido em{" "}
            {new Date(unlockedAt).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>
        )}
        {!unlocked && (
          <p className="pt-1 text-xs font-semibold tracking-[0.12em] text-ink-muted uppercase">
            Ainda não explorado
          </p>
        )}
      </div>
    </article>
  );
}

export function BadgeGrid({
  unlocked,
}: {
  unlocked: BadgeSlug[];
}) {
  const unlockedSet = new Set(unlocked);

  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {badges.map((badge) => (
        <BadgeCard
          key={badge.slug}
          slug={badge.slug}
          unlocked={unlockedSet.has(badge.slug)}
        />
      ))}
    </div>
  );
}
