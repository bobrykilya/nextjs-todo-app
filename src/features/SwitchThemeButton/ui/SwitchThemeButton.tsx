'use client'
import React, { useEffect, useState } from 'react'
import RoundButton from '@/shared/ui/RoundButton/RoundButton'
import { useSwitchTheme } from '@/features/SwitchThemeButton/lib/useSwitchTheme'
import clsx from 'clsx'
import styles from './SwitchThemeButton.module.sass'
import Icon from '@/shared/ui/icons/Icon'



type SwitchThemeButtonProps = {}
const SwitchThemeButton = ({}: SwitchThemeButtonProps) => {

	const { switchTheme, theme } = useSwitchTheme()

	const [mounted, setMounted] = useState(false)
	useEffect(() => setMounted(true), [])


	return (
		<RoundButton
			onClick={switchTheme}
			className={clsx(styles.switch_but)}
		>
			<div
				className={clsx(styles.switch_cont, 'g_cont', mounted && theme && styles[theme])}
			>
				<Icon
					name={'sun'}
					styles={styles}
					size={30}
				/>
				<Icon
					name={'moon'}
					styles={styles}
				/>
			</div>
		</RoundButton>
	)
}

export default SwitchThemeButton