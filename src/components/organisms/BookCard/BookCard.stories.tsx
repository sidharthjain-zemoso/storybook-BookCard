import { ComponentStory, ComponentMeta } from "@storybook/react";

import BookCard from "./BookCard";

export default {
  title: "Organisms/BookCard",
  component: BookCard,
} as ComponentMeta<typeof BookCard>;

const Template: ComponentStory<typeof BookCard> = (args) => (
  <BookCard {...args} />
);

export const Primary: ComponentStory<typeof BookCard> = Template.bind({});
Primary.args = {};
