'use client';

import * as React from 'react';
import { CssBaseline } from '@mui/material';
import { CssVarsProvider } from '@mui/material/styles';
import { theme } from './create-theme';

type ThemeProviderProps = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <CssVarsProvider theme={theme} defaultMode="dark">
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
}
