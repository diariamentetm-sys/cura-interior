export const INTELECTO_LOOK_KEY = "cura-intelecto-look";
export const INTELECTO_LOOK_EVENT = "cura-intelecto-look-change";

export const intelectoAccessories = [
  { id: "nenhum", label: "Sem acessório" },
  { id: "oculos", label: "Óculos" },
  { id: "chapeu", label: "Chapéu" },
  { id: "laco", label: "Laço" },
] as const;

export const intelectoExpressions = [
  { id: "serena", label: "Serena" },
  { id: "curiosa", label: "Curiosa" },
  { id: "celebra", label: "Celebra" },
] as const;

export type IntelectoAccessoryId = (typeof intelectoAccessories)[number]["id"];
export type IntelectoExpressionId = (typeof intelectoExpressions)[number]["id"];

export type IntelectoLook = {
  accessory: IntelectoAccessoryId;
  expression: IntelectoExpressionId;
};

export const defaultIntelectoLook: IntelectoLook = {
  accessory: "nenhum",
  expression: "serena",
};

export function readIntelectoLook(userId: string): IntelectoLook {
  if (typeof window === "undefined") return defaultIntelectoLook;
  try {
    const raw = window.localStorage.getItem(`${INTELECTO_LOOK_KEY}:${userId}`);
    if (!raw) return defaultIntelectoLook;
    const parsed = JSON.parse(raw) as Partial<IntelectoLook>;
    const accessory = intelectoAccessories.some(
      (item) => item.id === parsed.accessory,
    )
      ? parsed.accessory!
      : defaultIntelectoLook.accessory;
    const expression = intelectoExpressions.some(
      (item) => item.id === parsed.expression,
    )
      ? parsed.expression!
      : defaultIntelectoLook.expression;
    return { accessory, expression };
  } catch {
    return defaultIntelectoLook;
  }
}

export function writeIntelectoLook(userId: string, look: IntelectoLook) {
  window.localStorage.setItem(
    `${INTELECTO_LOOK_KEY}:${userId}`,
    JSON.stringify(look),
  );
  window.dispatchEvent(
    new CustomEvent(INTELECTO_LOOK_EVENT, { detail: { userId, look } }),
  );
}

export function intelectoLookLabel(look: IntelectoLook) {
  const accessory =
    intelectoAccessories.find((item) => item.id === look.accessory)?.label ??
    "Sem acessório";
  const expression =
    intelectoExpressions.find((item) => item.id === look.expression)?.label ??
    "Serena";
  return { accessory, expression };
}
