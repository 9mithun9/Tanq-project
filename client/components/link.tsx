'use client';

import NextLink from 'next/link';
import { Link as MuiLink } from '@mui/material';
import { forwardRef } from 'react';

const Link = forwardRef(function Link(props: any, ref) {
  const { href, ...other } = props;

  return (
    <NextLink href={href} passHref legacyBehavior>
      <MuiLink ref={ref} {...other} />
    </NextLink>
  );
});

export default Link;
