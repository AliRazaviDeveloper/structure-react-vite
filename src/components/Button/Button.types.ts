import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'sm' | 'md' | 'lg';
  theme?: 'simple' | 'error';
  icon?: React.ReactNode;
  block?: boolean;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
}
