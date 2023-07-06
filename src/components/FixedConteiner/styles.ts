'use client';

import styled, { css } from 'styled-components';
import { FixedConteinerProps } from '.';

const handleShow = (show: boolean | string, rendered: boolean | string) => css`
  ${show == 'true' &&
  css`
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
    animation: openShow 300ms ease-in-out;

    @keyframes openShow {
      0% {
        transform: translateX(-100%);
        opacity: 0;
      }

      100% {
        transform: translateX(0);
      }
    }
  `}

  ${show == 'false' &&
  css`
    opacity: 0;
    animation: closeShow 0.5s ease-in-out;
    visibility: hidden;

    @keyframes closeShow {
      0% {
        transform: translateX(0);
        opacity: ${rendered == 'true' ? '1' : '0'};
        visibility: visible;
      }

      100% {
        transform: translate(-100%);
        visibility: hidden;
      }
    }
  `}
`;

export const FixedConteiner = styled.section<{
  showtoggle: boolean | string;
  renderedtoggle: boolean | string;
}>`
  ${({ renderedtoggle, showtoggle }) => css`
    position: fixed;
    z-index: 4;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(-200%);
    background-color: rgba(0, 0, 0, 0.3);

    ${handleShow(showtoggle, renderedtoggle)}
  `}
`;
