export const decoded = (str: string | undefined = '') => {
  return str.replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(dec));
};
