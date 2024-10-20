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
				<Header />
				<TodoPanel mode='add' />
				<TodoList />
			</div>
		</div>
	</Provider>
)
