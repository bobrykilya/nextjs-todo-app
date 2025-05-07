import React from 'react'
import RoundButton, { RoundButtonProps } from '@/shared/ui/RoundButton/RoundButton'
import clsx from 'clsx'
import styles from './BeforeHoverButton.module.sass'



const BeforeHoverButton = ({ className, ...rest }: RoundButtonProps) => {


	return (
		<RoundButton
			{...rest}
			className={clsx(styles.before_hover_button, className)}
		/>
	)
}

export default BeforeHoverButton