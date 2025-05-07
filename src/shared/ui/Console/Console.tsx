import React, { TextareaHTMLAttributes } from 'react'
import clsx from 'clsx'
import styles from './Console.module.sass'



export type ConsoleProps = TextareaHTMLAttributes<HTMLTextAreaElement>
const Console = ({ className, ...rest }: ConsoleProps) => {


	return (
		<textarea
			{...rest}
			className={clsx(styles.console, className)}
			autoFocus={true}
			autoCorrect={'on'}
			autoCapitalize={'on'}
		/>
	)
}

export default Console 