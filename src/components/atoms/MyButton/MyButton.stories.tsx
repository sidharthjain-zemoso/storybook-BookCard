import MyButton from "./MyButton";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/MyButton",
  component: MyButton,
  args: {
    children: "Test Button",
  },
  argTypes: { onClick: { action: "clicked" } },
};

// export const Primary: ComponentStory<typeof MyButton> = () => (
//   <MyButton variant="primary">Primary</MyButton>
// );
// export const Secondary: ComponentStory<typeof MyButton> = () => (
//   <MyButton variant="secondary">Secondary</MyButton>
// );
// export const Success: ComponentStory<typeof MyButton> = () => (
//   <MyButton variant="success">Success</MyButton>
// );
// export const Danger: ComponentStory<typeof MyButton> = () => (
//   <MyButton variant="danger">Danger</MyButton>
// );

const Template: ComponentStory<typeof MyButton> = (args) => (
  <MyButton {...args} />
);

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  // children: "Primary Args",
};

export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  ...PrimaryA.args,
  // children: "Long Primary Key",
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: "secondary",
  // children: "Secondary Args",
};

// Button.stories.ts|tsx

// import React from "react";

// import { ComponentStory, ComponentMeta } from "@storybook/react";

// import MyButton from "./MyButton";

// export default {
//   /* 👇 The title prop is optional.
//    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
//    * to learn how to generate automatic titles
//    */
//   title: "MyButton",
//   component: MyButton,
// } as ComponentMeta<typeof MyButton>;

// export const Primary: ComponentStory<typeof MyButton> = () => (
//   <MyButton primary>MyButton</MyButton>
// );
