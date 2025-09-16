import React from 'react';
import { VERSION } from '@/lib/constants/version';

export const Logo = () => {
  return (
    <h1 className="text-[22px] font-bold flex items-end gap-1 w-[16rem]">
      Woodie Labs
      <span className="text-[12px] mb-0.5 font-normal">v{VERSION}</span>
    </h1>
  );
};
