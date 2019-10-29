import React from "react";
import TextInput from "./TextInput";

export default {
  title: "Input/TextInput"
};

export const disabled = () => <TextInput disabled />;
export const placeholder = () => <TextInput placeholder="Sample Placeholder" />;
