import { Meta } from '@storybook/react';
import { FooterTopics, FooterTopicsProps } from '.';
import { mockFooterTopics } from './mock';

export default {
  title: 'FooterTopics',
  component: FooterTopics,
  args: {
    links: mockFooterTopics,
    title: 'test',
  } as FooterTopicsProps,
} as Meta;

export const StoryFooterTopics = (args: FooterTopicsProps) => {
  return <FooterTopics {...args} />;
};
