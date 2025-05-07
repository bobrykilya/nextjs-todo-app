import clsx from 'clsx'
import SwitchThemeButton from '@/features/SwitchThemeButton/ui/SwitchThemeButton'
import TodoForm from '@/features/TodoForm/ui/TodoForm'



export default function Home() {


	return (
		<div
			className={clsx('g_cont')}
		>
			<TodoForm />
			<SwitchThemeButton />
		</div>
	)
}
