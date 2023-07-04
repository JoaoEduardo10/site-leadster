import { Meta } from '@storybook/react';
import { Select, SelectProps } from '.';
import { mockSelect } from './mock';

export default {
  title: 'Select',
  component: Select,
  args: {
    options: mockSelect,
  } as SelectProps,
} as Meta;

export const StorySelect = (agrs: SelectProps) => {
  return <Select {...agrs} />;
};
