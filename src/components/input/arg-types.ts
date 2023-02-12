export const argTypes = {
  id: {
    name: 'id',
    type: { name: 'string' },
    description: 'HTML attribute for input in this component',
    table: {
      type: { summary: 'string' },
    },
    controls: 'string',
  },

  error: {
    name: 'Error',
    type: { name: 'string' },
    description:
      'This component property accepts a description of the input processing' +
      ' error and outputs below the input itself',
    table: {
      type: { summary: 'string' },
    },
    control: { type: 'text' },
  },

  inputGap: {
    name: 'InputGap',
    type: { name: 'string' },
    description:
      'CSS property, sets the distance between the label and the wrapper ' +
      'containing input and error.\n\n Examples :' +
      ' "20px"(em,rem) or "10px 5px"(em,rem)',
    table: {
      type: { summary: 'string' },
    },
    control: { type: 'text' },
  },

  type: {
    name: 'Type',
    type: { name: 'string' },
    description:
      'HTML attribute. This component handles three types of this ' +
      'attribute ("text", "password", "tel").\n\n"text" - you can enter' +
      ' all characters, letters and numbers, the content of the input is ' +
      'visible and not validated. \n\n"password" - hides the entered data, ' +
      'replacing them with `****`. It also adds an icon to the right that' +
      ' disables/enables this feature \n\n"tel" - the input data is visible' +
      ', but validation is present, only numbers can be entered, the content' +
      ' will be in the format "+38 (NNN) NNN-NN-NN"' +
      '\n\n***N - the number you entered',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'text' },
    },
    control: 'radio',
    options: ['text', 'password', 'tel'],
  },

  name: {
    name: 'Name',
    type: { name: 'string', required: true },
    description:
      'HTML input attribute that is assigned to an input in a component',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'inputName' },
    },
    controls: 'string',
  },

  label: {
    name: 'Label',
    type: { name: 'string' },
    description:
      'The content of the label with the description of the input element.',
    table: {
      type: { summary: 'string' },
    },
    controls: 'string',
  },

  inputFlexDirection: {
    name: 'InputFlexDirection',
    type: { name: 'string' },
    description:
      'CSS property.\n' +
      'Specifies the position of the input label.\n' +
      '\n\n"column" - top label, \n\n"row-reverse" - right label,' +
      '\n\n"column-reverse" - bottom label,\n\n "row" - left label. ' +
      '\n\nIf props is not specified location matches column',
    table: {
      type: { summary: 'string' },
    },
    control: 'radio',
    options: ['column', 'row', 'column-reverse', 'row-revers'],
  },

  placeholder: {
    name: 'Placeholder',
    type: { name: 'string' },
    description: 'Value for  attribute placeholder of HTML input',
    table: {
      type: { summary: 'string' },
    },
    control: 'text',
  },

  labelColor: {
    name: 'LabelColor',
    type: { name: 'string' },
    description: `CSS property.\n\n Sets color text of label.`,
    table: {
      type: { summary: 'string' },
    },
    control: 'color',
  },

  labelFontSize: {
    name: 'LabelFontSize',
    type: { name: 'string' },
    description: `CSS property.\n\n Sets size text of label.\n\nWritten in a
      string type to define units of measure. Example : "10px (rem,em)"`,
    table: {
      type: { summary: 'string' },
    },
  },
  labelFontWeight: {
    name: 'LabelFontWeight',
    type: { name: 'number' },
    description: `CSS property.\n\n Sets font weight of label.\n\nWritten as
      number type. Example : 400`,
    table: {
      type: { summary: 'number' },
    },
    controls: 'number',
  },

  inputMaxWidth: {
    name: 'InputMaxWidth',
    type: { name: 'string' },
    description: `CSS property. max-width\n\n Sets the maximum wrap width of
    this component.\n\n\ Written in a string type to define units of measure. 
    If the property is not set, the behavior is as if width is 100%, since
    this is a block-level element.\n\n Example : "600px(rem,em)" or "50%".`,
    table: {
      type: { summary: 'string' },
    },
    controls: 'string',
  },

  inputJustifyContent: {
    name: 'InputJustifyContent',
    type: { name: 'string' },
    description: `CSS property. justify-content\n\n Aligns the Label and Input 
    elements with Error along the main axis. \n\n\ !!! With inputFlexDirection 
    property without value or with values 'column', 'column-reverse' will
    not work.\B `,
    table: {
      type: { summary: 'string' },
    },
    control: 'radio',
    options: ['center', 'space-between', 'space-around', 'space-evenly'],
  },

  wrapperInputErrorWidth: {
    name: 'WrapperInputErrorWidth',
    type: { name: 'string' },
    description: `CSS property. Width\n\n Sets wrap width of
    Input with Error message.\n\n\ Written in a string type to define units 
    of measure.\n\n Example : "600px(rem,em)" or "50%"`,
    table: {
      type: { summary: 'string' },
    },
    controls: 'string',
  },
};
