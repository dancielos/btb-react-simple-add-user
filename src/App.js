import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import AddUserForm from './components/AddUserForm';
import UsersList from './components/UsersList';
import ErrorModal from './components/ErrorModal';

function App() {
	// document.getElementById('overlay-root').addEventListener('click', () => {
	// 	return console.log('overlay clicked');
	// });

	const [users, setUsers] = useState([]);
	const [message, setMessage] = useState('');

	let isOpenModal = message === '' ? false : true;
	console.log({ isOpenModal });

	const submitHandler = function (userInput) {
		// console.log({ userInput });
		setUsers((prevState) => {
			return [...prevState, userInput];
		});
		// console.log(users);
	};

	const errorHandler = function (message) {
		setMessage(message);
	};

	const closeModalHandler = function () {
		setMessage('');
	};

	return (
		<>
			{createPortal(
				<ErrorModal
					message={message}
					isOpenModal={isOpenModal}
					onCloseModal={closeModalHandler}
				/>,
				document.getElementById('overlay')
			)}
			<AddUserForm onSubmit={submitHandler} onError={errorHandler} />
			<UsersList users={users} />
		</>
	);
}

export default App;
