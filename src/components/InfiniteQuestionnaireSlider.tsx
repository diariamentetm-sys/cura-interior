"use client";

import Link from "next/link";
import { modules } from "@/data/instruments";

/** Simple module strip — replaces the old GSAP questionnaire carousel on home. */
export function InfiniteQuestionnaireSlider() {
  return (
    <section className="border-t border-border" aria-label="Territórios">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="section-eyebrow !text-accent-pink mb-6">Por onde começar?</p>
        <h2 className="display-xl max-w-3xl text-3xl text-ink sm:text-4xl md:text-5xl">
          Escolha um módulo.
        </h2>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {modules.map((module) => (
            <li key={module.slug}>
              <Link
                href={module.href}
                className="flex min-h-40 flex-col justify-between rounded-2xl border border-border p-5 text-ink transition-colors hover:border-ink/25"
              >
                <span className="text-xs font-semibold tracking-wide text-ink-muted">
                  {String(module.order).padStart(2, "0")}
                </span>
                <div className="space-y-2">
                  <h3 className="font-display text-xl">{module.name}</h3>
                  <p className="text-sm text-ink-muted">{module.shortDescription}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
