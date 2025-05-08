'use client'
import React, { useEffect } from 'react'
import clsx from 'clsx'
import styles from './TodoWidget.module.sass'
import { useTodoStore } from '@/features/Todos/model/useTodoStore'
import TodoItem from '@/features/Todos/ui/TodoItem'
import TodoInputForm from '@/features/Todos/ui/TodoInputForm'



type TodoWidgetProps = {}
const TodoWidget = ({}: TodoWidgetProps) => {

	const todoList = useTodoStore(s => s.todoList)
	const toggleTodo = useTodoStore(s => s.toggleTodo)
	const removeTodo = useTodoStore(s => s.removeTodo)
	const initializeTodoList = useTodoStore(s => s.initializeTodoList)

	useEffect(() => {
		initializeTodoList()
	}, [])


	return (
		<div
			className={clsx('g_cont', styles.todo_widget)}
		>
			<ul
				className={clsx('g_cont', 'g_hide_scroll', styles.todo_list)}
				tabIndex={-1}
			>
				{
					todoList.map(todo => (
						<TodoItem
							key={todo.id}
							toggleTodo={toggleTodo}
							removeTodo={removeTodo}
							{...todo}
						/>),
					)
				}
			</ul>
			<TodoInputForm
				className={styles.todo_input_form}
			/>
		</div>
	)
}

export default TodoWidget