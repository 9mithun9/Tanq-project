// theme/core/custom-shadows.ts

import { alpha } from '@mui/material/styles';

type CustomShadows = {
  z1: string;
  z4: string;
  z8: string;
  z12: string;
  z16: string;
  z20: string;
  z24: string;
};

function createCustomShadows(baseColor: string): CustomShadows {
  return {
    z1: `0 1px 2px 0 ${alpha(baseColor, 0.16)}`,
    z4: `0 4px 8px 0 ${alpha(baseColor, 0.16)}`,
    z8: `0 8px 16px 0 ${alpha(baseColor, 0.16)}`,
    z12: `0 12px 24px -4px ${alpha(baseColor, 0.16)}`,
    z16: `0 16px 32px -4px ${alpha(baseColor, 0.16)}`,
    z20: `0 20px 40px -4px ${alpha(baseColor, 0.16)}`,
    z24: `0 24px 48px 0 ${alpha(baseColor, 0.16)}`,
  };
}

// Use solid black for Tanqory theme
export const customShadows = {
  dark: createCustomShadows('#000000'),
};
