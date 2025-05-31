// theme/core/shadows.ts

import { alpha } from '@mui/material/styles';

type Shadows = string[];

function createShadows(baseColor: string): Shadows {
  const color1 = alpha(baseColor, 0.2);
  const color2 = alpha(baseColor, 0.14);
  const color3 = alpha(baseColor, 0.12);

  return [
    'none',
    `0px 1px 2px 0px ${color1}`,
    `0px 1px 3px 0px ${color1}, 0px 1px 2px 0px ${color2}`,
    `0px 1px 5px 0px ${color1}, 0px 2px 4px 0px ${color2}`,
    `0px 1px 8px 0px ${color1}, 0px 3px 5px 0px ${color2}`,
    `0px 1px 14px 0px ${color1}, 0px 5px 10px 0px ${color2}`,
    `0px 1px 18px 0px ${color1}, 0px 6px 12px 0px ${color2}`,
    `0px 2px 16px 1px ${color1}, 0px 7px 10px 1px ${color2}`,
    `0px 3px 18px 1px ${color1}, 0px 8px 12px 1px ${color2}`,
    `0px 4px 20px 2px ${color1}, 0px 9px 14px 2px ${color2}`,
    `0px 6px 22px 2px ${color1}, 0px 10px 16px 2px ${color2}`,
    `0px 8px 24px 2px ${color1}, 0px 11px 18px 2px ${color2}`,
    `0px 10px 26px 2px ${color1}, 0px 12px 20px 2px ${color2}`,
    `0px 12px 28px 2px ${color1}, 0px 13px 22px 2px ${color2}`,
    `0px 14px 30px 2px ${color1}, 0px 14px 24px 2px ${color2}`,
    `0px 16px 32px 2px ${color1}, 0px 15px 26px 2px ${color2}`,
    `0px 18px 34px 2px ${color1}, 0px 16px 28px 2px ${color2}`,
    `0px 20px 36px 2px ${color1}, 0px 17px 30px 2px ${color2}`,
    `0px 22px 38px 2px ${color1}, 0px 18px 32px 2px ${color2}`,
    `0px 24px 40px 2px ${color1}, 0px 19px 34px 2px ${color2}`,
    `0px 26px 42px 2px ${color1}, 0px 20px 36px 2px ${color2}`,
    `0px 28px 44px 2px ${color1}, 0px 21px 38px 2px ${color2}`,
    `0px 30px 46px 2px ${color1}, 0px 22px 40px 2px ${color2}`,
    `0px 32px 48px 2px ${color1}, 0px 23px 42px 2px ${color2}`,
    `0px 34px 50px 2px ${color1}, 0px 24px 44px 2px ${color2}`,
  ];
}

export const shadows = createShadows('#000000');
