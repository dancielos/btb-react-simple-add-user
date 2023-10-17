import React, { useState } from 'react';

const initialInput = {
	username: '',
	age: '',
};

const AddUserForm = function (props) {
	const [userInput, setUserInput] = useState(initialInput);

	const inputChangeHandler = function (key, value) {
		setUserInput((prevState) => {
			return {
				...prevState,
				[key]: value,
			};
		});
	};

	const submitHandler = function (e) {
		e.preventDefault();
		const isInputEmpty = userInput.username === '' || userInput.age === '';
		const isAgeValid = isFinite(userInput.age) && +userInput.age > 0;
		if (isInputEmpty)
			props.onError('Empty input, both username and age are required.');
		else if (!isAgeValid) props.onError('Age invalid, it must be > 0.');
		else {
			props.onSubmit(userInput);
		}
		setUserInput(initialInput);
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
					value={userInput.username}
					onChange={(e) => {
						inputChangeHandler('username', e.target.value);
					}}
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
					value={userInput.age}
					onChange={(e) => {
						inputChangeHandler('age', e.target.value);
					}}
				></input>
			</div>
			<input type='submit'></input>
		</form>
	);
};

export default AddUserForm;
