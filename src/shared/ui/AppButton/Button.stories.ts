import type { Meta } from '@storybook/react';
import { AppButton, ButtonProperties, ThemeButton } from './index';

const meta: Meta = {
  title: 'shared/AppButton',
  component: AppButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    buttonClassName: { table: { disable: true } }, // пример как выключать лишний пропс
    backgroundColor: { control: 'color' }, // а это кастомизация контроллера
  },
};

export default meta;

interface Story {
  args: ButtonProperties;
}

export const Clear: Story = {
  args: {
    theme: ThemeButton.CLEAR,
    label: 'Button',
  },
};

export const Outline: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
    label: 'Button',
  },
};
