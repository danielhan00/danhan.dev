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
  style?: string;
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
  style,
  ...rest
}) => {
  if (type == "image") {
    return (
      <a href={href} target={newTab}>
        <button name={name} type="button" className={style}>
          <img src={imageSRC} height={height} width={width} />
        </button>
      </a>
    );
  } else {
    console.log(style);
    return (
      <button name={name} className={style}>
        <a href={href} target={newTab} rel="noopener noreferrer">
          {children}
        </a>
      </button>
    );
  }
};

export default Button;
