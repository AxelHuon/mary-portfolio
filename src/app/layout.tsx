import type { Metadata } from 'next';
import React from 'react';
import StyledComponentsRegistry from '../../lib/registry';
import GlobalStyle from '@/theme/globalStyle';
import { ScrollProvider } from '@/context/ScollContext';
import Header from '@/components/Organisms/Header/Header';

export const metadata: Metadata = {
  title: 'Mary Bonnnancy Thomas - Portfolio',
  description: 'Lorem',
  icons: {
    icon: './images/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <ScrollProvider>
            <Header />
            {children}
          </ScrollProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
