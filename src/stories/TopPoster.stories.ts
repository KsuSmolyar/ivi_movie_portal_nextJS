import type { Meta, StoryObj } from '@storybook/react';
import { TopPoster } from 'shared/ui/TopPoster';

const meta = {
  title: 'Example/TopPoster',
  component: TopPoster,
  tags: ['autodocs'],
  args: {
    movieId: 5,
    src: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/5ec7dbd7-1cab-4eae-8846-8be00c56dc0a/300x450',
    movieNumber: 5,
    className: 'storybookTopPoster',
  },

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TopPoster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TopPosterEl: Story = {};
