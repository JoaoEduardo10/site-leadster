'use client';

import styled, { css } from 'styled-components';

export const LeadsGenerationBanner = styled.section`
  ${({ theme }) => css`
    width: 100%;
    margin-top: ${theme.padding.extra_large};
    margin-bottom: ${theme.padding.small};
    background-color: ${theme.colors.light_blue};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${theme.padding.small};
    gap: ${theme.padding.small};

    ${theme.media_screen_size.phone} {
      flex-direction: column;
      padding-bottom: 3rem;
    }

    ${theme.media_screen_size.small_phones} {
      flex-direction: column;
    }
  `}
`;

export const ConteinerImage = styled.div`
  ${({ theme }) => css`
    height: 50%;
    width: 50%;

    img {
      height: 100%;
      width: 100%;
    }

    ${theme.media_screen_size.phone} {
      height: 70%;
      width: 70%;
    }

    ${theme.media_screen_size.small_phones} {
      height: 80%;
      width: 80%;
    }
  `}
`;

export const ConteinerImageText = styled.div`
  ${() => css``}
`;

export const ConteinerText = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    ${theme.media_screen_size.phone} {
      padding: ${theme.padding.small};

      h2,
      p {
        text-align: center;
      }
    }

    ${theme.media_screen_size.small_phones} {
      padding: ${theme.padding.small};

      h2,
      p {
        text-align: center;
      }
    }
  `}
`;

export const SeparatorText = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    &:nth-child(1) {
      width: 97%;
      border-bottom: 0.2rem solid #d3d3d3;
      padding-bottom: 1.4rem;
    }

    h2 {
      font-weight: 500;
      font-size: 3rem;

      span {
        display: block;
        font-weight: bold;
      }
    }

    p {
      margin-top: 0.4rem;

      span {
        font-weight: bold;
      }
    }

    &:nth-child(2) {
      margin-top: 1.6rem;
      gap: ${theme.padding.small};
      flex-direction: row;

      ${theme.media_screen_size.phone} {
        text-align: center;
      }

      ${ConteinerImageText} {
        width: 35%;
        height: 35%;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border: none;
    border-radius: 5rem;
    background-color: ${theme.colors.dark_blue};
    color: ${theme.colors.white};
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    width: 18rem;
    height: 5.4rem;

    &:hover {
      background-color: ${theme.colors.white};
      color: ${theme.colors.dark_blue};
      border: 0.1rem solid ${theme.colors.dark_blue};
    }
  `}
`;

export const Description = styled.div`
  ${({ theme }) => css`
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: 98%;

    span {
      font-size: 1rem;

      ${theme.media_screen_size.small_phones} {
        font-size: 0.8rem;
      }
    }

    ${ConteinerImageText} {
      &:nth-child(1) {
        height: 3%;
        width: 3%;

        img {
          height: 100%;
          width: 100%;
        }
      }

      height: 15%;
      width: 15%;

      img {
        height: 100%;
        width: 100%;
      }
    }
  `}
`;
