"use client";

import type { DimensionScore } from "@/types/likert";

type DimensionMindMapProps = {
  dimensions: DimensionScore[];
  centerLabel?: string;
};

export function dimensionAnchorId(key: string): string {
  return `resultado-dimensao-${key}`;
}

/** Cores da paleta Intelecto Mágico. Centro = cérebro principal. */
const NODE_COLORS = [
  "#E63946",
  "#1E73D1",
  "#6BCB7E",
  "#B9A7E8",
  "#FFD34D",
  "#F89CB0",
];

const CENTER_FILL = "#F89CB0";
const WHITE = "#FFF7F0";

/** Raio do nó = só o percentual do resultado (26px → 64px). */
function radiusFromPercentage(percentage: number): number {
  const min = 26;
  const max = 64;
  const pct = Math.max(0, Math.min(100, percentage));
  return min + (pct / 100) * (max - min);
}

function wrapLabel(label: string, maxChars: number): string[] {
  const clean = label.replace(/\s+/g, " ").trim();
  if (clean.length <= maxChars) return [clean];
  const words = clean.split(/\s+/);
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines.slice(0, 3);
}

function polarToCartesian(
  cx: number,
  cy: number,
  radius: number,
  angleDeg: number,
) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(rad),
    y: cy + radius * Math.sin(rad),
  };
}

function scrollToDimension(key: string) {
  const el = document.getElementById(dimensionAnchorId(key));
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  el.classList.add("dimension-target-flash");
  window.setTimeout(() => {
    el.classList.remove("dimension-target-flash");
  }, 1600);
}

export function DimensionMindMap({
  dimensions,
  centerLabel = "Você",
}: DimensionMindMapProps) {
  if (dimensions.length === 0) return null;

  const count = dimensions.length;
  const radii = dimensions.map((dim) => radiusFromPercentage(dim.percentage));
  const maxNodeR = Math.max(...radii, 40);
  const centerR = 62;
  const gap = count <= 3 ? 30 : count === 5 ? 38 : 34;
  const branchRadius = centerR + maxNodeR + gap;
  const size = Math.ceil((branchRadius + maxNodeR + 20) * 2);
  const cx = size / 2;
  const cy = size / 2;
  const startAngle = -90;
  const step = 360 / count;
  const clipId = "cura-you-portrait-clip";

  return (
    <figure className="mind-map w-full">
      <figcaption className="mb-4 font-display text-xl text-ink-muted sm:text-2xl">
        Mapa das características
      </figcaption>
      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${size} ${size}`}
          className="mind-map-stage mx-auto h-auto w-full max-w-xl"
          role="group"
          aria-label="Mapa mental interativo: clique em uma característica para ler a análise"
        >
          <title>Mapa mental das dimensões</title>
          <defs>
            <clipPath id={clipId}>
              <circle cx={cx} cy={cy} r={centerR - 4} />
            </clipPath>
          </defs>

          {dimensions.map((dim, index) => {
            const angle = startAngle + step * index;
            const end = polarToCartesian(cx, cy, branchRadius, angle);
            const mid = polarToCartesian(cx, cy, branchRadius * 0.55, angle);
            const color = NODE_COLORS[index % NODE_COLORS.length];
            const nodeR = radii[index];
            const maxChars = Math.max(7, Math.floor(nodeR / 3.6));
            const lines = wrapLabel(dim.label, maxChars);
            const fontSize = Math.max(7.5, Math.min(12, nodeR * 0.2));
            const pctSize = Math.max(9, Math.min(14, nodeR * 0.24));
            const lineHeight = fontSize + 1.5;
            const blockHeight = lines.length * lineHeight + pctSize + 4;
            const textStartY = end.y - blockHeight / 2 + fontSize;
            const anchor = `#${dimensionAnchorId(dim.key)}`;

            return (
              <g key={dim.key} className="mind-map-branch">
                <path
                  className="mind-map-connector"
                  d={`M ${cx} ${cy} Q ${mid.x} ${mid.y} ${end.x} ${end.y}`}
                  fill="none"
                  stroke={color}
                  strokeWidth={1.5 + (dim.percentage / 100) * 2.5}
                  strokeOpacity={0.55}
                  strokeLinecap="round"
                />
                <g
                  className="mind-map-node-float"
                  style={{
                    ["--float-delay" as string]: `${index * 0.35}s`,
                    transformOrigin: `${end.x}px ${end.y}px`,
                  }}
                >
                  <a
                    href={anchor}
                    className="mind-map-node"
                    style={{ transformOrigin: `${end.x}px ${end.y}px` }}
                    aria-label={`${dim.label}, ${dim.percentage}%. Ir para a análise.`}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToDimension(dim.key);
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        scrollToDimension(dim.key);
                      }
                    }}
                  >
                    <circle cx={end.x} cy={end.y} r={nodeR} fill={color} />
                    <text
                      x={end.x}
                      y={textStartY}
                      textAnchor="middle"
                      fill={WHITE}
                      style={{
                        fontFamily:
                          "var(--font-display), ui-sans-serif, system-ui",
                        fontSize,
                        fontWeight: 700,
                        letterSpacing: "-0.02em",
                        pointerEvents: "none",
                      }}
                    >
                      {lines.map((line, lineIndex) => (
                        <tspan
                          key={`${dim.key}-${lineIndex}`}
                          x={end.x}
                          dy={lineIndex === 0 ? 0 : lineHeight}
                        >
                          {line}
                        </tspan>
                      ))}
                    </text>
                    <text
                      x={end.x}
                      y={textStartY + lines.length * lineHeight + 2}
                      textAnchor="middle"
                      fill={WHITE}
                      style={{
                        fontFamily:
                          "var(--font-display), ui-sans-serif, system-ui",
                        fontSize: pctSize,
                        fontWeight: 800,
                        pointerEvents: "none",
                      }}
                    >
                      {dim.percentage}%
                    </text>
                  </a>
                </g>
              </g>
            );
          })}

          <g
            className="mind-map-center-float"
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          >
            <circle cx={cx} cy={cy} r={centerR} fill={CENTER_FILL} />
            <image
              href="/images/you-portrait.png"
              x={cx - (centerR - 2)}
              y={cy - (centerR - 2) - 2}
              width={(centerR - 2) * 2}
              height={(centerR - 2) * 2}
              clipPath={`url(#${clipId})`}
              preserveAspectRatio="xMidYMid meet"
            />
            <circle
              cx={cx}
              cy={cy}
              r={centerR}
              fill="none"
              stroke={CENTER_FILL}
              strokeWidth="6"
            />
            <rect
              x={cx - 30}
              y={cy + centerR - 26}
              width={60}
              height={22}
              rx={11}
              fill={CENTER_FILL}
            />
            <text
              x={cx}
              y={cy + centerR - 13}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={WHITE}
              style={{
                fontFamily: "var(--font-display), ui-sans-serif, system-ui",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              {centerLabel}
            </text>
          </g>
        </svg>
      </div>
      <p className="mt-3 text-center text-xs text-ink-muted">
        Toque em um círculo para ir à análise daquela característica. O tamanho
        corresponde ao percentual nesta sessão.
      </p>
    </figure>
  );
}
