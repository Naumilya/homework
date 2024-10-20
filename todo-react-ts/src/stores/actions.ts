import { Todo } from './../types/index.d'
export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const CHECK_TODO = 'CHECK_TODO'
export const SELECT_TODO_FOR_EDIT = 'SELECT_TODO_FOR_EDIT'
export const CHANGE_TODO = 'CHANGE_TODO'

export interface AddTodoAction {
	type: typeof ADD_TODO
	payload: Omit<Todo, 'id' | 'checked'>
}

export interface DeleteTodoAction {
	type: typeof DELETE_TODO
	payload: Todo['id']
}

export interface CheckTodoAction {
	type: typeof CHECK_TODO
	payload: Todo['id']
}

export interface SelectTodoForEditAction {
	type: typeof SELECT_TODO_FOR_EDIT
	payload: Todo['id']
}

export interface ChangeTodoAction {
	type: typeof CHANGE_TODO
	payload: Omit<Todo, 'id' | 'checked'>
}

export type TodoActionTypes =
	| AddTodoAction
	| DeleteTodoAction
	| CheckTodoAction
	| SelectTodoForEditAction
	| ChangeTodoAction

export const addTodo = ({
	name,
	description,
}: Omit<Todo, 'id' | 'checked'>): AddTodoAction => ({
	type: ADD_TODO,
	payload: { name, description },
})

export const deleteTodo = (id: Todo['id']): DeleteTodoAction => ({
	type: DELETE_TODO,
	payload: id,
})

export const checkTodo = (id: Todo['id']): CheckTodoAction => ({
	type: CHECK_TODO,
	payload: id,
})

export const selectTodoForEdit = (id: Todo['id']): SelectTodoForEditAction => ({
	type: SELECT_TODO_FOR_EDIT,
	payload: id,
})

export const changeTodo = ({
	name,
	description,
}: Omit<Todo, 'id' | 'checked'>): ChangeTodoAction => ({
	type: CHANGE_TODO,
	payload: { name, description },
})
