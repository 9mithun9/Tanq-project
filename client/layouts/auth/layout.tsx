import type { CSSObject, Breakpoint } from '@mui/material/styles';
import { merge } from 'es-toolkit';

import Box from '@mui/material/Box';

import { AuthContent } from './content';
import { MainSection } from '../core/main-section';
import { LayoutSection } from '../core/layout-section';

import type { AuthContentProps } from './content';
import type { MainSectionProps } from '../core/main-section';
import type { LayoutSectionProps } from '../core/layout-section';

type LayoutBaseProps = Pick<LayoutSectionProps, 'sx' | 'children' | 'cssVars'>;

export type AuthLayoutProps = LayoutBaseProps & {
  layoutQuery?: Breakpoint;
  slotProps?: {
    main?: MainSectionProps;
    content?: AuthContentProps;
  };
};

export function AuthLayout({
  sx,
  cssVars,
  children,
  slotProps,
  layoutQuery = 'md',
}: AuthLayoutProps) {
  const renderMain = () => (
    <MainSection
      {...slotProps?.main}
      sx={[
        (theme) => ({
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          backgroundImage: 'url("/overlay.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          p: theme.spacing(3),
        }),
        ...(Array.isArray(slotProps?.main?.sx)
          ? slotProps?.main?.sx
          : [slotProps?.main?.sx]),
      ]}
    >
      <AuthContent {...slotProps?.content}>{children}</AuthContent>
    </MainSection>
  );

  return (
    <LayoutSection
      headerSection={null}
      footerSection={null}
      cssVars={{ '--layout-auth-content-width': '420px', ...cssVars }}
      sx={[...(Array.isArray(sx) ? sx : [sx])]}
    >
      {renderMain()}
    </LayoutSection>
  );
}

export default AuthLayout;
