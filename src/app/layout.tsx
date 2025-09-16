import React, { JSX } from 'react';
import type { Metadata } from 'next';
import { ASSET_PATHS } from '@/lib/constants/paths';
import CustomQueryClientProvider from '@/components/providers/QueryClientProvider';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { SideMenuBar } from '@/components/organisms/SideMenuBar';

import '@/styles/globals.css';
import '@/styles/reset.css';

export const metadata: Metadata = {
  title: 'Woodie Labs',
  description: 'Building small but useful tools for developers and everyday life.',
  metadataBase: new URL('https://labs.devwoodie.com'),

  openGraph: {
    title: 'Woodie Labs',
    description: 'Building small but useful tools for developers and everyday life.',
    url: 'https://labs.devwoodie.com',
    siteName: 'Woodie Labs',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: ``,
        width: 1200,
        height: 628,
        alt: 'Woodie Labs',
      },
    ],
  },
  icons: {
    icon: [{ url: `${ASSET_PATHS.ICONS}/favicon.ico`, type: 'image/svg+xml' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body>
        <CustomQueryClientProvider>
          <SidebarProvider>
            <SideMenuBar />
            <main className="w-full">
              <SidebarTrigger />
              {children}
            </main>
          </SidebarProvider>
        </CustomQueryClientProvider>
        <div id="root-portal" />
      </body>
    </html>
  );
}
