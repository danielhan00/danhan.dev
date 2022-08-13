import React from "react";

export interface ButtonProps {
  children?: React.ReactNode;
  name?: string;
  onClick?: () => void;
  href?: string;
  imageSRC?: string;
  newTab?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  name,
  onClick,
  href,
  imageSRC,
  newTab,
  ...rest
}) => {
  return (
    <button name={name} {...rest}>
      <a href={href} target={newTab} rel="noopener noreferrer">
        <img src={imageSRC} onClick={onClick} />
        {children}
      </a>
    </button>
  );
};

export default Button;
