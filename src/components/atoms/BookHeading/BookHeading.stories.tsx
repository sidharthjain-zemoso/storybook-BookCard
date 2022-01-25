import { ComponentStory, ComponentMeta } from "@storybook/react";

import BookHeading from "./BookHeading";

export default {
  title: "Atoms/BookHeading",
  component: BookHeading,
} as ComponentMeta<typeof BookHeading>;

const Template: ComponentStory<typeof BookHeading> = (args) => (
  <BookHeading {...args} />
);

export const Primary: ComponentStory<typeof BookHeading> = Template.bind({});
Primary.args = {
  heading: "Beyond Entrepreneurship",
};
