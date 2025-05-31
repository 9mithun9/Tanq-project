'use client';

import Image from 'next/image';
import { Box } from '@mui/material';
import Link from '../../components/link'; // ✅ your custom Link (with legacyBehavior inside)

export function Logo() {
  return (
    <Link href="/">
      <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
        <Image
          src="/logo/logo_single.svg"
          alt="Logo"
          width={40}
          height={40}
        />
      </Box>
    </Link>
  );
}
