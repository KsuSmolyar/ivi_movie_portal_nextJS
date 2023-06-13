import type { Meta, StoryObj } from '@storybook/react';
import { TrailerPicture } from 'shared/ui/TrailerPicture';

const meta = {
  title: 'Example/TrailerPicture',
  component: TrailerPicture,
  tags: ['autodocs'],
  args: {
    trailerID: 'ZsJz2TJAPjw',
    className: 'storybookTrailerPicture',
  },

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TrailerPicture>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TrailerPictureEl: Story = {};
