import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import '@/shared/styles/globals.sass'
import React from 'react'
import Providers from '@/app/Providers'



const font = Nunito({
	subsets: ['latin'],
	weight: ['400', '500'],
})

export const metadata: Metadata = {
	title: 'Todo-app',
	description: 'Application with Next.js and FSD',
}

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {


	return (
		<html lang='en' suppressHydrationWarning={true}>
		<body className={font.className}>
		<Providers>
			{children}
		</Providers>
		</body>
		</html>
	)
}
