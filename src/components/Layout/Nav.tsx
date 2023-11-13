import React from 'react';
import Link from 'next/link';
import { ClassNameValue, twMerge } from 'tailwind-merge';

interface Props {
  styles?: ClassNameValue
}

export function Nav({ styles, }: Props) {
  const style = {
    default: twMerge([
      ``,
      styles,
    ]),
  };

  return (
    <>
      <nav className={style.default}>
        <Link href='/'>홈</Link>
        <Link href='/example'>예시</Link>
      </nav>
    </>
  );
}
