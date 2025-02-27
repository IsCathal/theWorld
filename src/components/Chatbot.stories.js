// src/components/Chatbot.stories.js
import React from 'react';
import Chatbot from './Chatbot';

export default {
  title: 'Components/Chatbot',
  component: Chatbot,
};

const Template = (args) => <Chatbot {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Provide default props if Chatbot expects any. 
  // For example, if Chatbot accepted a `title` prop, you might write:
  // title: 'Default Chatbot',
};
