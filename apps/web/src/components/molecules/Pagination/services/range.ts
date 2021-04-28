export const range = (start: number, end: number): readonly number[] => {
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => start + i);
};
