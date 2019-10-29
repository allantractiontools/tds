import React from "react";
import Textarea from "./Textarea";

export default {
  title: "Input/Textarea"
};

export const disabled = () => <Textarea disabled />;
export const placeholder = () => <Textarea placeholder="Sample Placeholder" />;
export const rows = () => <Textarea rows={20} />;
export const cols = () => <Textarea cols={20} />;
export const value = () => <Textarea>Sample value</Textarea>;
