'use client'
import React from 'react'
import RoundButton from '@/shared/ui/RoundButton/RoundButton'
import { useSwitchTheme } from '@/features/SwitchThemeButton/lib/useSwitchTheme'



type SwitchThemeButtonProps = {}
const SwitchThemeButton = ({}: SwitchThemeButtonProps) => {

	const { switchTheme, theme } = useSwitchTheme()

	return (
		<RoundButton
			onClick={switchTheme}
		>
			Тема
		</RoundButton>
	)
}

export default SwitchThemeButton