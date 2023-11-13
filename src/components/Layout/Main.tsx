import React from 'react';
import { ClassNameValue, twMerge } from 'tailwind-merge';

interface Props {
  styles?: ClassNameValue;
  children: React.ReactNode;
}

export function Main({ styles, children, }: Props) {
  const style = {
    default: twMerge([
      `  `,
      styles,
    ]),
  };

  return (
    <>
      <main className={style.default}>{children}</main>
    </>
  );
}
