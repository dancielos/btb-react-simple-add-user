const UserItem = function (props) {
	return (
		<li>
			{props.username} ({props.age} years old)
		</li>
	);
};

export default UserItem;
