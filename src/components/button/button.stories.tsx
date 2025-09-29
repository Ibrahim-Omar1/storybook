import type { Meta, StoryObj } from '@storybook/react';
import Button from './button';

const meta = {
	title: 'Button',
	component: Button,
	args: {
		children: 'button',
		variant: 'primary',
		size: 'medium',
		disabled: false,
	},
	argTypes: {
		disabled: {
			control: 'boolean',
		},
		variant: {
			control: 'select',
		},
		size: {
			control: 'select',
		},
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;
export const Primary: Story = {
	args: {
		variant: 'primary',
	},
};

export const Secondary: Story = {
	args: {
		variant: 'secondary',
	},
};

export const Destructive: Story = {
	args: {
		variant: 'destructive',
	},
};

export const Small: Story = {
	args: {
		size: 'small',
		variant: 'primary',
	},
};

export const Medium: Story = {
	args: {
		size: 'medium',
		variant: 'primary',
	},
};

export const Large: Story = {
	args: {
		size: 'large',
		variant: 'primary',
	},
};
