import { ComponentStory, ComponentMeta } from "@storybook/react";

import ImageDetails from "./ImageDetails";

export default {
  title: "Molecules/ImageDetails",
  component: ImageDetails,
} as ComponentMeta<typeof ImageDetails>;

const Template: ComponentStory<typeof ImageDetails> = (args) => (
  <ImageDetails {...args} />
);

export const Primary: ComponentStory<typeof ImageDetails> = Template.bind({});
Primary.args = {};
