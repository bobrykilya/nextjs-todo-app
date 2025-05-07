'use client'
import React from 'react'
import clsx from 'clsx'
import Console from '@/shared/ui/Console/Console'
import styles from './TodoForm.module.sass'
import RoundButton from '@/shared/ui/RoundButton/RoundButton'
import Icon from '@/shared/ui/icons/Icon'



const TodoForm = () => {

	const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log('Submit')
	}

	return (
		<form
			onSubmit={handleSubmitForm}
			className={clsx('g_cont', styles.todo_form)}
		>
			<Console
				className={styles.console}
				placeholder={'Do you have some ideas?'}
				// onInput={}
			/>
			<RoundButton
				className={styles.submit_but}
				type={'submit'}
			>
				<Icon
					name={'submit'}
					styles={styles}
					size={25}
				/>
			</RoundButton>
		</form>
	)
}

export default TodoForm