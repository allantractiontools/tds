import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "./Button";

export default {
  title: "UI/Button",
  component: Button
};

export const primary = () => <Button primary={true}>Primary</Button>;

export const danger = () => <Button>Danger</Button>;

export const disabled = () => <Button disabled>Disabled</Button>;

export const icon = () => <Button>Icon</Button>;
export const onClick = () => <Button onClick={action("onClick")}>Click</Button>;

onClick.story = {
  name: "onClick"
};
