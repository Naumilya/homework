import { ComponentPropsWithRef, FC } from 'react'

import styles from './Button.module.css'

interface ButtonProps extends ComponentPropsWithRef<'button'> {
	color: 'orange' | 'blue' | 'red'
}

export const Button: FC<ButtonProps> = ({
	children,
	color,
	onClick,
	...props
}) => {
	const className = `${styles.button} ${styles[`button_${color}`]}`

	return (
		<button className={className} onClick={onClick} {...props}>
			{children}
		</button>
	)
}
