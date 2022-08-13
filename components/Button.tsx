import React from "react";

export interface ButtonProps {
  children?: React.ReactNode;
  name?: string;
  onClick: () => void;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  name,
  onClick,
  href,
  ...rest
}) => {
  return (
    <button name={name} onClick={onClick} {...rest}>
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    </button>
  );
};

export default Button;
