'use client';

import styled, { css } from 'styled-components';

export const FixedConteiner = styled.section`
  ${() => css`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
  `}
`;
