import { Meta } from '@storybook/react';
import { DownloadButton, DownloadButtonProps } from '.';

export default {
  title: 'DownloadButton',
  component: DownloadButton,
  args: {
    title: 'Download',
    color: 'blue',
  } as DownloadButtonProps,
} as Meta;

export const StoryBlueDownloadButton = (agrs: DownloadButtonProps) => {
  return <DownloadButton {...agrs} />;
};

export const StoryYellowDownloadButton = (agrs: DownloadButtonProps) => {
  return <DownloadButton {...agrs} color="yellow" />;
};

export const StoryGreenDownloadButton = (agrs: DownloadButtonProps) => {
  return <DownloadButton {...agrs} color="green" />;
};

export const StoryGrayDownloadButton = (agrs: DownloadButtonProps) => {
  return <DownloadButton {...agrs} color="gray" />;
};
