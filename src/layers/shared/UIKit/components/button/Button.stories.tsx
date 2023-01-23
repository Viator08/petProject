import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './index';

export default {
  title: 'UIKit/Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  type: 'primary',
  shape: 'standard',
  size: 'medium',
  isLoading: false,
  state: 'normal',
  isDisabled: false,
};

export const Loading = Template.bind({});
Loading.args = {
  label: 'Button',
  type: 'primary',
  shape: 'standard',
  size: 'medium',
  isLoading: true,
  state: 'normal',
  isDisabled: false,
};

export const Large = Template.bind({});
Large.args = {
  type: 'primary',
  shape: 'standard',
  size: 'medium',
  isLoading: false,
  state: 'normal',
  isDisabled: false,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
