'use client';

import React from 'react';
import Link from 'next/link';
import { VERSION } from '@/lib/constants/version';

export const Logo = () => {
  return (
    <h1 className="text-[22px] font-extrabold flex items-end gap-1 w-[15rem]">
      <Link href={'/'}>Woodie Labs</Link>
      <span className="text-[12px] mb-0.5 font-normal">v{VERSION}</span>
    </h1>
  );
};
