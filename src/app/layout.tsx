import React from 'react';
import { Metadata } from 'next';
import '@/src/styles/tailwind.css';

export const metadata: Metadata = {
  title: {
    default: 'home - siteTitle',
    template: '%s - siteTitle',
  },
  description: '',
};

interface Props {
  children: React.ReactNode;
}

export default function layout({ children, }: Props) {
  return (
    <html lang='ko'>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
