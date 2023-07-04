'use client';

import styled, { css } from 'styled-components';

import { Menu } from '../Menu/styles';

export const NavLink = styled.nav`
  ${({ theme }) => css`
    margin: ${theme.padding.large} auto;
    width: 79%;
    padding: ${theme.padding.small};
    display: flex;
    justify-content: space-between;
    border-bottom: 0.2rem solid #d3d3d3;

    @media (max-width: 983px) {
      ${Menu} {
        display: none;
      }
      width: 50%;
      justify-content: center;
    }

    ${theme.media_screen_size.phone} {
      width: 70%;
    }

    ${theme.media_screen_size.small_phones} {
      width: 70%;
    }
  `}
`;

export const SelectConteiner = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;

    h2 {
      font-size: 1.3rem;
      font-weight: 650;
    }
  `}
`;
