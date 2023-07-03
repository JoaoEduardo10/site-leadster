'use client';

import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    padding: ${theme.padding.small} 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;
