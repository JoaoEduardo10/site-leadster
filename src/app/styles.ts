'use client';
import styled, { css } from 'styled-components';

export const TestStyled = styled.h1`
  background-color: ${({ theme }) => theme.colors.blue};
`;
