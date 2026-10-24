'use client';

import type { MouseEvent, ReactNode } from 'react';

type SmoothScrollLinkProps = {
  href: `#${string}`;
  className?: string;
  children: ReactNode;
};

export function SmoothScrollLink({ href, className, children }: SmoothScrollLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const target = document.querySelector(href);

    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start',
    });
    window.history.pushState(null, '', href);
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
