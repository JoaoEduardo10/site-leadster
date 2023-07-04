'use client';

import styled, { css } from 'styled-components';

export const Copyright = styled.footer`
  ${({ theme }) => css`
    display: flex;
    padding: ${theme.padding.extra_small};
    align-items: center;
    justify-content: center;
    gap: ${theme.font.sizes.extra_large};

    p {
      font-size: 1.2rem;

      span {
        color: ${theme.colors.dark_blue};
        font-weight: bold;
        cursor: pointer;
      }
    }

    ${theme.media_screen_size.small_phones} {
      flex-direction: column;
      gap: ${theme.padding.small};

      p {
        font-size: 1rem;
      }
    }
  `}
`;
