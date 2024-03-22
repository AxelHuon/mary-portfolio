import type { Metadata } from 'next';
import React from 'react';
import StyledComponentsRegistry from '../../lib/registry';
import '../theme/reset.css';
import '../theme/font.css';
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
    <html lang="fr">
      <body>
        <StyledComponentsRegistry>
          <Header />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
