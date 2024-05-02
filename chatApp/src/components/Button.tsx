import React, { ReactNode } from "react";
import classes from './Button.module.css';

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean; // Define disabled prop as optional
}

const Button: React.FC<ButtonProps> = ({ children, disabled = false }) => {
  return (
    <button className={classes.myButton} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
