'use client';

import styled, { css } from 'styled-components';

export const Menu = styled.ul`
  ${() => css`
    display: flex;
    gap: 1rem;
    align-items: center;
  `}
`;

export const Links = styled.li`
  ${({ theme }) => css`
    border: 0.1rem solid #222;
    border-radius: 4.5rem;
    font-size: 1.3rem;
    transition: all 300ms ease-in-out;

    a {
      display: inline-block;
      padding: 0.7rem;
    }

    &:hover {
      border: 0.1rem solid ${theme.colors.blue};

      a {
        color: ${theme.colors.dark_blue};
      }
    }

    &.active {
      background-color: ${theme.colors.dark_blue};
      border: none;

      a {
        color: ${theme.colors.white};
        font-weight: bold;
      }
    }
  `}
`;
