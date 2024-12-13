const thicknessEquivalent = {
  "24": 0.6,
  "22": 0.75,
  "20": 0.9,
  "18": 1.2,
  "16": 1.5,
  "14": 1.9,
  "12": 2.5,
  "1/8": 3.175,
  "3/16": 4.7625,
  "1/4": 0.636,
  "5/16": 0.79375,
  "3/8": 0.9525,
  "1/2": 1.27,
} as const;

type Thickness = keyof typeof thicknessEquivalent;

export const calculatePartWeight = (
  width: number,
  length: number,
  thickness: string
) => {
  if (!width || !length || !thickness || width === 0 || length === 0) {
    throw new Error("data is needed");
  }

  const weight =
    width * length * 7.85 * thicknessEquivalent[thickness as Thickness];

  return weight;
};
