import React from "react";

export interface TextInnputProps {
  disabled?: boolean;
  placeholder?: string;
}

const TextInnput: React.SFC<TextInnputProps> = props => {
  return <input type="text" {...props} />;
};

export default TextInnput;
