import { ComponentStory, ComponentMeta } from "@storybook/react";

import ClockIcon from "./ClockIcon";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Atoms/ClockIcon",
  component: ClockIcon,
} as ComponentMeta<typeof ClockIcon>;

export const Primary: ComponentStory<typeof ClockIcon> = () => <ClockIcon />;
