"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";

const authItems = [
  { href: "/meu-mapa", label: "Mapa" },
  { href: "/explorar", label: "Explorar" },
  { href: "/conquistas", label: "Conquistas" },
  { href: "/perfil", label: "Perfil" },
];

const publicItems = [
  { href: "/", label: "Início" },
  { href: "/explorar", label: "Explorar" },
  { href: "/login", label: "Entrar" },
  { href: "/cadastro", label: "Criar conta" },
];

export function MobileNav() {
  const pathname = usePathname();
  const { user } = useAuth();

  // Esconde quando há barra CTA fixa (intro, questionário, resultado).
  if (pathname?.includes("/questionario")) return null;
  if (pathname?.includes("/resultado")) return null;
  if (/^\/instrumentos\/[^/]+$/.test(pathname ?? "")) return null;

  const items = user ? authItems : publicItems;

  return (
    <nav
      aria-label="Mobile"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border/80 bg-bg-elevated/95 backdrop-blur-sm sm:hidden"
    >
      <ul className="mx-auto flex max-w-lg items-stretch justify-around px-2 py-2">
        {items.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname?.startsWith(item.href);

          return (
            <li key={item.href} className="flex-1">
              <Link
                href={item.href}
                className={`flex min-h-11 items-center justify-center px-2 text-xs font-semibold tracking-wide ${
                  isActive ? "text-accent" : "text-ink-muted"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
