export type TSidebarMenu = {
  title: string;
  subMenu: { title: string; url: string }[];
  defaultOpen?: boolean;
};
