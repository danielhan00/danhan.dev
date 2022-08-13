import React from "react";

export interface ButtonProps {
  children?: React.ReactNode;
  name?: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  name,
  onClick,
  ...rest
}) => {
  return (
    <button name={name} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
