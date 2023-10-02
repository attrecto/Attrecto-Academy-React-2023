import classNames from "classnames";
import React from "react";

interface ButtonProps {
  color?: "primary" | "secondary" | "danger";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button = ({ color, children, className, onClick }: ButtonProps) => {
  return (
    <button
      className={classNames(
        "btn",
        {
          "btn-primary": color === "primary",
          "btn-secondary": color === "secondary",
          "btn-danger": color === "danger",
        },
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
