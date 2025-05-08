'use client'
import React from 'react'
import clsx from 'clsx'
import Console from '@/shared/ui/Console/Console'
import styles from './TodoInputForm.module.sass'
import RoundButton from '@/shared/ui/RoundButton/RoundButton'
import Icon from '@/shared/ui/Icon/Icon'
import { useHandleTodoInputForm } from '@/features/Todos/lib/useHandleTodoInputForm'



interface TodoFormProps {
	className?: string
}

const TodoInputForm = ({ className }: TodoFormProps) => {

	const { inputRef, inputText, handleInputChange, handleSubmitForm, handleKeyDown } = useHandleTodoInputForm()


	return (
		<form
			onSubmit={handleSubmitForm}
			className={clsx('g_cont', styles.todo_input_form, className)}
		>
			<Console
				className={styles.console}
				onInput={handleInputChange}
				value={inputText}
				placeholder={'What do you need to do?'}
				onKeyDown={handleKeyDown}
				ref={inputRef}
				maxLength={200}
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

export default TodoInputForm