import { Meta } from '@storybook/react';
import { VideoCards, VideocardsProps } from '.';
import img from '../../images/thumbnail.png';

export default {
  title: 'VideoCards',
  component: VideoCards,
  args: {
    img: img,
    title: 'test',
  } as VideocardsProps,
} as Meta;

export const StoryVideoCards = (args: VideocardsProps) => {
  return (
    <div style={{ width: '79%', display: 'flex' }}>
      <VideoCards {...args} />
      <VideoCards {...args} />
      <VideoCards {...args} />
      <VideoCards {...args} />
      <VideoCards {...args} />
      <VideoCards {...args} />
      <VideoCards {...args} />
      <VideoCards {...args} />
      <VideoCards {...args} />
    </div>
  );
};
