import React from 'react';
import './TodoItem.css';
import { useDispatch } from 'react-redux';
import { removeAction } from '../store/slices/TodoSlice';

interface TodoItemProps {
	text: string;
	index: number;
}

export const TodoItem: React.FC<TodoItemProps> = ({ text, index }) => {
	const dispatch = useDispatch();

	return (
		<div>
			<span>{text}</span>
			<button onClick={() => dispatch(removeAction(index))}>X</button>
		</div>
	);
};
