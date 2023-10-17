import UserItem from './UserItem';

const UsersList = function (props) {
	return (
		<div className='container'>
			<ul className='list list__users'>
				<UserItem />
				<UserItem />
				<UserItem />
			</ul>
		</div>
	);
};

export default UsersList;
