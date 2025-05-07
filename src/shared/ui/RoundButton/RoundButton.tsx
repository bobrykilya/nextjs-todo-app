import React, { ButtonHTMLAttributes } from 'react'
import { ButtonSizeOptions } from '@/shared/ui/types/button-types'
import styles from './RoundButton.module.sass'
import clsx from 'clsx'



export interface RoundButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	size?: ButtonSizeOptions
}

const RoundButton = ({ children, className, size = 'm', ...rest }: RoundButtonProps) => {


	return (
		<button
			type={'button'}
			className={clsx(styles.round_but, styles[`size_${size}`], 'g_cont', className)}
			{...rest}
		>
			{children}
		</button>
	)
}

export default RoundButton