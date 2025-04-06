const isObj = (obj: unknown): obj is Record<string, unknown> =>
  typeof obj === "object" && obj !== null;

export function deepEquals<T>(objA: T, objB: T): boolean {
  if (objA === objB) return true;

  if (typeof objA !== typeof objB) return false;
  if (objA === null || objB === null) return false;

  if (Array.isArray(objA) && Array.isArray(objB)) {
    if (objA.length !== objB.length) return false;
    for (let i = 0; i < objA.length; i++) {
      if (!deepEquals(objA[i], objB[i])) return false;
    }
    return true;
  }

  if (!isObj(objA) || !isObj(objB)) return false;

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;
  return keysA.every((key) => deepEquals(objA[key], objB[key]));
}
