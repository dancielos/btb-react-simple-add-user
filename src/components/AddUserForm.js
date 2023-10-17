import React, { useState, useRef } from 'react';

const initialInput = {
	username: '',
	age: '',
};

const AddUserForm = function (props) {
	// const [userInput, setUserInput] = useState(initialInput);
	const usernameInput = useRef();
	const ageInput = useRef();

	// const inputChangeHandler = function (key, value) {
	// setUserInput((prevState) => {
	// 	return {
	// 		...prevState,
	// 		[key]: value,
	// 	};
	// });
	// };

	const submitHandler = function (e) {
		e.preventDefault();

		// const isInputEmpty = userInput.username === '' || userInput.age === '';
		// const isAgeValid = isFinite(userInput.age) && +userInput.age > 0;
		const isInputEmpty =
			usernameInput.current.value === '' || ageInput.current.value === '';
		const isAgeValid =
			isFinite(ageInput.current.value) && +ageInput.current.value > 0;
		if (isInputEmpty)
			props.onError('Empty input, both username and age are required.');
		else if (!isAgeValid) props.onError('Age invalid, it must be > 0.');
		else {
			// props.onSubmit(userInput);
			props.onSubmit({
				username: usernameInput.current.value,
				age: +ageInput.current.value,
			});
		}
		usernameInput.current.value = '';
		ageInput.current.value = '';
	};

	return (
		<form onSubmit={submitHandler} className='form form__add-user'>
			<div className='input-group'>
				<label className='label label-form' htmlFor='username'>
					Username
				</label>
				<input
					type='text'
					className='input input__username'
					id='username'
					ref={usernameInput}
				></input>
			</div>
			<div className='input-group'>
				<label className='label label-form' htmlFor='age'>
					Age
				</label>
				<input
					type='number'
					className='input input__age'
					id='age'
					ref={ageInput}
				></input>
			</div>
			<input type='submit'></input>
		</form>
	);
};

export default AddUserForm;
