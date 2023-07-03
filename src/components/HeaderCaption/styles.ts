'use client';

import styled, { css } from 'styled-components';

export const Conteiner = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.light_blue};
    width: 100%;
    min-height: 40rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const HeaderCaptionContainer = styled.h1`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  `}
`;

export const HeaderCaptionSubtitle = styled.div`
  ${({ theme }) => css`
    border: 2px solid ${theme.colors.blue};
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    padding: 0.3rem;
    display: inline-block;
    text-align: center;
    width: 30%;
    margin: 0 auto;
    color: ${theme.colors.dark_blue};
    font-weight: bold;
    font-size: 1rem;

    ${theme.media_screen_size.small_phones} {
      width: 40%;
    }
  `}
`;

export const HeaderCaptionText = styled.div`
  ${({ theme }) => css`
    padding-top: 1rem;
    font-weight: 400;
    font-size: 3rem;
    text-align: center;

    ${theme.media_screen_size.small_phones} {
      font-size: 2.8rem;
    }
  `}
`;

export const HeaderCaptionMainText = styled.div`
  ${({ theme }) => css`
    position: relative;
    text-align: center;
    font-weight: bold;
    font-size: 6rem;
    color: ${theme.colors.dark_blue};
    border-bottom: 1px solid #d3d3d3;
    padding: 1rem;

    ${theme.media_screen_size.small_phones} {
      font-size: 4rem;
      padding: 0.5rem;
    }

    img {
      position: absolute;
      right: -2%;
      height: 40%;
      width: 9%;

      ${theme.media_screen_size.small_phones} {
        right: -2%;
      }
    }
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    font-size: 1.2rem;
    text-align: center;
    padding: 1rem;
    font-weight: 600;

    ${theme.media_screen_size.small_phones} {
      font-size: 0.8rem;
    }
  `}
`;
