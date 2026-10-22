"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";
import { Button } from "@/components/Button";
import { IntelectoAvatar } from "@/components/perfil/IntelectoAvatar";

export function Header() {
  const pathname = usePathname();
  const { user, loading } = useAuth();

  const isActiveQuiz =
    pathname?.includes("/questionario") &&
    !pathname?.startsWith("/explorar");

  const publicLinks = [
    { href: "/#como-funciona", label: "Como funciona" },
    { href: "/#territorios", label: "Territórios" },
    { href: "/explorar", label: "Explorar" },
  ];

  const authLinks = [
    { href: "/meu-mapa", label: "Meu Mapa" },
    { href: "/explorar", label: "Explorar" },
    { href: "/conquistas", label: "Conquistas" },
  ];

  const links = user ? authLinks : publicLinks;

  return (
    <header className="site-header sticky top-0 z-40">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link
          href={user ? "/meu-mapa" : "/"}
          className="font-display text-xl text-cream transition-opacity hover:opacity-80 sm:text-2xl"
        >
          Cura Interior
        </Link>

        {!isActiveQuiz && (
          <div className="flex items-center gap-2 sm:gap-3">
            <nav aria-label="Principal" className="hidden sm:block">
              <ul className="flex flex-wrap items-center justify-end gap-1">
                {links.map((link) => {
                  const isActive = link.href.startsWith("/#")
                    ? false
                    : pathname?.startsWith(link.href);

                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                          isActive
                            ? "text-accent-yellow"
                            : "text-cream/80 hover:text-cream"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {!loading && !user && (
              <div className="flex items-center gap-2">
                <Link
                  href="/login"
                  className="hidden px-2 py-2 text-sm font-medium text-cream/80 transition-colors hover:text-cream sm:inline"
                >
                  Entrar
                </Link>
                <Button
                  href="/cadastro"
                  className="!min-h-10 !bg-cream !px-5 !text-xs !text-ink hover:!bg-white"
                >
                  Criar conta
                </Button>
              </div>
            )}

            {!loading && user && (
              <Link
                href="/perfil"
                className="hidden rounded-full sm:inline-flex"
                aria-label="Perfil"
              >
                <IntelectoAvatar userId={user.id} size="sm" />
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
