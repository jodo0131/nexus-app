/**
 * Converts a record of state-income pairs to an array of objects with state and income properties.
 *
 * @param values - A record where the key is the state and the value is an object containing the income.
 * @returns An array of objects, each containing a state and its corresponding income.
 */
export function toStateIncomeArray(
  values: Record<string, { income: number }>,
): { state: string; income: number }[] {
  return Object.entries(values).map(([state, value]) => ({
    state,
    income: value.income,
  }));
}

/**
 * Converts an array of state-income objects back to a record of state-income pairs.
 *
 * @param array - An array of objects, each containing a state and its corresponding income.
 * @returns A record where the key is the state and the value is an object containing the income.
 */
export function toStateIncomeRecord(
  array: { state: string; income: number }[],
): Record<string, { income: number }> {
  return array.reduce(
    (obj, item) => {
      obj[item.state] = { income: item.income };
      return obj;
    },
    {} as Record<string, { income: number }>,
  );
}
