import { alpha } from '@mui/material/styles';
import { themeConfig } from '../theme-config';

export const primary = themeConfig.palette.primary;
export const secondary = themeConfig.palette.secondary;
export const info = themeConfig.palette.info;
export const success = themeConfig.palette.success;
export const warning = themeConfig.palette.warning;
export const error = themeConfig.palette.error;
export const common = themeConfig.palette.common;
export const grey = themeConfig.palette.grey;

const baseAction = {
  hover: alpha(grey['500'], 0.08),
  selected: alpha(grey['500'], 0.16),
  focus: alpha(grey['500'], 0.24),
  disabled: alpha(grey['500'], 0.8),
  disabledBackground: alpha(grey['500'], 0.24),
  hoverOpacity: 0.08,
  disabledOpacity: 0.48,
};

export const palette = {
  dark: {
    primary,
    secondary,
    info,
    success,
    warning,
    error,
    common,
    grey,
    divider: alpha(grey['500'], 0.2),
    text: {
      primary: '#ffffff',
      secondary: '#bbbbbb',
      disabled: '#888888',
    },
    background: {
      paper: '#111111',
      default: '#000000',
      neutral: '#1A1A1A',
    },
    action: {
      ...baseAction,
      active: '#FFD700',
    },
  },
};
