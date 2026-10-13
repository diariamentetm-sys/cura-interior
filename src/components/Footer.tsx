import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border pb-20 sm:pb-0">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-12">
        <p>Cura Interior — autoconhecimento com energia.</p>
        <nav aria-label="Rodapé">
          <ul className="flex flex-wrap gap-5">
            <li>
              <Link
                href="/explorar"
                className="transition-colors hover:text-ink"
              >
                Explorar
              </Link>
            </li>
            <li>
              <Link
                href="/sobre"
                className="transition-colors hover:text-ink"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="transition-colors hover:text-ink"
              >
                Entrar
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
