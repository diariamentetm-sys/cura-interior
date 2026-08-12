import Link from "next/link";
import { Button } from "@/components/Button";

export function Footer() {
  return (
    <footer className="mt-auto pb-20 sm:pb-0">
      <div className="block-dark">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-14 sm:px-8 sm:py-16">
          <div className="max-w-2xl space-y-4">
            <p className="section-eyebrow !text-accent-pink">Cura Interior</p>
            <h2 className="display-xl text-4xl text-ink-inverse sm:text-5xl">
              Pronto para olhar
              <br />
              pra dentro?
            </h2>
            <p className="max-w-lg text-base text-white/65">
              Sem pressa. Sem ranking. Só mais uma camada do seu mapa.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button href="/explorar">Explorar agora</Button>
              <Button
                href="/cadastro"
                variant="secondary"
                className="!border-white/30 !text-ink-inverse hover:!border-white hover:!bg-white/10"
              >
                Criar meu mapa
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-white/15 pt-8 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
            <p>Cura Interior — autoconhecimento com energia.</p>
            <nav aria-label="Rodapé">
              <ul className="flex flex-wrap gap-5">
                <li>
                  <Link href="/explorar" className="transition-colors hover:text-white">
                    Explorar
                  </Link>
                </li>
                <li>
                  <Link href="/sobre" className="transition-colors hover:text-white">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="transition-colors hover:text-white">
                    Entrar
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
