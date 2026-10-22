import Link from "next/link";
import {
  getInstrument,
  getModule,
  type InstrumentSlug,
} from "@/data/instruments";

type AssessmentBreadcrumbProps = {
  slug: InstrumentSlug;
};

export function AssessmentBreadcrumb({ slug }: AssessmentBreadcrumbProps) {
  const instrument = getInstrument(slug);
  const origin = instrument ? getModule(instrument.moduleSlug) : undefined;
  if (!instrument || !origin) return null;

  return (
    <nav aria-label="Origem do teste">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
        <li>
          <Link
            href={origin.href}
            className="text-ink-muted transition-colors hover:text-ink"
          >
            {origin.name}
          </Link>
        </li>
        <li aria-hidden="true" className="text-ink-muted">
          /
        </li>
        <li className="font-semibold text-ink" aria-current="page">
          {instrument.name}
        </li>
      </ol>
    </nav>
  );
}
