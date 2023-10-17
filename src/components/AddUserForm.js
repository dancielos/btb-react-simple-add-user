const AddUserForm = function (props) {
	return (
		<form className='form form__add-user'>
			<label className='label label-form' htmlFor='username'>
				Username
			</label>
			<input
				type='text'
				className='input input__username'
				id='username'
			></input>
			<label className='label label-form' htmlFor='age'>
				Age
			</label>
			<input type='number' className='input input__age' id='age'></input>
			<input type='submit'></input>
		</form>
	);
};

export default AddUserForm;
