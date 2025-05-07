'use client'
import React, { useRef, useState } from 'react'
import clsx from 'clsx'
import Console from '@/shared/ui/Console/Console'
import styles from './TodoInputForm.module.sass'
import RoundButton from '@/shared/ui/RoundButton/RoundButton'
import Icon from '@/shared/ui/Icon/Icon'
import { useTodoStore } from '@/features/Todos/model/useTodoStore'



interface TodoFormProps {
	className?: string
}

const TodoInputForm = ({ className }: TodoFormProps) => {

	const [inputText, setInputText] = useState('')
	const addTodo = useTodoStore(s => s.addTodo)
	const inputRef = useRef<HTMLTextAreaElement>(null)


	const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setInputText(e.target.value)
	}

	const handleSubmitForm = (e?: React.FormEvent<HTMLFormElement>) => {
		e && e.preventDefault()
		if (inputText.trim()) {
			console.log(inputText.trim())
			addTodo(inputText.trim())
			setInputText('')
			inputRef.current?.focus()
		}
	}

	const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault()
			handleSubmitForm()
		}
	}

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