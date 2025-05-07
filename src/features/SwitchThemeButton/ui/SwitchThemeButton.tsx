'use client'
import React, { useEffect, useState } from 'react'
import { useSwitchTheme } from '@/features/SwitchThemeButton/lib/useSwitchTheme'
import clsx from 'clsx'
import styles from './SwitchThemeButton.module.sass'
import Icon from '@/shared/ui/Icon/Icon'
import BeforeHoverButton from '@/entities/BeforeHoverButton/ui/BeforeHoverButton'



interface SwitchThemeButtonProps {
	className?: string
}

const SwitchThemeButton = ({ className }: SwitchThemeButtonProps) => {

	const { switchTheme, theme } = useSwitchTheme()

	const [mounted, setMounted] = useState(false)
	useEffect(() => setMounted(true), [])


	return (
		<BeforeHoverButton
			onClick={switchTheme}
			className={clsx(styles.switch_but, className)}
			tabIndex={1}
		>
			<div
				className={clsx(styles.switch_cont, 'g_cont', mounted && theme && styles[theme])}
			>
				<Icon
					name={'sun'}
					styles={styles}
					size={30}
					className={styles.sun}
				/>
				<Icon
					name={'moon'}
					styles={styles}
					className={styles.moon}
				/>
			</div>
		</BeforeHoverButton>
	)
}

export default SwitchThemeButton