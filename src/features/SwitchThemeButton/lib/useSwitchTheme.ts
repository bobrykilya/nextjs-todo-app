'use client'
import { useTheme } from 'next-themes'



export const useSwitchTheme = () => {

	const { theme, setTheme } = useTheme()
	const switchTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	return {
		switchTheme,
		theme,
	}
}