import { Meta } from '@storybook/react';
import { ExpandableCard, ExpandableCardProps } from '.';
import videos from '../../utils/video_gallery.json';

export default {
  title: 'ExpandableCard',
  component: ExpandableCard,
  args: {
    ...videos[0],
    setShow: () => true,
    show: true,
    rendered: true,
  } as ExpandableCardProps,
} as Meta;

export const StoryExpandableCard = (agrs: ExpandableCardProps) => {
  return <ExpandableCard {...agrs} />;
};
