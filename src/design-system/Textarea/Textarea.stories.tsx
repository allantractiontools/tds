import React from "react";
import Textarea from "./Textarea";

export default {
  title: "Input/Textarea"
};

export const Basic = () => <Textarea />;
export const Disabled = () => <Textarea disabled />;
export const Placeholder = () => <Textarea placeholder="Sample Placeholder" />;
export const Rows = () => <Textarea rows={20} />;
export const Cols = () => <Textarea cols={20} />;
export const Value = () => <Textarea>Sample value</Textarea>;
