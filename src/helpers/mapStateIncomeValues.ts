import { TStateValue } from 'models/TState';
import { TTaxParamStateIncomeValue } from 'models/TTaxParam'; // Adjust the import path as needed

/**
 * Maps state income values from the given values object.
 * @param values - The input values object containing state and income data.
 * @returns An array of TTaxParamStateIncomeValue objects.
 */
export const mapStateIncomeValues = (
  values: Record<string, { income: number }>,
): TTaxParamStateIncomeValue[] => {
  return Object.entries(values).map(([state, income]) => {
    const { income: incomeValue } = income;
    return {
      state: state as TStateValue,
      income: incomeValue,
    };
  });
};
