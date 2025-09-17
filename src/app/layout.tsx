import React, { JSX } from 'react';
import type { Metadata } from 'next';
import { ASSET_PATHS } from '@/lib/constants/paths';
import CustomQueryClientProvider from '@/components/providers/QueryClientProvider';
import { SidebarProvider } from '@/components/ui/sidebar';
import { SideMenuBar } from '@/components/organisms/SideMenuBar';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Header } from '@/components/organisms/Header';
import { Toaster } from '@/components/ui/sonner';

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <CustomQueryClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider>
              <Header />
              <SideMenuBar />
              <main className="w-full mt-[69px] p-12 relative">{children}</main>
              <Toaster />
            </SidebarProvider>
          </ThemeProvider>
        </CustomQueryClientProvider>
      </body>
    </html>
  );
}
