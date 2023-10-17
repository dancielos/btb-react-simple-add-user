const ErrorModal = function (props) {
	return (
		<div className='modal container'>
			<p className='error-title'>Invalid input</p>
			<p className='error-message'>
				Please enter a valid name and age (non-empty values). or age must be
				positive.
			</p>
			<button type='button'>Okay</button>
		</div>
	);
};

export default ErrorModal;
