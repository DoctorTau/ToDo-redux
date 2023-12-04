import React from 'react';
import './AddItem.css';
import { useDispatch } from 'react-redux';
import { addAction } from '../store/slices/TodoSlice';

export const AddAction: React.FC = () => {
    const [state, setState] = React.useState('');
    const dispatch = useDispatch();

	const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setState(e.target.value);
    };
    
    const onClick = () => {
        dispatch(addAction(state));
        setState('');
    }

	return (
		<div>
			<input type='text' value={state} onChange={onChange} />
			<button onClick={onClick}>+</button>
		</div>
	);
};
