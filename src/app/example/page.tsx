import React from 'react';
import { Metadata } from 'next';
import { GetBoards } from '@/src/components/Content/Example';

export const metadata: Metadata = {
  title: 'example',
  description: '',
};

export default function page() {
  return (
    <>
      <div>
        <GetBoards />
      </div>
    </>
  );
}
