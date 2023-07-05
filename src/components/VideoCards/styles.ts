'use client';

import styled, { css } from 'styled-components';
import { DefaultTheme } from 'styled-components';

const videoCardsAnimation = (theme: DefaultTheme) => css`
  &:hover {
    transform: scale(1.1);
    cursor: pointer;

    div.animation {
      position: absolute;
      display: block;
      left: 0;
      top: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      background-color: ${theme.colors.blue};
      border-top-right-radius: 1rem;
      border-top-left-radius: 1rem;
      opacity: 0.6;
    }

    svg {
      position: absolute;
      z-index: 2;
      display: inline-block;
      color: ${theme.colors.white};
      height: 6rem;
      width: 6rem;
      opacity: 1;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .h2 {
      color: ${theme.colors.blue};
    }
  }
`;

export const VideoCards = styled.article`
  ${({ theme }) => css`
    flex: 1 0 calc(29.33% - 0rem);
    background-color: ${theme.colors.white};
    height: 26rem;
    width: 2rem;
    box-shadow: 0px 7px 15px -8px rgba(107, 105, 107, 1);
    margin: 0.5rem;
    border-radius: 1rem;
    transition: all 300ms ease-in-out;

    div.animation {
      display: none;
    }

    svg.icon {
      display: none;
    }

    ${videoCardsAnimation(theme)}

    @media (max-width: 983px) {
      flex: 1 0 calc(32% - 1rem);
      height: 34rem;
    }

    ${theme.media_screen_size.phone} {
      flex: 1 0 calc(32% - 1rem);
      height: 34rem;
    }

    ${theme.media_screen_size.small_phones} {
      flex: none;
      width: 80%;
      flex-direction: column;
    }
  `}
`;

export const ConteinerImage = styled.div`
  ${() => css`
    position: relative;
    height: 70%;

    img {
      width: 100%;
      height: 100%;
    }
  `}
`;

export const ConteinerHeader = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.6rem;
    margin-top: 0.3rem;
  `}
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    font-size: 1.6rem;

    ${theme.media_screen_size.small_phones} {
      font-size: 1.4rem;
    }
  `}
`;
