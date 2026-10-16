const PROPS = [
  {
    id: "estrela-1",
    src: "/images/hero/estrela-1.svg",
    alt: "",
    className: "hero-prop hero-prop-estrela-1",
  },
  {
    id: "estrela-2",
    src: "/images/hero/estrela-2.svg",
    alt: "",
    className: "hero-prop hero-prop-estrela-2",
  },
  {
    id: "estrela-3",
    src: "/images/hero/estrela-1.svg",
    alt: "",
    className: "hero-prop hero-prop-estrela-3",
  },
  {
    id: "estrela-4",
    src: "/images/hero/estrela-2.svg",
    alt: "",
    className: "hero-prop hero-prop-estrela-4",
  },
  {
    id: "estrela-5",
    src: "/images/hero/estrela-1.svg",
    alt: "",
    className: "hero-prop hero-prop-estrela-5",
  },
  {
    id: "estrela-6",
    src: "/images/hero/estrela-2.svg",
    alt: "",
    className: "hero-prop hero-prop-estrela-6",
  },
  {
    id: "estrela-7",
    src: "/images/hero/estrela-1.svg",
    alt: "",
    className: "hero-prop hero-prop-estrela-7",
  },
  {
    id: "caderno",
    src: "/images/hero/caderno.svg",
    alt: "",
    className: "hero-prop hero-prop-caderno",
  },
  {
    id: "lapis",
    src: "/images/hero/lapis.svg",
    alt: "",
    className: "hero-prop hero-prop-lapis",
  },
  {
    id: "megafone",
    src: "/images/hero/megafone.svg",
    alt: "",
    className: "hero-prop hero-prop-megafone",
  },
  {
    id: "nota",
    src: "/images/hero/nota-musical.svg",
    alt: "",
    className: "hero-prop hero-prop-nota",
  },
  {
    id: "qi",
    src: "/images/hero/qi.svg",
    alt: "",
    className: "hero-prop hero-prop-qi",
  },
  {
    id: "intelecto",
    src: "/images/hero/intelecto-magico.svg",
    alt: "Intelecto Mágico",
    className: "hero-prop hero-prop-intelecto",
  },
] as const;

export function HeroScene() {
  return (
    <div className="hero-orbit" aria-hidden="true">
      {PROPS.map((prop) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={prop.id}
          src={prop.src}
          alt={prop.alt}
          className={prop.className}
          draggable={false}
        />
      ))}
    </div>
  );
}
