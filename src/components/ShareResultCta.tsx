"use client";

import { useState, type ReactNode } from "react";

type ShareResultCtaProps = {
  title: string;
  primaryLabel: string;
  /** URL pública para convidar outras pessoas (ex.: intro do teste). */
  shareUrl?: string;
};

function buildShareMessage(
  title: string,
  primaryLabel: string,
  url: string,
): string {
  return `Meu resultado em ${title}: ${primaryLabel}. Explore no Cura Interior — ${url}`;
}

function resolveShareUrl(shareUrl?: string): string {
  if (shareUrl) {
    if (shareUrl.startsWith("http")) return shareUrl;
    if (typeof window !== "undefined") {
      return `${window.location.origin}${shareUrl}`;
    }
    return shareUrl;
  }
  if (typeof window !== "undefined") return window.location.href;
  return "https://curainterior.com";
}

function IconThreads({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M18.263 11.097c-.03-3.486-1.92-5.586-5.111-5.586-2.13 0-3.922.963-4.863 2.499l2.062 1.438c.535-.843 1.272-1.543 2.628-1.543 1.528 0 2.318.85 2.544 2.431a15 15 0 0 0-2.236-.173c-4.125 0-6.068 1.867-6.068 4.336s1.943 3.99 4.804 3.99c3.139 0 5.013-2.115 5.781-4.735.798.361 1.348 1.204 1.348 2.47 0 3.387-3.907 5.232-7.22 5.232-4.885 0-8.077-3.207-8.077-8.424 0-6.392 4.223-10.487 9.9-10.487 3.808 0 5.69 1.671 6.97 3.914l2.108-1.475C21.44 2.078 18.331 0 13.663 0 6.227 0 1.168 5.277 1.168 12.934c0 7 4.953 11.066 10.856 11.066 4.878 0 9.809-2.846 9.809-7.716 0-2.545-1.46-4.231-3.569-5.187m-6.33 4.855c-1.077 0-2.026-.512-2.026-1.453 0-1.483 1.822-1.934 3.606-1.934.678 0 1.34.045 1.927.173-.422 1.927-1.671 3.215-3.508 3.214Z" />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M14.5 8.5V6.8c0-.55.1-.82.85-.82H16.5V3h-2.15C11.7 3 10.5 4.45 10.5 6.55v1.95H8.5V11h2v10h4V11h2.35l.35-2.5H14.5Z" />
    </svg>
  );
}

function ShareButton({
  label,
  icon,
  onClick,
}: {
  label: string;
  icon: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className="inline-flex min-h-11 items-center justify-center gap-2.5 rounded-full border border-border px-5 text-sm font-semibold tracking-wide text-ink transition-colors hover:border-ink/30 hover:bg-sand/40"
      onClick={onClick}
    >
      <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center">
        {icon}
      </span>
      {label}
    </button>
  );
}

export function ShareResultCta({
  title,
  primaryLabel,
  shareUrl,
}: ShareResultCtaProps) {
  const [instagramNote, setInstagramNote] = useState<string | null>(null);

  function openShare(network: "threads" | "facebook") {
    const url = resolveShareUrl(shareUrl);
    const message = buildShareMessage(title, primaryLabel, url);

    if (network === "threads") {
      const href = `https://www.threads.net/intent/post?text=${encodeURIComponent(message)}`;
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }

    const href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(message)}`;
    window.open(href, "_blank", "noopener,noreferrer");
  }

  async function shareOnInstagram() {
    const url = resolveShareUrl(shareUrl);
    const message = buildShareMessage(title, primaryLabel, url);

    try {
      await navigator.clipboard.writeText(message);
      setInstagramNote("Texto copiado — cole na sua publicação no Instagram.");
    } catch {
      setInstagramNote(
        "Copie o texto manualmente e cole na sua publicação no Instagram.",
      );
    }

    window.open("https://www.instagram.com/", "_blank", "noopener,noreferrer");
    window.setTimeout(() => setInstagramNote(null), 5000);
  }

  const iconClass = "h-5 w-5";

  return (
    <section className="space-y-4 border-t border-border pt-8">
      <div className="space-y-2">
        <h2 className="font-display text-2xl text-ink sm:text-3xl">
          Compartilhar resultado
        </h2>
        <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
          Convide alguém a olhar o próprio mapa. O link leva ao teste — o texto
          leva o seu resultado desta sessão.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <ShareButton
          label="Threads"
          icon={<IconThreads className={iconClass} />}
          onClick={() => openShare("threads")}
        />
        <ShareButton
          label="Instagram"
          icon={<IconInstagram className={iconClass} />}
          onClick={() => void shareOnInstagram()}
        />
        <ShareButton
          label="Facebook"
          icon={<IconFacebook className={iconClass} />}
          onClick={() => openShare("facebook")}
        />
      </div>

      {instagramNote && (
        <p className="text-sm text-accent-blue" role="status">
          {instagramNote}
        </p>
      )}
    </section>
  );
}
