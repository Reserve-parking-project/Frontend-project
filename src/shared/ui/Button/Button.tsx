import { FC, ReactNode } from 'react';
import s from './button.module.scss';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  props?: Record<string, any>;
}

const Button: FC<ButtonProps> = ({ children, className, props }) => {
  return (
    <button className={`${s.button} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
