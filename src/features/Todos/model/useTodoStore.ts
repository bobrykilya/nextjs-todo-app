import { create } from 'zustand'
import { IUseTodoStore } from '@/features/Todos/model/types'



export const useTodoStore = create<IUseTodoStore>((set, get) => ({
	todoList: [],
	addTodo: (text) => {
		const { todoList } = get()
		set({
			todoList: [...todoList, {
				id: Date.now(),
				text,
				completed: false,
			}],
		})
	},
	completeTodo: (id) => {
		const { todoList } = get()
		set({
			todoList: [...todoList.map(todo => todo.id !== id ? todo : { ...todo, completed: true })],
		})
	},
	removeTodo: (id) => {
		const { todoList } = get()
		set({
			todoList: [...todoList.filter(todo => todo.id !== id)],
		})
	},
}))