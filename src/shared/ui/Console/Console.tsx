import React, { forwardRef, TextareaHTMLAttributes } from 'react'
import clsx from 'clsx'
import styles from './Console.module.sass'



export type ConsoleProps = TextareaHTMLAttributes<HTMLTextAreaElement>
const Console = forwardRef<HTMLTextAreaElement, ConsoleProps>(({ className, ...rest }, ref) => {


	return (
		<textarea
			{...rest}
			className={clsx('g_hide_scroll', styles.console, className)}
			autoFocus={true}
			autoCorrect={'on'}
			autoCapitalize={'on'}
			ref={ref}
		/>
	)
})

export default Console 