'use client'
import React, { useEffect, useState } from 'react'
import { useSwitchTheme } from '@/features/SwitchThemeButton/lib/useSwitchTheme'
import clsx from 'clsx'
import styles from './SwitchThemeButton.module.sass'
import Icon from '@/shared/ui/icons/Icon'
import BeforeHoverButton from '@/entities/BeforeHoverButton/ui/BeforeHoverButton'



const SwitchThemeButton = () => {

	const { switchTheme, theme } = useSwitchTheme()

	const [mounted, setMounted] = useState(false)
	useEffect(() => setMounted(true), [])


	return (
		<BeforeHoverButton
			onClick={switchTheme}
			className={clsx(styles.switch_but)}
			size={'l'}
		>
			<div
				className={clsx(styles.switch_cont, 'g_cont', mounted && theme && styles[theme])}
			>
				<Icon
					name={'sun'}
					styles={styles}
					size={35}
					className={styles.sun}
				/>
				<Icon
					name={'moon'}
					styles={styles}
					size={25}
					className={styles.moon}
				/>
			</div>
		</BeforeHoverButton>
	)
}

export default SwitchThemeButton