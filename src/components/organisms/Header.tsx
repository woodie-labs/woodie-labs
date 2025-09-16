import React from 'react';
import { Github } from 'lucide-react';
import { ThemeToggle } from '@/components/molecules/ThemeToggle';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/molecules/Logo';
import { NavigationMenuBar } from '@/components/organisms/NavigationMenuBar';

export const Header = () => {
  return (
    <div className="w-full bg-accent absolute top-0 z-50 flex items-center justify-between p-4 border-b">
      <div className="flex items-center justify-start">
        <Logo />
        <NavigationMenuBar />
      </div>
      <div className="flex items-center gap-2">
        <SidebarTrigger className="h-9 w-9" size="icon" variant="outline" />
        <Button variant="outline" size="icon">
          <Github />
        </Button>
        <ThemeToggle />
      </div>
    </div>
  );
};
