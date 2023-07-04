'use client';

import styled, { css } from 'styled-components';

export const Main = styled.main`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.white};
  `}
`;
