import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

// (storiesOf("Components/Button", module) as any).addWithJSX(
//   "basic Button",
//   wInfo(`

//   ### Notes

//   This is a button

//   ### Usage
//   ~~~js
//   <Button
//     label={'Enroll'}
//     disabled={false}
//     onClick={() => alert('hello there')}
//   />
//   ~~~`)()
// );
