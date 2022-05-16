export const parseDate = (date = new Date()) => {
  return new Date(date).toLocaleDateString('en-US', { timeZone: 'UTC' });
};
