import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../stores/stores'
import styles from './Header.module.css'

interface HeaderProps {
	'data-testid'?: string
}

export const Header: FC<HeaderProps> = ({ 'data-testid': testId }) => {
	const todos = useSelector((state: RootState) => state.todos)

	return (
		<header className={styles.header_container} data-testid={testId}>
			<div className={styles.header_title}>
				Todo list <b>{todos.length}</b> task(s)
			</div>
		</header>
	)
}
