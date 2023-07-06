import { Meta } from '@storybook/react';
import { FixedConteiner, FixedConteinerProps } from '.';

export default {
  title: 'FixedConteiner',
  component: FixedConteiner,
  args: {
    rendered: true,
    show: true,
  } as FixedConteinerProps,
} as Meta;

export const StoryFixedConteiner = (agrs: FixedConteinerProps) => {
  return <FixedConteiner {...agrs}>Cjildren</FixedConteiner>;
};
