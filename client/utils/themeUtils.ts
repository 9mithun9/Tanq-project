// utils/themeUtils.ts

/**
 * Add alpha value to hex color
 */
export function varAlpha(color: string, opacity: number = 1): string {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

/**
 * Create palette channel string for MUI v5 color system
 */
export function createPaletteChannel(color: string): string {
  return color.replace('#', '');
}
