'use client';

import styled, { css } from 'styled-components';

export const VideoGallery = styled.section`
  ${({ theme }) => css`
    width: 79%;
    margin: 0% auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1.4rem;

    ${theme.media_screen_size.small_phones} {
      width: 90%;
    }
  `}
`;

interface PaginationContainerProps {
  $actualPage: number;
}

export const PaginationConteiner = styled.div<PaginationContainerProps>`
  ${({ theme, $actualPage }) => css`
    width: 79%;
    margin: 0% auto;
    display: flex;
    justify-content: center;
    gap: ${theme.padding.small};

    .pagination {
      display: flex;
      gap: 1rem;

      & > :nth-child(1) {
        display: none;
      }

      & > :last-child {
        display: none;
      }

      & > * {
        font-size: 1.6rem;
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        cursor: pointer;

        & > * > a {
          padding: 1.3rem;
        }
      }

      & > :nth-child(${$actualPage}) {
        border: 0.1rem solid ${theme.colors.blue};
        border-radius: 0.5rem;

        & > a {
          color: ${theme.colors.blue};
        }
      }
    }
  `}
`;

export const Separator = styled.div`
  ${({ theme }) => css`
    margin: ${theme.padding.small} auto;
    margin-top: 6rem;
    height: 0.2rem;
    width: 79%;
    background-color: #d3d3d3;
  `}
`;
