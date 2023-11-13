import React from 'react';
import { ClassNameValue, twMerge } from 'tailwind-merge';

interface Props {
  styles?: ClassNameValue;
}

export function Footer({ styles, }: Props) {
  const style = {
    default: twMerge([
      ``,
      styles,
    ]),
  };

  return (
    <>
      <footer className={style.default}>Footer</footer>
    </>
  );
}
