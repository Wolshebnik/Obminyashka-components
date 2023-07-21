export const positionTop = (size: number) => {
  switch (true) {
    case size <= 768:
      return 0;
    case size > 767 && size <= 1366:
      return 85;
    case size > 1366:
      return 168;
  }
};
