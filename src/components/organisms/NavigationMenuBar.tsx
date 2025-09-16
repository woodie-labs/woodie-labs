import * as React from 'react';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { NAVIGATION_MENU_ITEMS } from '@/lib/constants/menu';

export const NavigationMenuBar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {NAVIGATION_MENU_ITEMS.map(menu => (
          <NavigationMenuItem key={menu.title}>
            <NavigationMenuLink asChild className="mr-10">
              <Link href={menu.url} className="hover:text-primaryColor">
                {menu.title}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
