import type { Meta, StoryObj } from '@storybook/react';
import { CustomSelect } from 'features/CustomSelect';

const meta = {
  title: 'Example/CustomSelect',
  component: CustomSelect,
  tags: ['autodocs'],

  args: {
    placeholder: 'плейсхолдер',
    list: [
      'первый элемент',
      'второй элемент',
      'третий элемент',
      'четвёртый элемент',
      'пятый элемент',
      'шестой элемент',
    ],
    func: () => {},
  },

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CustomSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomSelectEl: Story = {};
