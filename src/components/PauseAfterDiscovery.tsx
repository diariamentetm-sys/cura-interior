import { Button } from "@/components/Button";

type PauseAfterDiscoveryProps = {
  mapHref?: string;
};

export function PauseAfterDiscovery({
  mapHref = "/meu-mapa",
}: PauseAfterDiscoveryProps) {
  return (
    <section className="card-panel space-y-4 p-6 sm:p-8">
      <p className="section-eyebrow">Ritmo</p>
      <h2 className="display-xl text-3xl text-ink sm:text-4xl">
        Fique um pouco
        <br />
        com isso.
      </h2>
      <p className="max-w-2xl text-base leading-relaxed text-ink-muted">
        Você pode voltar ao seu mapa quando quiser. Não existe pressa para se
        conhecer.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button href={mapHref}>Ir para meu mapa</Button>
        <Button href="/explorar" variant="secondary">
          Continuar explorando
        </Button>
      </div>
    </section>
  );
}
