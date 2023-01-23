import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Text } from './index';

export default {
  title: 'UIKit/Components/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: 'Text',
  size: 'm',
  thickness: 'regular',
  color: 'black',
};

export const Bold = Template.bind({});
Bold.args = {
  value: 'Text',
  size: 'l',
  thickness: 'bold',
  color: 'danger',
};

export const Link = Template.bind({});
Link.args = {
  value: 'Text',
  size: 's',
  thickness: 'light',
  color: 'danger',
  link: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: 'Text',
  size: 'm',
  thickness: 'medium',
  color: 'danger',
  link: true,
  isDisabled: true,
};
