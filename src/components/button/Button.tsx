import { type ComponentProps } from 'react';
import styles from './button.module.css';
import clsx from 'clsx';

type ButtonProps = ComponentProps<'button'> & {
	variant?: 'primary' | 'secondary' | 'destructive';
	className?: string;
	size?: 'small' | 'medium' | 'large';
};

const Button = ({ variant = 'primary', size = 'medium', className, ...props }: ButtonProps) => {
	return (
		<button
			className={clsx(styles.button, styles[variant], styles[size], className)}
			{...props}
		/>
	);
};

export default Button;
// 