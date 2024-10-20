import {
	ADD_TODO,
	CHANGE_TODO,
	CHECK_TODO,
	DELETE_TODO,
	SELECT_TODO_FOR_EDIT,
	type TodoActionTypes,
} from './actions'

interface Todo {
	id: number
	name: string
	description: string
	checked: boolean
}

interface TodoState {
	todos: Todo[]
	todoIdForEdit: number | null
}

const DEFAULT_TODO_LIST: Todo[] = [
	{ id: 1, name: 'task 1', description: 'description 1', checked: true },
	{ id: 2, name: 'task 2', description: 'description 1', checked: false },
	{ id: 3, name: 'task 3', description: 'description 1', checked: false },
]

const initialState: TodoState = {
	todos: DEFAULT_TODO_LIST,
	todoIdForEdit: null,
}

export const todoReducer = (
	state = initialState,
	action: TodoActionTypes
): TodoState => {
	switch (action.type) {
		case ADD_TODO: {
			const newId =
				state.todos.length > 0 ? state.todos[state.todos.length - 1].id + 1 : 1
			return {
				...state,
				todos: [
					...state.todos,
					{ id: newId, ...action.payload, checked: false },
				],
			}
		}
		case DELETE_TODO: {
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.payload),
			}
		}

		case CHECK_TODO: {
			return {
				...state,
				todos: state.todos.map(todo =>
					todo.id === action.payload
						? { ...todo, checked: !todo.checked }
						: todo
				),
			}
		}

		case SELECT_TODO_FOR_EDIT: {
			return {
				...state,
				todoIdForEdit: action.payload,
			}
		}

		case CHANGE_TODO: {
			return {
				...state,
				todos: state.todos.map(todo =>
					todo.id === state.todoIdForEdit
						? { ...todo, ...action.payload }
						: todo
				),
				todoIdForEdit: null,
			}
		}

		default:
			return state
	}
}
