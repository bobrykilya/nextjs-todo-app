'use client'
import React from 'react'
import clsx from 'clsx'
import styles from './TodoItem.module.sass'
import { ITodo, IUseTodoStore } from '@/features/Todos/model/types'
import BeforeHoverButton from '@/entities/BeforeHoverButton/ui/BeforeHoverButton'
import Icon from '@/shared/ui/Icon/Icon'
import { getFormatTimeAgo, getTimeInShortString } from '@/shared/lib/getTime'



interface TodoItemProps extends ITodo {
	toggleTodo: IUseTodoStore['toggleTodo']
	removeTodo: IUseTodoStore['removeTodo']
}

const TodoItem = ({ id, text, completed, toggleTodo, removeTodo }: TodoItemProps) => {


	return (
		<li
			className={clsx('g_cont', styles.todo_item, completed && styles['completed'])}
		>
			<div
				className={clsx('g_cont', styles.todo_checked, completed && styles['completed'])}
			>
				<Icon
					name={'check'}
					size={70}
				/>
			</div>
			<div
				className={clsx('g_cont', styles.todo_header)}
			>
				<span
					className={clsx(styles.todo_text)}
				>
					{text}
				</span>
				<BeforeHoverButton
					className={clsx(styles.todo_but, styles.remove_but)}
					onClick={() => removeTodo(id)}
				>
					<Icon
						name={'remove'}
						styles={styles}
						size={30}
					/>
				</BeforeHoverButton>
			</div>
			<div
				className={clsx('g_cont', styles.todo_footer)}
			>
			    <span
					className={styles.todo_created_at}
					title={getTimeInShortString(id)}
				>
			        Created: {getFormatTimeAgo(id)}
			    </span>
				<BeforeHoverButton
					className={clsx(styles.todo_but, styles.toggle_but)}
					onClick={() => toggleTodo(id)}
				>
					{
						!completed ?
							<Icon
								name={'complete'}
								styles={styles}
								size={30}
							/> :
							<Icon
								name={'undo'}
								styles={styles}
							/>
					}
				</BeforeHoverButton>
			</div>
		</li>
	)
}

export default TodoItem