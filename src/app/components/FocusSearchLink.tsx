"use client";

import type { MouseEvent, ReactNode } from "react";

type FocusSearchLinkProps = {
  targetId: string;
  children: ReactNode;
  className?: string;
};

export default function FocusSearchLink({
  targetId,
  children,
  className
}: FocusSearchLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const element = document.getElementById(targetId) as
      | HTMLInputElement
      | null;
    if (!element) {
      return;
    }
    element.scrollIntoView({ behavior: "smooth", block: "center" });
    element.focus({ preventScroll: true });
  };

  return (
    <a href={`#${targetId}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
