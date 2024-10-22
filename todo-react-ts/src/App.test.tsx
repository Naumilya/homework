import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { App } from './App'
import store from './stores/stores'

test('renders the Header', () => {
	render(
		<Provider store={store}>
			<App />
		</Provider>
	)
	const headerElement = screen.getByTestId('header')
	expect(headerElement).toBeInTheDocument()
})

test('renders the TodoPanel component', () => {
	render(
		<Provider store={store}>
			<App />
		</Provider>
	)
	const panelElement = screen.getByTestId('todo-panel')
	expect(panelElement).toBeInTheDocument()
})

test('renders the TodoList component', () => {
	render(
		<Provider store={store}>
			<App />
		</Provider>
	)
	const listElement = screen.getByTestId('todo-list')
	expect(listElement).toBeInTheDocument()
})
