export function varAlpha(color: string, opacity: number) {
  return `rgba(${color}, ${opacity})`;
}

export function createPaletteChannel(color: string) {
  return { mainChannel: color, lightChannel: color, darkChannel: color };
}