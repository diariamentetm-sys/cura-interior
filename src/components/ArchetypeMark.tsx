import type { ArchetypeCode } from "@/types/archetypes";

const SHAPE_BY_CODE: Record<ArchetypeCode, string> = {
  IN: "M50 12 C72 18 86 36 84 56 C82 78 64 90 50 92 C36 90 18 78 16 56 C14 36 28 18 50 12 Z",
  EX: "M18 78 L50 14 L82 78 L62 78 L50 52 L38 78 Z",
  SA: "M50 10 L58 38 L88 38 L64 56 L74 86 L50 68 L26 86 L36 56 L12 38 L42 38 Z",
  HE: "M50 14 L70 38 L70 72 L50 88 L30 72 L30 38 Z",
  RE: "M22 22 L78 22 L62 50 L78 78 L22 78 L38 50 Z",
  MA: "M50 8 L62 40 L94 50 L62 60 L50 92 L38 60 L6 50 L38 40 Z",
  PC: "M28 28 H72 V72 H28 Z",
  AM: "M50 86 C50 86 16 62 16 40 C16 28 26 20 36 20 C42 20 47 23 50 28 C53 23 58 20 64 20 C74 20 84 28 84 40 C84 62 50 86 50 86 Z",
  BO: "M20 50 Q35 18 50 50 Q65 82 80 50 Q65 18 50 50 Q35 82 20 50 Z",
  CU: "M50 18 C66 18 78 30 78 46 C78 66 50 86 50 86 C50 86 22 66 22 46 C22 30 34 18 50 18 Z",
  CR: "M50 12 L66 34 L90 38 L72 56 L76 80 L50 68 L24 80 L28 56 L10 38 L34 34 Z",
  GO: "M22 78 V36 L50 14 L78 36 V78 H62 V54 H38 V78 Z",
};

type ArchetypeMarkProps = {
  code: ArchetypeCode;
  className?: string;
};

export function ArchetypeMark({ code, className = "" }: ArchetypeMarkProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`h-full w-full ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <circle
        cx="50"
        cy="50"
        r="46"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.18"
        strokeWidth="1"
      />
      <path
        d={SHAPE_BY_CODE[code]}
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
