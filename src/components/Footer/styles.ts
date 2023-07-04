'use client';

import styled, { css } from 'styled-components';
import { Conteiner as Logo } from '../Logo/styles';

export const Footer = styled.footer`
  ${() => css`
    ${Logo} {
      padding-top: 2rem;
      padding-bottom: 0;
    }
  `}
`;

export const ConteinerFooterTopics = styled.footer`
  ${({ theme }) => css`
    padding-top: ${theme.padding.extra_small};
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    ${theme.media_screen_size.small_phones} {
      width: 100%;
      margin: 0%;
      flex-direction: column;
      padding: 1rem;
    }
  `}
`;

export const Line = styled.div`
  ${({ theme }) => css`
    padding: 0.1rem;
    width: 100%;
    height: 20%;
    background-color: #d3d3d3;
    margin: ${theme.padding.extra_small} 0 0 0;
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    color: gray;
    text-align: center;

    ${theme.media_screen_size.small_phones} {
      font-size: 1rem;
    }
  `}
`;
