import { TNavigationMenu, TSidebarMenu } from '@/types/menu';

export const SIDEBAR_MENU_ITEMS: TSidebarMenu[] = [
  {
    title: 'Utility Tools',
    subMenu: [
      { title: 'JSON Formatter', url: '/utils/json-formatter' },
      // { title: 'JWT Decoder', url: '/' },
      // { title: 'Regex Tester', url: '/' },
      { title: 'Base64 Encoder/Decoder', url: '/' },
      // { title: 'URL Encoder/Decoder', url: '/' },
      // { title: 'HTML Encoder/Decoder', url: '/' },
    ],
    defaultOpen: true,
  },
  {
    title: 'Design Helpers',
    subMenu: [
      { title: 'CSS Gradient & Shadow Generator', url: '/' },
      { title: 'Color Palette Generator', url: '/' },
      // { title: 'Font Pairing Tool', url: '/' },
      // { title: 'Aspect Ratio Calculator', url: '/' },
      // { title: 'Image Compressor', url: '/' },
    ],
  },
  // {
  //   title: 'Development Aids',
  //   subMenu: [
  //     { title: 'API Request Builder', url: '/' },
  //     { title: 'Code Snippet Manager', url: '/' },
  //     { title: 'Version Control Helper', url: '/' },
  //     { title: 'Dependency Checker', url: '/' },
  //     { title: 'Build Size Analyzer', url: '/' },
  //   ],
  // },
  {
    title: 'Productivity Boosters',
    subMenu: [
      { title: 'Task Manager', url: '/' },
      { title: 'Time Tracker', url: '/' },
      // { title: 'Note Taking App', url: '/' },
      // { title: 'Pomodoro Timer', url: '/' },
      { title: 'Focus Music Player', url: '/' },
    ],
  },
];

export const NAVIGATION_MENU_ITEMS: TNavigationMenu[] = [
  { title: 'Favorites', url: '/' },
  { title: 'About', url: '/' },
  { title: 'Updates', url: '/' },
  { title: 'Github', url: '/' },
];
