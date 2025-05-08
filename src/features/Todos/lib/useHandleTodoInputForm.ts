import React, { useRef, useState } from 'react'
import { useTodoStore } from '@/features/Todos/model/useTodoStore'



export const useHandleTodoInputForm = () => {

	const [inputText, setInputText] = useState('')
	const inputRef = useRef<HTMLTextAreaElement>(null)
	const addTodo = useTodoStore(s => s.addTodo)

	const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setInputText(e.target.value)
	}

	const handleSubmitForm = (e?: React.FormEvent<HTMLFormElement>) => {
		e && e.preventDefault()
		if (inputText.trim()) {
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


	return {
		handleSubmitForm,
		handleInputChange,
		inputText,
		handleKeyDown,
		inputRef,
	}
}