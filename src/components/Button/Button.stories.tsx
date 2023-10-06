import type {Meta, StoryObj} from '@storybook/react';
import Button from '.';

const meta = {
  title: 'Atom/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {control: 'primary'},
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};
export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Button',
  },
};
export const Loading: Story = {
  args: {
    loading: true,
    children: 'Button',
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Button',
  },
};
