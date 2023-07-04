'use client';

import styled, { css } from 'styled-components';

export const FooterTopics = styled.section`
  ${({ theme }) => css``}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    margin-bottom: ${theme.padding.extra_small};
    font-weight: 600;
  `}
`;

export const List = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  `}
`;

export const Icon = styled.span`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d3d3d3;
    height: 10%;
    width: 10%;
    border-radius: 50%;

    svg {
      font-size: 2rem;
      transform: translateY(10%);
    }

    ${theme.media_screen_size.small_phones} {
      height: 6%;
      width: 6%;

      svg {
        font-size: 1.6rem;
      }
    }
  `}
`;

export const Contact = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.dark_blue};
  `}
`;

export const Topics = styled.li`
  ${({ theme }) => css`
    display: flex;
    gap: 3rem;

    a {
      color: #222;
      text-decoration: none;
      transition: all 300ms ease-in-out;

      &:hover {
        color: ${theme.colors.dark_blue};
        text-decoration: underline;
      }
    }
  `}
`;
