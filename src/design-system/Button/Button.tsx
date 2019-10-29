import React from "react";

export interface ButtonProps {
  primary?: boolean;
  onClick?: (e) => void;
  disabled?: boolean;
}

const Button: React.SFC<ButtonProps> = ({ children, ...otherProps }) => {
  return <button {...otherProps}>{children}</button>;
};

export default Button;
