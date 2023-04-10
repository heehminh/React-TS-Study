import type { Meta, StoryObj } from "@storybook/react";
import YourComponent from "./YourComponent";

const meta: Meta<typeof YourComponent> = {
  title: "YourComponent",
  component: YourComponent,
};

export default meta;
type Story = StoryObj<typeof YourComponent>;

export const FirstStory: Story = {
  args: {},
};
