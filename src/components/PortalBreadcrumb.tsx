"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  getInstrument,
  getModule,
  type InstrumentSlug,
  type ModuleSlug,
} from "@/data/instruments";

type Crumb = {
  label: string;
  href?: string;
};

const modulesCrumb: Crumb = { label: "Módulos", href: "/explorar" };

const staticCrumbs: Record<string, Crumb[]> = {
  "/explorar": [{ label: "Módulos" }],
  "/sobre": [{ label: "Sobre" }],
  "/login": [{ label: "Entrar" }],
  "/cadastro": [{ label: "Criar conta" }],
  "/recuperar-senha": [
    { label: "Entrar", href: "/login" },
    { label: "Recuperar senha" },
  ],
  "/meu-mapa": [{ label: "Meu Mapa" }],
  "/meu-mapa/historico": [
    { label: "Meu Mapa", href: "/meu-mapa" },
    { label: "Histórico" },
  ],
  "/meu-mapa/preview": [
    { label: "Meu Mapa", href: "/meu-mapa" },
    { label: "Prévia" },
  ],
  "/conquistas": [{ label: "Conquistas" }],
  "/perfil": [{ label: "Perfil" }],
  "/arquetipos": [{ label: "Arquétipos" }],
  "/arquetipos/questionario": [
    { label: "Arquétipos", href: "/arquetipos" },
    { label: "Questionário" },
  ],
  "/arquetipos/resultado": [
    { label: "Arquétipos", href: "/arquetipos" },
    { label: "Resultado" },
  ],
  "/persona": [{ label: "Persona" }],
  "/persona/questionario": [
    { label: "Persona", href: "/persona" },
    { label: "Questionário" },
  ],
  "/persona/resultado": [
    { label: "Persona", href: "/persona" },
    { label: "Resultado" },
  ],
  "/sombra": [{ label: "Sombra" }],
  "/sombra/questionario": [
    { label: "Sombra", href: "/sombra" },
    { label: "Questionário" },
  ],
  "/sombra/resultado": [
    { label: "Sombra", href: "/sombra" },
    { label: "Resultado" },
  ],
  "/necessidades-emocionais": [{ label: "Necessidades emocionais" }],
  "/necessidades-emocionais/questionario": [
    { label: "Necessidades emocionais", href: "/necessidades-emocionais" },
    { label: "Questionário" },
  ],
  "/necessidades-emocionais/resultado": [
    { label: "Necessidades emocionais", href: "/necessidades-emocionais" },
    { label: "Resultado" },
  ],
  "/conflitos-internos": [{ label: "Conflitos internos" }],
  "/conflitos-internos/questionario": [
    { label: "Conflitos internos", href: "/conflitos-internos" },
    { label: "Questionário" },
  ],
  "/conflitos-internos/resultado": [
    { label: "Conflitos internos", href: "/conflitos-internos" },
    { label: "Resultado" },
  ],
  "/questionario": [
    { label: "Arquétipos", href: "/arquetipos" },
    { label: "Questionário" },
  ],
  "/resultado": [
    { label: "Arquétipos", href: "/arquetipos" },
    { label: "Resultado" },
  ],
};

function instrumentCrumbs(slug: InstrumentSlug, leaf?: Crumb): Crumb[] {
  const instrument = getInstrument(slug);
  const origin = instrument ? getModule(instrument.moduleSlug) : undefined;
  if (!instrument || !origin) return [{ label: "Teste" }];

  const test: Crumb = leaf
    ? { label: instrument.name, href: instrument.href }
    : { label: instrument.name };

  return [
    modulesCrumb,
    { label: origin.name, href: origin.href },
    leaf ? test : { label: instrument.name },
    ...(leaf ? [leaf] : []),
  ];
}

function crumbsForPath(pathname: string): Crumb[] {
  const path = pathname.split("?")[0].replace(/\/$/, "") || "/";
  const home: Crumb = { label: "Home", href: path === "/" ? undefined : "/" };
  if (path === "/") return [{ label: "Home" }];

  const moduleMatch = path.match(/^\/modulos\/([^/]+)$/);
  if (moduleMatch) {
    const origin = getModule(moduleMatch[1] as ModuleSlug);
    return [home, modulesCrumb, { label: origin?.name ?? "Módulo" }];
  }

  const instrumentMatch = path.match(/^\/instrumentos\/([^/]+)(?:\/(?:questionario|resultado))?$/);
  if (instrumentMatch) {
    return [home, ...instrumentCrumbs(instrumentMatch[1] as InstrumentSlug)];
  }

  if (
    path === "/habilidades-cognitivas" ||
    path === "/habilidades-cognitivas/avaliacao" ||
    path === "/habilidades-cognitivas/resultado"
  ) {
    return [home, ...instrumentCrumbs("perfil-cognitivo")];
  }

  if (path === "/habilidades-cognitivas/memoria") {
    return [
      home,
      ...instrumentCrumbs("perfil-cognitivo", { label: "Memória e atenção" }),
    ];
  }

  const known = staticCrumbs[path];
  if (known) return [home, ...known];

  const label = path.split("/").filter(Boolean).pop() ?? "Página";
  return [home, { label }];
}

export function PortalBreadcrumb() {
  const pathname = usePathname();
  const path = pathname?.split("?")[0].replace(/\/$/, "") || "/";
  if (path === "/") return null;

  const crumbs = crumbsForPath(pathname ?? "/");

  return (
    <div className="border-b border-border/70 bg-bg">
      <nav
        aria-label="Trilha"
        className="mx-auto w-full max-w-6xl px-5 py-3 sm:px-8"
      >
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1;
            return (
              <li key={`${crumb.label}-${index}`} className="flex items-center gap-2">
                {index > 0 ? (
                  <span aria-hidden="true" className="text-ink-muted">
                    /
                  </span>
                ) : null}
                {isLast || !crumb.href ? (
                  <span
                    className={isLast ? "font-semibold text-ink" : "text-ink-muted"}
                    aria-current={isLast ? "page" : undefined}
                  >
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="text-ink-muted transition-colors hover:text-ink"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
