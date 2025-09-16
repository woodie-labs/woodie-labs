import React from 'react';
import { ThemeToggle } from '@/components/molecules/ThemeToggle';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Logo } from '@/components/molecules/Logo';
import { NavigationMenuBar } from '@/components/organisms/NavigationMenuBar';
import { SearchButton } from '@/components/molecules/SearchButton';

export const Header = () => {
  return (
    <div className="w-full bg-accent absolute top-0 z-50 flex items-center justify-between p-4 border-b">
      <div className="flex items-center justify-start">
        <Logo />
        <NavigationMenuBar />
      </div>
      <div className="flex items-center gap-2">
        <SearchButton />
        <ThemeToggle />
        <SidebarTrigger className="h-9 w-9" size="icon" variant="outline" />
      </div>
    </div>
  );
};
