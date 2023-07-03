'use client';

import styled, { css } from 'styled-components';

export const Conteiner = styled.section`
  ${({ theme }) => css`
    padding: ${theme.padding.small};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const ConteinerLogo = styled.div`
  ${() => css`
    img {
      width: 100%;
      height: 100%;
    }
  `}
`;
