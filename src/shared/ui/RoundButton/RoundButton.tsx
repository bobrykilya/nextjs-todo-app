import React, { ButtonHTMLAttributes } from 'react'
import styles from './RoundButton.module.sass'



interface RoundButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

const RoundButton = ({ children, className, ...rest }: RoundButtonProps) => {


	return (
		<button
			type={'button'}
			className={styles.round_button}
			{...rest}
		>
			{children}
		</button>
	)
}

export default RoundButton