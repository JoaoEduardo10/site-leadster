'use client';

import styled, { css } from 'styled-components';

export const FooterTopics = styled.section`
  ${({ theme }) => css`
    margin-bottom: ${theme.padding.small};
  `}
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

export const Topics = styled.li`
  ${({ theme }) => css`
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
