'use client';

import styled, { DefaultTheme, css } from 'styled-components';
import { DownloadButtonProps } from '.';

const getColorButton = (
  color: DownloadButtonProps['color'],
  theme: DefaultTheme,
) => {
  if (color == 'blue') return theme.colors.light_blue;

  if (color == 'yellow') return '#FFFF99';

  if (color == 'green') return '#66FF99';

  return '#CCCCCC';
};

const getColorSpan = (color: DownloadButtonProps['color']) => {
  if (color == 'blue') return '#ADD8E6';

  if (color == 'yellow') return 'yellow';

  if (color == 'green') return 'lightgreen';

  return 'gray';
};

const getColorText = (color: DownloadButtonProps['color']) => {
  if (color == 'blue') return '#333';

  if (color == 'yellow') return '#333';

  if (color == 'green') return 'green';

  return '#222';
};

const showColor = (theme: DefaultTheme, color: DownloadButtonProps['color']) =>
  css`
    background-color: ${getColorButton(color, theme)};
    border: 0.1rem solid ${getColorButton(color, theme)};
    border-radius: 0.5rem;
    color: ${getColorText(color)};

    span {
      background-color: ${getColorSpan(color)};
    }
  `;

export const Button = styled.button<{
  color: 'yellow' | 'blue' | 'green' | 'gray';
}>`
  ${({ theme, color }) => css`
    width: 14rem;
    height: 2.4rem;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 1rem;
    border: none;
    cursor: pointer;

    span {
      display: flex;
      width: 20%;
      height: 100%;
      justify-content: center;
      align-items: center;
      font-size: 1.6rem;
    }

    ${showColor(theme, color)}
  `}
`;
