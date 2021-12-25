import { Col, message, Row } from 'antd';
import { useEffect, useState } from 'react';

import FollowedUsersContainer from './FollowedUsersContainer';
import UnfollowedUsersContainer from './UnfollowedUsersContainer';

const FeedContainer = ({ currentUser }) => {
	const [users, setUsers] = useState([]);
	const [followings, setFollowings] = useState([]);
	useEffect(() => {
		fetch('/feed')
			.then((r) => r.json())
			.then((users) => {
				// console.log(users);
				setUsers(users);
			});
		fetch('/followings')
			.then((r) => r.json())
			.then((followedUsers) => {
				console.log(followedUsers);
				setFollowings(followedUsers);
			});
	}, []);

	function handleFollow(user) {
		const dataobj = {
			follower_id: currentUser.id,
			followed_user_id: user.id,
		};
		console.log(dataobj);
		fetch('/follows', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(dataobj),
		})
			.then((r) => r.json())
			.then((users) => {
				console.log();
				setUsers(users);
			})
			.catch((error) => console.log(error));
	}

	const handleUnFollow = (follow) => {
		fetch(`/follows/${follow.id}`, {
			method: 'DELETE',
		})
			.then((r) => r.json())
			.then((follows) => {
				setFollowings(follows);
			});
		success(follow.followed_user.username);
	};

	const success = (username) => {
		message.success({
			content: `You have unfollowed ${username}.`,
			className: 'custom-class',
			style: {
				marginTop: '20vh',
			},
		});
	};
	// setTimeout(() => {console.log("this is the first message")}, 5000)

	//
	// RENDER 2 ROWS... FOLLOWED USERS AND OTHERS?
	return (
		<>
			<Row>
				<Col span={12}>
					<FollowedUsersContainer
						followings={followings}
						handleUnFollow={handleUnFollow}
					/>
				</Col>
				<Col span={12}>
					<UnfollowedUsersContainer
						users={users}
						handleFollow={handleFollow}
					/>
				</Col>
			</Row>
		</>
	);
};

export default FeedContainer;
