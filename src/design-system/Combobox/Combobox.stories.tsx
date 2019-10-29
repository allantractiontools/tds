import React from "react";
import Combobox from "./Combobox";
import { action } from "@storybook/addon-actions";

export default {
  title: "Input/Combobox"
};

export const Data = () => (
  <Combobox
    data={[{ text: "Item 1", value: "1" }, { text: "Item 2", value: "2" }]}
  />
);

export const onChange = () => (
  <Combobox
    data={[{ text: "Item 1", value: "1" }, { text: "Item 2", value: "2" }]}
    onChange={action("onChange")}
  />
);

onChange.story = {
  name: "onChange"
};
