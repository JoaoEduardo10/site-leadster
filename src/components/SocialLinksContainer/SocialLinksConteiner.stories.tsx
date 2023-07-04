import { Meta } from '@storybook/react';
import { SocialLinksContainer, SocialLinksContainerProps } from '.';
import { mockSocialLinksContainer } from './mock';

export default {
  title: 'SocialLinksContainer',
  component: SocialLinksContainer,
  args: {
    ...mockSocialLinksContainer,
  } as SocialLinksContainerProps,
} as Meta;

export const StorySocialLinksContainer = (args: SocialLinksContainerProps) => {
  return <SocialLinksContainer {...args} />;
};
