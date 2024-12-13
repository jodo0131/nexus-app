/**
 * Extracts the state properties from an array of objects.
 *
 * @param data - An array of objects, each containing a state and income property.
 * @returns An array of strings representing the state values.
 */
export function extractStates(
  data: { state: string; income: number }[],
): string[] {
  return data?.map((item) => item.state);
}
