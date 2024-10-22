import { Provider } from 'react-redux'
import styles from './App.module.css'

import { Header } from './components/Header/Header'
import { TodoList } from './components/TodoList/TodoList'
import { TodoPanel } from './components/TodoPanel/TodoPanel'
import store from './stores/stores'

export const App = () => (
	<Provider store={store}>
		<div className={styles.app_container}>
			<div className={styles.container}>
				<Header data-testid='header' />
				<TodoPanel mode='add' data-testid='todo-panel' />
				<TodoList data-testid='todo-list' />
			</div>
		</div>
	</Provider>
)
