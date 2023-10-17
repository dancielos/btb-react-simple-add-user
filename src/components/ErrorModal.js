// import React, { useState } from 'react';

import { useState } from 'react';

const ErrorModal = function (props) {
	// let message = props.message;
	// const [message, setMessage] = useState('');
	// if (props.message !== '') setMessage(props.message);
	// console.log(message);

	const closeModalHandler = function (e) {
		e.preventDefault();
		props.onCloseModal();
		// openModal = false;
		// setMessage('');
	};

	return (
		<>
			<div
				className={`overlay-container ${props.isOpenModal ? '' : 'hidden'}`}
				onClick={closeModalHandler}
			></div>
			<div className={`modal-container ${props.isOpenModal ? '' : 'hidden'}`}>
				<div className='modal'>
					<p className='error-title'>Invalid input</p>
					<p className='error-message'>{props.message}</p>
					<button type='button' onClick={closeModalHandler}>
						Okay
					</button>
				</div>
			</div>
		</>
	);
};

export default ErrorModal;
