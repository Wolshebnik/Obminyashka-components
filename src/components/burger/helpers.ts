export const positionTop = (size: number) => {
  if (size <= 767) return 0;

  if (size > 767 && size <= 1366) return 85;

  if (size > 1366) return 168;
};
