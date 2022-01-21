import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Text, { TextProps } from '../Text'

export default {
  title: 'Text',
  component: Text,
} as Meta

const Template: Story<TextProps> = (args) => <Text {...args} />

const HeadingTemplate: Story<TextProps> = (args) => <>
  <Text as="h1">H1</Text>
  <Text as="h2">H2</Text>
  <Text as="h3">H3</Text>
  <Text as="h4">H4</Text>
  <Text as="h5">H5</Text>
  <Text as="h6">H6</Text>
  <Text>Normal Text</Text>
</>

export const Basic = Template.bind({})
Basic.args = {
  children: 'Basic text',
}

export const Heading = HeadingTemplate.bind({})
Heading.args = {
  children: 'Heading',
}
