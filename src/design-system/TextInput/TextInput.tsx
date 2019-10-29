import React from "react";

export interface TextInputProps {
  disabled?: boolean;
  placeholder?: string;
}

const TextInput: React.SFC<TextInputProps> = props => {
  return <input type="text" {...props} />;
};

export default TextInput;
