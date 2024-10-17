import { FC } from 'react'
import { Todo } from '../../../types'

import { Button } from '../../Button/Button'
import styles from './TodoItem.module.css'

interface TodoItemProps {
	todo: Todo
	checkTodo: (id: Todo['id']) => void
	deleteTodo: (id: Todo['id']) => void
	selectTodoIdForEdit: (id: Todo['id']) => void
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
					onClick={() => checkTodo(todo.id)}
				>
					{todo.name}
				</div>
				<div className={styles.todo_item_description} aria-hidden>
					{todo.description}
				</div>
			</div>
			<div className={styles.todo_item_button_container}>
				<Button color='orange' onClick={() => selectTodoIdForEdit(todo.id)}>
					Edit
				</Button>
				<Button color='red' onClick={() => deleteTodo(todo.id)}>
					Delete
				</Button>
			</div>
		</div>
	)
}
