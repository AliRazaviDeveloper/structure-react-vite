import { Loading } from '..';
import classNames from '../../helpers/className';
import { buttonStyles } from './Button.styles';
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    variant = 'primary',
    size = 'md',
    theme = 'simple',
    block = false,
    onClick,
    icon,
    className,
    loading = false,
    disabled = false,
    ...rest
  } = props;

  return (
    <button
      className={classNames(
        'flex items-center justify-center rounded-lg font-bold gap-1 transition-all',
        buttonStyles.variant[variant],
        buttonStyles.size[size],
        buttonStyles.theme[theme][variant],
        {
          [buttonStyles['block']]: block,
          [buttonStyles['loading'][variant]]: loading,
        },
        className
      )}
      onClick={onClick}
      disabled={loading || disabled}
      {...rest}
    >
      {!loading && (
        <>
          {icon && (
            <span className="flex items-center justify-center">{icon}</span>
          )}
          {children}
        </>
      )}
      {loading && <Loading className="fill-inherit" />}
    </button>
  );
};

export default Button;
