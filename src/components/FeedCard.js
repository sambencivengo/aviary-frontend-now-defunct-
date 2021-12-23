import { Card, Avatar, Typography } from 'antd';
import {
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined,
} from '@ant-design/icons';

const { Meta } = Card;

const FeedCard = ({ user, avatar, handleFollow }) => {
	return (
		<>
			<Card
				key={user.id}
				style={{ width: 300 }}
				// cover={
				// 	<img
				// 		alt="example"
				// 		src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
				// 	/>
				// }
				actions={[
					<Typography
						style={{ opacity: 0.6 }}
						onClick={() => {
							handleFollow(user);
						}}
					>
						Follow
					</Typography>,
					<Typography style={{ opacity: 0.6 }}>
						View Aviary
					</Typography>,
				]}
			>
				<Meta
					avatar={<Avatar src={avatar} />}
					title={user.username}
					description={`Total Birds Spotted: ${user.spottings.length}`}
				/>
			</Card>
		</>
	);
};

export default FeedCard;
