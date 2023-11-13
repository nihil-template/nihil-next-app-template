'use client';

import React from 'react';
import { ClassNameValue, twMerge } from 'tailwind-merge';

interface Props {
  styles?: ClassNameValue;
}

export function GetBoards({ styles, }: Props) {
  const style = {
    default: twMerge([
      ``,
      styles,
    ]),
  };

  return (
    <>
      <div>content</div>
    </>
  );
}
