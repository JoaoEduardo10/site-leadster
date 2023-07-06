import { Meta } from '@storybook/react';
import { FixedConteiner } from '.';

export default {
  title: 'FixedConteiner',
  component: FixedConteiner,
} as Meta;

export const StoryFixedConteiner = () => {
  return <FixedConteiner>Cjildren</FixedConteiner>;
};
