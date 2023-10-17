import UserItem from './UserItem';

const UsersList = function (props) {
	console.log(props.users);
	return (
		<div className='container'>
			<ul className='list list__users'>
				{props.users.map((user, index) => {
					return (
						<UserItem
							key={`${user.username}${index + 1}`}
							username={user.username}
							age={user.age}
						/>
					);
				})}
			</ul>
		</div>
	);
};

export default UsersList;
