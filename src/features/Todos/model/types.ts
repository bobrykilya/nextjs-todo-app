export interface ITodo {
	id: number;
	text: string;
	completed: boolean;
}

export interface IUseTodoStore {
	todoList: ITodo[];
	addTodo: (text: ITodo['text']) => void;
	toggleTodo: (id: ITodo['id']) => void;
	removeTodo: (id: ITodo['id']) => void;
	initializeTodoList: () => void;
}