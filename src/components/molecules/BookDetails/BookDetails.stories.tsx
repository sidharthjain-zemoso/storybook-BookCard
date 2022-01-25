import { ComponentStory, ComponentMeta } from "@storybook/react";

import BookDetails from "./BookDetails";

export default {
  title: "Molecules/BookDetails",
  component: BookDetails,
} as ComponentMeta<typeof BookDetails>;

const Template: ComponentStory<typeof BookDetails> = (args) => (
  <BookDetails {...args} />
);

export const Primary: ComponentStory<typeof BookDetails> = Template.bind({});
Primary.args = {
  bookHeading: "Beyond Entrepreneurship",
  authorName: "Jim Collins & Bill Lazier",
  minuteRead: 13,
};
