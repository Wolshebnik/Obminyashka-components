export const isMouseInBounds = (e: React.MouseEvent<HTMLElement>) => {
  const x = e.clientX;
  const y = e.clientY;
  const rect = e.currentTarget.getBoundingClientRect();
  const inBounds =
    x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
  return inBounds;
};
