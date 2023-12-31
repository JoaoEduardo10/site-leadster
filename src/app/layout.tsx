'use client';

import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from './lib/registry';
import { theme } from '@/styles/theme';
import { GlobalStyles } from '@/styles/globals-styles';
import { TemplateLeadster } from '../template';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/icon.png" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <TemplateLeadster>{children}</TemplateLeadster>
            <GlobalStyles />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
