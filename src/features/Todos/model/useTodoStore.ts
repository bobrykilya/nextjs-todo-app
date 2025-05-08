import { create } from 'zustand'
import { ITodo, IUseTodoStore } from '@/features/Todos/model/types'
import { LS_TODOS } from '@/features/Todos/lib/constants'
import { getLSList, setLSList } from '@/shared/lib/localStorage'



export const useTodoStore = create<IUseTodoStore>((set, get) => {

	const updateTodos = (newTodos: ITodo[]) => {
		set({ todoList: newTodos })
		setLSList(LS_TODOS, newTodos)
	}


	return {
		todoList: [],
		addTodo: (text) => {
			const { todoList } = get()
			const updated = [
				...todoList,
				{
					id: Date.now(),
					text,
					completed: false,
				},
			]

			updateTodos(updated)
		},
		toggleTodo: (id) => {
			const { todoList } = get()
			const updated = [...todoList.map(todo => todo.id !== id ? todo : !todo.completed ? {
				...todo,
				completed: true,
			} : { ...todo, completed: false })]

			updateTodos(updated)
		},
		removeTodo: (id) => {
			const { todoList } = get()
			const updated = [...todoList.filter(todo => todo.id !== id)]

			updateTodos(updated)
		},
		initializeTodoList: () => {
			if (typeof window === 'undefined') {
				return
			}
			const storedTodos = getLSList<ITodo[]>(LS_TODOS)

			set({ todoList: storedTodos })
		},
	}
})