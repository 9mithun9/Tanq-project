import { extendTheme } from '@mui/material/styles';
import { shadows } from './core/shadows';
import { palette } from './core/palette';
import { themeConfig } from './theme-config';
import { components } from './core/components';
import { typography } from './core/typography';
import { customShadows } from './core/custom-shadows';

export const theme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        ...palette.dark,
        mode: 'dark',
        background: {
          ...palette.dark.background,
          default: '#000000',
          defaultChannel: '0 0 0',
        },
      },
    },
  },
  shadows,
  customShadows: customShadows.dark,
  components,
  typography,
  shape: { borderRadius: 8 },
  cssVarPrefix: themeConfig.cssVariables.cssVarPrefix || 'minimal',
});
