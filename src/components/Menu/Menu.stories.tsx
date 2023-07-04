import { Meta } from '@storybook/react';
import { Menu, MenuProps } from '.';
import { mockMenu } from './mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: mockMenu,
  } as MenuProps,
} as Meta;

export const StoryMenu = (agrs: MenuProps) => {
  return <Menu {...agrs} />;
};
