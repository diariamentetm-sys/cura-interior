"use client";

import { useEffect, useRef } from "react";

type JungSketchProps = {
  className?: string;
  align?: "right" | "center";
  labeled?: boolean;
};

export function JungSketch({
  className = "",
  align = "right",
  labeled = false,
}: JungSketchProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    async function setup() {
      const response = await fetch("/images/jung-draw.svg");
      const markup = await response.text();
      if (cancelled || !containerRef.current) return;

      containerRef.current.innerHTML = markup;
      const svg = containerRef.current.querySelector("svg");
      if (!svg) return;

      svg.setAttribute("width", "100%");
      svg.setAttribute("height", "100%");
      svg.setAttribute(
        "preserveAspectRatio",
        align === "center" ? "xMidYMid meet" : "xMaxYMid meet",
      );
      svg.style.display = "block";
      svg.style.width = "100%";
      svg.style.height = "auto";
      svg.style.overflow = "visible";

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const paths = Array.from(svg.querySelectorAll("path"));
      paths.sort((a, b) => {
        try {
          const boxA = a.getBBox();
          const boxB = b.getBBox();
          return boxA.y - boxB.y || boxA.x - boxB.x;
        } catch {
          return 0;
        }
      });

      const cycleSeconds = 7.5;

      paths.forEach((path, index) => {
        let length = 1;
        try {
          length = Math.max(path.getTotalLength(), 1);
        } catch {
          length = 120;
        }

        path.setAttribute("stroke", "#B9A7E8");
        path.setAttribute("stroke-width", "1.75");
        path.setAttribute("stroke-linecap", "round");
        path.setAttribute("stroke-linejoin", "round");
        path.style.setProperty("--path-length", `${length}`);
        path.style.strokeDasharray = `${length}`;

        if (reduceMotion) {
          path.style.fill = "#B9A7E8";
          path.style.stroke = "none";
          path.style.strokeDashoffset = "0";
          return;
        }

        // Ghost fill keeps the silhouette alive while strokes redraw.
        path.style.fill = "rgba(185, 167, 232, 0.18)";
        path.style.stroke = "#B9A7E8";
        path.style.strokeDashoffset = `${length}`;
        path.style.animation = `jung-stroke-loop ${cycleSeconds}s ease-in-out infinite`;
        // Negative delay spreads paths across the cycle so the drawing never blanks out.
        path.style.animationDelay = `${(-index / paths.length) * cycleSeconds}s`;
      });
    }

    void setup();

    return () => {
      cancelled = true;
    };
  }, [align]);

  return (
    <div
      ref={containerRef}
      className={`hero-jung-draw is-looping ${className}`}
      role={labeled ? "img" : undefined}
      aria-label={
        labeled ? "Ilustração em traço inspirada em Carl Jung" : undefined
      }
      aria-hidden={labeled ? undefined : true}
    />
  );
}
