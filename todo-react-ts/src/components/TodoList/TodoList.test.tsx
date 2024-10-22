import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { todoReducer } from '../../stores/reducers'
import { TodoList } from './TodoList'

const mockStore = (initialState: any) => createStore(todoReducer, initialState)

const mockInitialState = {
	todos: [
		{ id: 1, name: 'Test Todo 1', description: 'Description 1', checked: true },
		{
			id: 2,
			name: 'Test Todo 2',
			description: 'Description 2',
			checked: false,
		},
	],
	todoIdForEdit: null,
}

test('renders TodoList and checks for todo items', () => {
	const store = mockStore(mockInitialState)

	render(
		<Provider store={store}>
			<TodoList data-testid='todo-list' />
		</Provider>
	)

	expect(screen.getByText('Test Todo 1')).toBeInTheDocument()
	expect(screen.getByText('Test Todo 2')).toBeInTheDocument()
})

test('renders TodoList with empty state', () => {
	const emptyState = {
		todos: [],
		todoIdForEdit: null,
	}
	const store = mockStore(emptyState)

	render(
		<Provider store={store}>
			<TodoList data-testid='todo-list' />
		</Provider>
	)

	expect(screen.queryByText('Test Todo 1')).not.toBeInTheDocument()
	expect(screen.queryByText('Test Todo 2')).not.toBeInTheDocument()
})
