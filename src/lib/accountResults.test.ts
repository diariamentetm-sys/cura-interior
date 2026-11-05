import { describe, expect, it } from "vitest";
import { completionsFromAttempts, latestAttemptRows } from "@/lib/accountResults";
import { getExplorationCount } from "@/lib/meuMapa";

const bigFive = {
  questionnaire_slug: "big-five",
  completed_at: "2026-11-01T12:00:00.000Z",
  primary_result: "Abertura",
  full_result: { primaryLabel: "Abertura" },
};

const bigFiveRetake = {
  questionnaire_slug: "big-five",
  completed_at: "2026-11-05T12:00:00.000Z",
  primary_result: "Consciência",
  full_result: { primaryLabel: "Consciência" },
};

const attachment = {
  questionnaire_slug: "estilos-apego",
  completed_at: "2026-11-03T12:00:00.000Z",
  primary_result: "Seguro",
  full_result: { primaryLabel: "Seguro" },
};

describe("tentativas de avaliação", () => {
  it("escolhe a tentativa mais recente e preserva as anteriores na lista bruta", () => {
    const rows = [bigFive, attachment, bigFiveRetake];
    expect(latestAttemptRows(rows)).toHaveLength(2);
    expect(rows).toHaveLength(3);
    expect(completionsFromAttempts(rows)).toEqual([
      expect.objectContaining({
        slug: "big-five",
        completedAt: bigFiveRetake.completed_at,
        primaryLabel: "Consciência",
      }),
      expect.objectContaining({
        slug: "estilos-apego",
        primaryLabel: "Seguro",
      }),
    ]);
  });

  it("não aumenta o total distinto quando a mesma avaliação é refeita", () => {
    const first = getExplorationCount(completionsFromAttempts([bigFive]));
    const retake = getExplorationCount(
      completionsFromAttempts([bigFive, bigFiveRetake]),
    );
    expect(first.completed).toBe(1);
    expect(retake.completed).toBe(1);
  });

  it("aumenta uma unidade quando outra avaliação é concluída", () => {
    const count = getExplorationCount(
      completionsFromAttempts([bigFiveRetake, attachment]),
    );
    expect(count.completed).toBe(2);
  });

  it("trata o mesmo instante com fusos diferentes como a mesma tentativa", () => {
    const rows = [
      { ...bigFive, completed_at: "2026-11-05T12:00:00.000Z" },
      { ...bigFiveRetake, completed_at: "2026-11-05T12:00:00+00:00" },
    ];
    const current = latestAttemptRows(rows);
    expect(current).toHaveLength(1);
    expect(getExplorationCount(completionsFromAttempts(rows)).completed).toBe(1);
  });
});
