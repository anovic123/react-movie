import { FC, DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from 'react';
import classnames from 'classnames';

import './button.scss';

type ButtonVariant = 'border' | 'primary';
type ButtonSize = 'small' | 'medium';

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  /**
   * size
   */
  size: ButtonSize;
  /**
   *  start icon
   */
  startIcon?: ReactNode;
  /**
   * end icon
   */
  endIcon?: ReactNode;
  /**
   *  variant icon
   */
  variant?: ButtonVariant;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'border',
  startIcon,
  endIcon,
  size,
  onClick,
  ...props
}) => {
  const className = classnames(
    'btn',
    {
      btnContained: variant === 'border',
    },
    {
      btnPrimary: variant === 'primary',
    },
  );

  return (
    <button className={className} onClick={onClick} type="button" {...props}>
      {!!startIcon && <>{startIcon}</>}
      {children}
      {!!endIcon && <>{endIcon}</>}
    </button>
  );
};
