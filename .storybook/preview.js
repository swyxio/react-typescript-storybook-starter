import { addDecorator } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs } from "@storybook/addon-knobs";
 

addDecorator(withKnobs);

addDecorator(jsxDecorator);
