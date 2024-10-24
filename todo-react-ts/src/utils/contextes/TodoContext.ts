import { createContext } from 'react'
import { Todo } from '../../types'

export interface TodoContextProps {
	todos: Todo[]
	todoIdForEdit: Todo['id'] | null
	addTodo: ({ name, description }: Omit<Todo, 'checked' | 'id'>) => void
	checkTodo: (id: Todo['id']) => void
	deleteTodo: (id: Todo['id']) => void
	selectTodoIdForEdit: (id: Todo['id']) => void
	changeTodo: ({ name, description }: Omit<Todo, 'checked' | 'id'>) => void
}

export const TodoContext = createContext<TodoContextProps>({
	todos: [],
	todoIdForEdit: null,
	addTodo: () => {},
	checkTodo: () => {},
	deleteTodo: () => {},
	selectTodoIdForEdit: () => {},
	changeTodo: () => {},
})
