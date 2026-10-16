import { instruments, type DiscoveryStatus } from "@/data/instruments";

type InnerMapProps = {
  statuses: Record<string, DiscoveryStatus>;
};

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
    <ul className="mx-auto grid max-w-2xl gap-3 sm:grid-cols-2">
      {instruments.map((instrument) => {
        const status = statuses[instrument.slug] ?? "unexplored";
        return (
          <li
            key={instrument.slug}
            className="flex items-center gap-2 rounded-xl border border-border bg-bg-elevated px-4 py-3 text-sm text-ink"
          >
            <StatusMark status={status} />
            <span>{instrument.name}</span>
          </li>
        );
      })}
    </ul>
  );
}
