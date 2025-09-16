import { ChevronDown } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { SIDEBAR_MENU_ITEMS } from '@/lib/constants/menu';
import { TSidebarMenu } from '@/types/menu';

export const SideMenuBar = () => {
  return (
    <Sidebar>
      <SidebarContent className="bg-accent pt-20">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {SIDEBAR_MENU_ITEMS.map((menu: TSidebarMenu) => (
                <Collapsible
                  defaultOpen={menu.defaultOpen || false}
                  className="group/collapsible my-1"
                  key={menu.title}
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton className="font-bold hover:text-primaryColor hover:bg-transparent">
                        {menu.title}
                        <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      {menu?.subMenu.map(sub => (
                        <SidebarMenuSub key={sub.title}>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton asChild>
                              <a href={sub.url} className="hover:bg-transparent">
                                <span className="hover:text-primaryColor">{sub.title}</span>
                              </a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      ))}
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
