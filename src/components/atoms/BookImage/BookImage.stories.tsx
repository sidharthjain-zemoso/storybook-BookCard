import { ComponentStory, ComponentMeta } from "@storybook/react";

import BookImage from "./BookImage";

export default {
  title: "Atoms/BookImage",
  component: BookImage,
} as ComponentMeta<typeof BookImage>;

const Template: ComponentStory<typeof BookImage> = (args) => (
  <BookImage {...args} />
);

export const Primary: ComponentStory<typeof BookImage> = Template.bind({});
Primary.args = {};
