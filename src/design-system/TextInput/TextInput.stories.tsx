import React from "react";
import TextInput from "./TextInput";

export default {
  title: "Input/TextInput"
};

export const Basic = () => <TextInput />;
export const Disabled = () => <TextInput disabled />;
export const Placeholder = () => <TextInput placeholder="Sample Placeholder" />;
