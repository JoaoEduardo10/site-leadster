import { Meta } from '@storybook/react';
import { Logo, LogoProps } from '.';
import logo from '../../images/logo.png';

export default {
  title: 'Logo',
  component: Logo,
  args: {
    img: logo,
  } as LogoProps,
} as Meta;

export const StoryLogo = (agrs: LogoProps) => {
  return <Logo {...agrs} />;
};
