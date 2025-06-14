'use client'
import { ThemeProvider } from 'next-themes'
import React from 'react'



interface ProvidersProps {
	children: React.ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
	return (
		<ThemeProvider
			defaultTheme={'dark'}
			enableSystem={true}
		>
			{children}
		</ThemeProvider>
	)
}

export default Providers