export const calculateDaysDifference = (initialDate?: string): number => {
  if (!initialDate) return 0;

  const compiledDate = new Date(initialDate);
  const currentDate = new Date();

  const timeDiff = currentDate.getTime() - compiledDate.getTime();

  return Math.round(timeDiff / (1000 * 3600 * 24));
};

export const getYear = (date: string): number => {
  const compiledDate = new Date(date);

  return compiledDate.getFullYear();
};

export const getMonth = (date: string): number => {
  const compiledDate = new Date(date);

  return compiledDate.getMonth();
};

export const getDay = (date: string): number => {
  const compiledDate = new Date(date);

  return compiledDate.getDate();
};

export const getMonthDayYear = (date?: string): string => {
  if (!date) return '';

  const compiledDate = new Date(date);

  return `${
    compiledDate.getMonth() + 1
  }/${compiledDate.getDate()}/${compiledDate.getFullYear()}`;
};
