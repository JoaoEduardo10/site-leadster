import { GlobalStyles } from '../styles/globals-styles';
import { theme } from '../styles/theme';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

export const renderTheme = (children: React.ReactNode) => {
  return render(
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>,
  );
};
