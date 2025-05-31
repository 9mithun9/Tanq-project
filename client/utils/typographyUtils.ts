export function pxToRem(value: number | string): string {
  const baseFontSize = 16; // default browser font size
  const numericValue = typeof value === 'string' ? parseFloat(value) : value;
  return `${numericValue / baseFontSize}rem`;
}

export function setFont({ fontWeight, lineHeight, fontSize, letterSpacing }: {
  fontWeight?: number;
  lineHeight?: number;
  fontSize?: number | string;
  letterSpacing?: string;
}) {
  return {
    fontWeight,
    lineHeight,
    fontSize: pxToRem(fontSize || 14),
    letterSpacing,
  };
}
