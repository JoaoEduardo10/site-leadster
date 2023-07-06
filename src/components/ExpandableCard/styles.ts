'use client';

import styled, { css } from 'styled-components';
import { Button } from '../DownloadButton/styles';

export const ExpandableCard = styled.article`
  ${({ theme }) => css`
    position: relative;
    width: 44%;
    height: 93%;
    border-radius: 0.8rem;
    border-top: 0.3rem solid ${theme.colors.dark_blue};
    background-color: ${theme.colors.white};

    svg.close {
      position: absolute;
      right: 1%;
      top: 1%;
      cursor: pointer;
    }

    ${theme.media_screen_size.lapTop} {
      width: 40%;
    }

    ${theme.media_screen_size.tablet} {
      width: 54%;
    }

    ${theme.media_screen_size.phone} {
      width: 85%;
    }

    ${theme.media_screen_size.small_phones} {
      width: 97%;
      height: 96%;
    }
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    padding: ${theme.padding.small};
    width: 60%;
    text-align: center;
    margin: 0 auto;
    h2 {
      font-size: 1.4rem;
      span {
        color: ${theme.colors.dark_blue};
      }
    }
  `}
`;

export const VideoConteiner = styled.section`
  ${() => css`
    position: relative;
    background-color: rgba(0, 0, 0, 0.6);

    width: 100%;
    height: 50%;

    & > * {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  `}
`;

export const Description = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.padding.small};
    padding: 0 1.4rem;

    h3 {
      font-size: 1.6rem;
      font-weight: 555;
      border-bottom: 0.1rem solid #d3d3d3;
      padding-bottom: 1rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }
  `}
`;

export const Download = styled.section`
  ${({ theme }) => css`
    padding: 0 1.4rem;

    h3 {
      font-size: 1.6rem;
      font-weight: 555;
      border-bottom: 0.1rem solid #d3d3d3;
      padding-bottom: 1rem;
      margin-bottom: 1rem;
    }

    & > div {
      display: flex;
      gap: 0.7rem;

      ${Button} {
        width: 13rem;
        font-size: 1.1rem;
      }
    }
  `}
`;
