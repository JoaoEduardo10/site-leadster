import { Meta } from '@storybook/react';
import { VideoGallery } from '.';

export default {
  title: 'VideoGallery',
  component: VideoGallery,
} as Meta;

export const StoryVideoCards = () => {
  return <VideoGallery />;
};
