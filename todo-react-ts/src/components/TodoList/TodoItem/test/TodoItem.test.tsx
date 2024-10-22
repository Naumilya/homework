import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { todoReducer } from '../../../../stores/reducers'
import { Todo } from '../../../../types'
import { TodoItem } from '.././TodoItem'

const mockStore = (initialState: any) => createStore(todoReducer, initialState)

const mockTodo: Todo = {
	id: 1,
	name: 'Test Todo',
	description: 'Test Description',
	checked: false,
}

test('renders TodoItem and checks for todo elements', () => {
	const store = mockStore({
		todos: [],
		todoIdForEdit: null,
	})

	const checkTodoMock = jest.fn()
	const deleteTodoMock = jest.fn()
	const selectTodoIdForEditMock = jest.fn()

	render(
		<Provider store={store}>
			<TodoItem
				todo={mockTodo}
				checkTodo={checkTodoMock}
				deleteTodo={deleteTodoMock}
				selectTodoIdForEdit={selectTodoIdForEditMock}
			/>
		</Provider>
	)

	expect(screen.getByText('Test Todo')).toBeInTheDocument()
	expect(screen.getByText('Test Description')).toBeInTheDocument()

	expect(screen.getByRole('button', { name: /edit/i })).toBeInTheDocument()
	expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument()
})

test('calls checkTodo when the todo title is clicked', () => {
	const store = mockStore({
		todos: [],
		todoIdForEdit: null,
	})

	const checkTodoMock = jest.fn()
	const deleteTodoMock = jest.fn()
	const selectTodoIdForEditMock = jest.fn()

	render(
		<Provider store={store}>
			<TodoItem
				todo={mockTodo}
				checkTodo={checkTodoMock}
				deleteTodo={deleteTodoMock}
				selectTodoIdForEdit={selectTodoIdForEditMock}
			/>
		</Provider>
	)

	screen.getByText('Test Todo').click()

	expect(checkTodoMock).toHaveBeenCalledTimes(1)
})

test('calls deleteTodo when delete button is clicked', () => {
	const store = mockStore({
		todos: [],
		todoIdForEdit: null,
	})

	const checkTodoMock = jest.fn()
	const deleteTodoMock = jest.fn()
	const selectTodoIdForEditMock = jest.fn()

	render(
		<Provider store={store}>
			<TodoItem
				todo={mockTodo}
				checkTodo={checkTodoMock}
				deleteTodo={deleteTodoMock}
				selectTodoIdForEdit={selectTodoIdForEditMock}
			/>
		</Provider>
	)

	screen.getByRole('button', { name: /delete/i }).click()

	expect(deleteTodoMock).toHaveBeenCalledTimes(1)
})
