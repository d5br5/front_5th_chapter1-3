const isObj = (obj: unknown): obj is Record<string, unknown> => {
  return obj !== null && typeof obj === "object";
};

export function shallowEquals<T>(objA: T, objB: T): boolean {
  if (objA === objB) return true;

  if (!isObj(objA) || !isObj(objB)) return false;

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  return keysA.every((key) => objA[key] === objB[key]);
}
