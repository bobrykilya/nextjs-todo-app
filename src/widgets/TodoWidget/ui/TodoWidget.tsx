'use client'
import React from 'react'
import clsx from 'clsx'
import styles from './TodoWidget.module.sass'
import { useTodoStore } from '@/features/Todos/model/useTodoStore'
import TodoItem from '@/features/Todos/ui/TodoItem'
import TodoInputForm from '@/features/Todos/ui/TodoInputForm'



type TodoWidgetProps = {}
const TodoWidget = ({}: TodoWidgetProps) => {

	const todoList = useTodoStore(s => s.todoList)
	const completeTodo = useTodoStore(s => s.completeTodo)
	const removeTodo = useTodoStore(s => s.removeTodo)
	// console.log(todoList)


	return (
		<div
			className={clsx('g_cont', styles.todo_widget)}
		>
			<ul
				className={clsx('g_hide_scroll', styles.todo_list)}
				tabIndex={-1}
			>
				{
					todoList.map(todo => (
						<TodoItem
							key={todo.id}
							completeTodo={completeTodo}
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