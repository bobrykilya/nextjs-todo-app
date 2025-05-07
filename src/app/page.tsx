import SwitchThemeButton from '@/features/SwitchThemeButton/ui/SwitchThemeButton'
import clsx from 'clsx'



export default function Home() {


	return (
		<div
			className={clsx('g_cont')}
		>
			<SwitchThemeButton />
		</div>
	)
}
