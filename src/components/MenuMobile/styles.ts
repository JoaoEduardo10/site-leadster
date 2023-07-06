'use client';

import styled, { css } from 'styled-components';

import { Menu } from '../Menu/styles';

export const MenuMobileConteiner = styled.nav`
  ${({ theme }) => css`
    position: fixed;
    display: none;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);

    @media (max-width: 983px) {
      display: flex;
    }

    ${theme.media_screen_size.phone} {
      display: flex;
    }

    ${theme.media_screen_size.small_phones} {
      display: flex;
    }
  `}
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.dark_blue};
    font-size: ${theme.font.sizes.extra_small};
  `}
`;

export const MenuMobile = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    justify-content: space-around;
    padding: ${theme.padding.extra_small};
    align-items: center;
    width: 50%;
    height: 80%;
    background-color: ${theme.colors.white};
    border-radius: 0.7rem;
    flex-direction: column;
    box-shadow: 6px 10px 22px -9px rgba(235, 223, 235, 1);

    svg {
      position: absolute;
      right: 2%;
      top: 2%;
      font-size: ${theme.font.sizes.extra_small};
      color: ${theme.colors.blue};
    }

    ${Menu} {
      flex-direction: column;
      gap: ${theme.padding.small};
    }

    ${theme.media_screen_size.phone} {
      width: 70%;
    }

    ${theme.media_screen_size.small_phones} {
      width: 80%;
    }
  `}
`;
