import { FC } from 'react'
import { Todo } from '../../../types'
import { Button } from '../../Button/Button'
import styles from './TodoItem.module.css'

interface TodoItemProps {
	todo: Todo
	checkTodo: () => void
	deleteTodo: () => void
	selectTodoIdForEdit: () => void
}

export const TodoItem: FC<TodoItemProps> = ({
	todo,
	checkTodo,
	deleteTodo,
	selectTodoIdForEdit,
}) => {
	return (
		<div className={styles.todo_item_container}>
			<div>
				<div
					className={styles.todo_item_title}
					aria-hidden
					style={{
						opacity: todo.checked ? 0.5 : 1,
						textDecoration: todo.checked ? 'line-through' : 'none',
					}}
					onClick={checkTodo}
				>
					{todo.name}
				</div>
				<div className={styles.todo_item_description} aria-hidden>
					{todo.description}
				</div>
			</div>
			<div className={styles.todo_item_button_container}>
				<Button color='orange' onClick={selectTodoIdForEdit}>
					Edit
				</Button>
				<Button color='red' onClick={deleteTodo}>
					Delete
				</Button>
			</div>
		</div>
	)
}
