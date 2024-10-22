import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { App } from '../App'
import store from '../stores/stores'

test('renders the Todo components', () => {
	render(
		<Provider store={store}>
			<App />
		</Provider>
	)
	const headerElement = screen.getByTestId('header')
	const panelElement = screen.getByTestId('todo-panel')
	const listElement = screen.getByTestId('todo-list')

	expect(headerElement).toBeInTheDocument()
	expect(panelElement).toBeInTheDocument()
	expect(listElement).toBeInTheDocument()
})
