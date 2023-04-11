// Button.stories.ts|tsx

import type { Meta } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Example/But/Button",
  component: Button,
};

export default meta;
