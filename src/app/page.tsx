import React from 'react';
import { Metadata } from 'next';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'home - siteTitle',
};

export default function page() {
  const style = {
    default: twMerge([
      'text-red-500',
    ]),
  };
  return (
    <>
      <div className={style.default}>content</div>
      <Link href='/example'>Example</Link>
    </>
  );
}
