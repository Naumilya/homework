import React from 'react'
import styles from './App.module.css'
import { Header } from './components/Header/Header'
import { TodoPanel } from './components/TodoPanel/TodoPanel'

const DEFAULT_TODO_LIST = [
	{ id: 1, name: 'task 1', description: 'description 1', checked: true },
	{ id: 2, name: 'task 2', description: 'description 1', checked: false },
	{ id: 3, name: 'task 3', description: 'description 1', checked: false },
]

export const App = () => {
	console.log('@todos', DEFAULT_TODO_LIST)
	const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST)
	console.log('todos', 'setTodos', todos, setTodos)

	return (
		<div className={styles.app_container}>
			<div className={styles.container}>
				<Header todoCount={todos.length} />
				<TodoPanel />
			</div>
		</div>
	)
}
