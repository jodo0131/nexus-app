import { TTaxParamStateIncomeValue } from 'models/TTaxParam'; // Adjust the import path as needed

/**
 * Reverts the mapping of state income values to the original values object.
 * @param values - An array of TTaxParamStateIncomeValue objects.
 * @returns The original values object containing state and income data.
 */
export const unmapStateIncomeValues = (
  values: TTaxParamStateIncomeValue[],
): Record<string, { income: number }> => {
  return values.reduce(
    (acc, { state, income }) => {
      acc[state as string] = { income };
      return acc;
    },
    {} as Record<string, { income: number }>,
  );
};
