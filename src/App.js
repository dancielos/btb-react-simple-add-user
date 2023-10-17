import React from 'react';
import { createPortal } from 'react-dom';
import AddUserForm from './components/AddUserForm';
import UsersList from './components/UsersList';
import ErrorModal from './components/ErrorModal';

function App() {
	// document.getElementById('overlay-root').addEventListener('click', () => {
	// 	return console.log('overlay clicked');
	// });
	return (
		<>
			{/* {createPortal(<ErrorModal />, document.getElementById('overlay-root'))} */}
			<AddUserForm />
			<UsersList />
		</>
	);
}

export default App;
