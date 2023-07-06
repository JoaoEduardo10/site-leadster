'use client';

import styled, { css } from 'styled-components';

export const DowloadsCards = styled.div`
  ${({ theme }) => css`
    position: absolute;
    background-color: ${theme.colors.white};
    width: 16rem;
    height: 18rem;
    left: 0;
    bottom: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    ${theme.media_screen_size.phone} {
      display: none;
    }

    ${theme.media_screen_size.small_phones} {
      display: none;
    }
  `}
`;
