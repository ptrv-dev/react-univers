import React from 'react';

import style from './Button.module.scss';

interface ButtonProps {
  children: any;
  variant?: 'default' | 'large' | 'circle' | 'outlined' | 'outlined-dark';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  className,
}) => {
  const classes = [style['button']];
  if (variant === 'large') classes.push(style['button_lg']);
  else if (variant === 'circle') classes.push(style['button_circle']);
  else if (variant === 'outlined') classes.push(style['button_outlined']);
  else if(variant === 'outlined-dark') classes.push(style['button_outlined-dark'])
  if (className) classes.push(className);
  return <button className={classes.join(' ')}>{children}</button>;
};

export default Button;
