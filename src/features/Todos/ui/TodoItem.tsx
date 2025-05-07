'use client'
import React from 'react'
import clsx from 'clsx'
import styles from './TodoItem.module.sass'
import { ITodo, IUseTodoStore } from '@/features/Todos/model/types'



interface TodoItemProps extends ITodo {
	completeTodo: IUseTodoStore['completeTodo']
	removeTodo: IUseTodoStore['removeTodo']
}

const TodoItem = ({ id, text, completed, completeTodo, removeTodo }: TodoItemProps) => {


	return (
		<li
			className={clsx('g_cont', styles.todo_item, completed && styles['completed'])}
		>
			{text}
		</li>
	)
}

export default TodoItem