import type { CommonColors } from '@mui/material/styles';
import type { ThemeCssVariables } from './types';
//import type { PaletteColorNoChannels } from './core/palette';

export const themeConfig = {
  classesPrefix: 'minimal',
  fontFamily: {
    primary: 'DM Sans Variable',
    secondary: 'Barlow',
  },
  palette: {
    primary: {
      lighter: '#FFF9CC',
      light: '#FFE066',
      main: '#FFD700',
      dark: '#B8860B',
      darker: '#7A5E00',
      contrastText: '#000000',
    },
    secondary: {
      lighter: '#333333',
      light: '#2A2A2A',
      main: '#1A1A1A',
      dark: '#111111',
      darker: '#000000',
      contrastText: '#FFFFFF',
    },
    info: {
      lighter: '#CAFDF5',
      light: '#61F3F3',
      main: '#00B8D9',
      dark: '#006C9C',
      darker: '#003768',
      contrastText: '#FFFFFF',
    },
    success: {
      lighter: '#D3FCD2',
      light: '#77ED8B',
      main: '#22C55E',
      dark: '#118D57',
      darker: '#065E49',
      contrastText: '#FFFFFF',
    },
    warning: {
      lighter: '#FFF5CC',
      light: '#FFD666',
      main: '#FFAB00',
      dark: '#B76E00',
      darker: '#7A4100',
      contrastText: '#000000',
    },
    error: {
      lighter: '#FFE9D5',
      light: '#FFAC82',
      main: '#FF5630',
      dark: '#B71D18',
      darker: '#7A0916',
      contrastText: '#FFFFFF',
    },
    grey: {
      '50': '#1A1A1A',
      '100': '#1A1A1A',
      '200': '#2A2A2A',
      '300': '#3A3A3A',
      '400': '#4A4A4A',
      '500': '#5A5A5A',
      '600': '#6A6A6A',
      '700': '#7A7A7A',
      '800': '#8A8A8A',
      '900': '#9A9A9A',
    },
    common: { black: '#000000', white: '#FFFFFF' },
  },
  cssVariables: {
    cssVarPrefix: 'minimal',
    colorSchemeSelector: 'data-color-scheme',
  },
};