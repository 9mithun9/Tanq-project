'use client';

import NextLink from 'next/link';
import { LinkProps } from 'next/link';
import { forwardRef } from 'react';

// ----------------------------------------------------------------------

const RouterLink = forwardRef<HTMLAnchorElement, LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>>(
  ({ href, as, replace, scroll, shallow, prefetch, locale, ...other }, ref) => (
    <NextLink
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      prefetch={prefetch}
      locale={locale}
      legacyBehavior // ✅ This line saves you
      passHref
    >
      <a ref={ref} {...other} />
    </NextLink>
  )
);

RouterLink.displayName = 'RouterLink';

export default RouterLink;
