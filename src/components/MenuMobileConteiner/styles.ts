'use client';

import styled, { css } from 'styled-components';

const handleShow = (show: boolean) => css`
  ${show &&
  css`
    animation: openShow 300ms ease-in-out;

    @keyframes openShow {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }
  `}
`;

export const MenuMobileConteiner = styled.section<{ $show: boolean }>`
  ${({ theme, $show }) => css`
    position: fixed;
    display: none;
    right: 3%;
    top: 10%;
    z-index: 4;

    svg {
      cursor: pointer;
    }

    svg.open {
      font-size: 3rem;
      color: ${theme.colors.dark_blue};
    }

    @media (max-width: 983px) {
      display: block;
    }

    ${theme.media_screen_size.phone} {
      display: block;
    }

    ${theme.media_screen_size.small_phones} {
      display: block;
    }
    ${handleShow($show)}
  `}
`;
