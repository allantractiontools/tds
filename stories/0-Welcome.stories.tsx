import React from "react";
import { linkTo } from "@storybook/addon-links";

export default {
  title: "Welcome"
};

export const toStorybook = () => <div>Welcome</div>;

toStorybook.story = {
  name: "to Storybook"
};
