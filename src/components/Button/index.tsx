import React from 'react';

import style from './Button.module.scss';

interface ButtonProps {
  children: any;
  variant?: 'default' | 'large' | 'circle';
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
  if (className) classes.push(className);
  return <button className={classes.join(' ')}>{children}</button>;
};

export default Button;
