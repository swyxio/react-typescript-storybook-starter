import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';

export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => <Welcome showApp={linkTo('Button')} />;

ToStorybook.story = {
  name: 'to Storybook',
};


// storiesOf("Welcome", module).addWithJSX(
//   "to your new Storybook🎊",
//   wInfo(`


//     ### Notes

//     Hello world!:

//     ### Usage
//     ~~~js
//     <div>This is an example component</div>
//     ~~~

//     ### To use this Storybook

//     Explore the panels on the left.
//   `)(() => <div>This is an example component</div>)
// );
