import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { RootState } from './store/Store';
import { AddAction } from './components/AddItem';
import { TodoItem } from './components/TodoItem';

const App: React.FC = () => {
	const data = useSelector((state: RootState) => state.todo.todos);

	return (
		<div className='App'>
			<header className='App-header'>
				<AddAction />
				{data.map((item) => (
					<TodoItem index={data.indexOf(item)} text={item} />
				))}
			</header>
		</div>
	);
};

export default App;
