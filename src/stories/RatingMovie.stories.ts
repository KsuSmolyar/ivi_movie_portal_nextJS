import type { Meta, StoryObj } from '@storybook/react';

import { RatingMovie } from '../shared/bisnes/RatingMovie';

const meta = {
  title: 'Example/ReitingMovie',
  component: RatingMovie,
  tags: ['autodocs'],
  args: { grade: 5.5 },

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof RatingMovie>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Rating: Story = {};
