/**
 * Formats a number as a currency string.
 * @param value - The number to format.
 * @returns The formatted currency string.
 */
export const toCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
};
