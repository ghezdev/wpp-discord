import React from "react";
import "./styles.css";

type ButtonProps = {
  children: string;
};

const Button = ({ children }: ButtonProps): JSX.Element => {
  return <button>{children}</button>;
};

export default Button;
