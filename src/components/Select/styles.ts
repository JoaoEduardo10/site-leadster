'use client';

import styled, { css } from 'styled-components';

export const Select = styled.select`
  ${({ theme }) => css`
    border: none;
    border: 0.1rem solid #333;
    border-radius: 4.5rem;
    padding: 0.5rem;
    background-color: ${theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const Option = styled.option`
  ${({ theme }) => css``}
`;
