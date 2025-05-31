import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';

import { layoutClasses } from '../core/classes';
import { mergeClasses } from 'minimal-shared/utils';

// ----------------------------------------------------------------------

export type AuthContentProps = BoxProps;

export function AuthContent({ sx, children, className, ...other }: AuthContentProps) {
  return (
    <Box
      className={mergeClasses([layoutClasses.content, className])}
      sx={[
        (theme) => ({
          py: 4,
          px: 3,
          width: 1,
          zIndex: 2,
          borderRadius: 3,
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 'var(--layout-auth-content-width)',
          bgcolor: theme.palette.background.paper,
          boxShadow: `0 0 40px ${theme.palette.grey[300]}`,
          backdropFilter: 'blur(6px)',
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {children}
    </Box>
  );
}
