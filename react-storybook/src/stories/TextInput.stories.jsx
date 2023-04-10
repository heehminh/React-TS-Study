import TextInput from "./TextInput";
import { within, userEvent } from "@storybook/testing-library";

export default {
  title: "Example/Go/Deep/TextInput", // sidebar 에 나오는 타이틀
  component: TextInput,
};

export const Default = () => <TextInput />;
export const Large = { args: { size: "large", value: "Large text input" } };
export const Placeholder = () => (
  <TextInput placeholder="email@host.com" type="email" />
);
export const Email = {
  args: Placeholder.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const emailInput = await canvas.getByPlaceholderText("email@host.com");
    await userEvent.click(emailInput);
    await userEvent.keyboard("santa@northpole.xmas");
  },
};
