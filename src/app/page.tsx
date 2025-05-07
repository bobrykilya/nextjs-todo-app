import clsx from 'clsx'
import SwitchThemeButton from '@/features/SwitchThemeButton/ui/SwitchThemeButton'
import styles from './Page.module.sass'
import TodoWidget from '@/widgets/TodoWidget/ui/TodoWidget'



export default function Home() {


	return (
		<div
			className={clsx('g_cont')}
		>
			<SwitchThemeButton
				className={styles.switch_theme_but}
			/>
			<TodoWidget />
			<span
				className={styles.name_tag}
			>
			    bobrykilya
			</span>
		</div>
	)
}