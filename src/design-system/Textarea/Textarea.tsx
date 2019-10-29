import React from "react";

export interface TextareaProps {
  disabled?: boolean;
  placeholder?: string;
  rows?: number;
  cols?: number;
}

const Textarea: React.SFC<TextareaProps> = ({ children, ...props }) => {
  return <textarea {...props}>{children}</textarea>;
};

export default Textarea;
