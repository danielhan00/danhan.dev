import React from "react";

export interface ButtonProps {
  children?: React.ReactNode;
  name?: string;
  onClick?: () => void;
  href?: string;
  imageSRC?: string;
  newTab?: string;
  type: string;
  height?: string;
  width?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  name,
  onClick,
  href,
  imageSRC,
  newTab,
  type,
  height,
  width,
  ...rest
}) => {
  if (type == "image") {
    return (
      <a href={href} target={newTab}>
        <button name={name} type="button">
          <img src={imageSRC} height={height} width={width} />
        </button>
      </a>
    );
  } else {
    return (
      <button name={name} className="rounded">
        <a href={href} target={newTab} rel="noopener noreferrer">
          {children}
        </a>
      </button>
    );
  }
};

export default Button;
