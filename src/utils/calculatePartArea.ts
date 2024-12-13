export const calculatePartArea = (width: number, length: number) => {
  if (!width || !length || width === 0 || length === 0) {
    throw new Error("width and length is needed");
  }

  const area = width * length;

  return area;
};
