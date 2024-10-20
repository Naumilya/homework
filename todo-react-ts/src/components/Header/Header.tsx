import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../stores/stores'
import styles from './Header.module.css'

export const Header: FC = () => {
	const todos = useSelector((state: RootState) => state.todos)

	return (
		<div className={styles.header_container}>
			<div className={styles.header_title}>
				Todo list <b>{todos.length}</b> task(s)
			</div>
		</div>
	)
}
