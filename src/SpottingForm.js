import { Wrapper } from '@googlemaps/react-wrapper';
import { Button, Form, Input, Select } from 'antd';
import { useEffect, useState } from 'react';
import Map from './Map';

const SpottingForm = ({ currentUser }) => {
	const { Option } = Select;
	const [birds, setBirds] = useState([]);
	const [formData, setFormdata] = useState({
		notes: '',
		user_id: currentUser.id,
		bird_id: '',
		image: '',
		lat: '',
		long: '',
	});
	console.log(formData);
	const mapStyles = {
		height: '50vh',
		width: '50vh',
	};

	const defaultCenter = {
		lat: 40.6602,
		lng: -73.969749,
	};

	// fetch and render Option components for each bird?

	const handleChange = (e) => {
		console.log(e.target.name, ':', e.target.value);
		setFormdata({ ...formData, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	// filter the bird array live, when selecting the bird,
	// the id is also grabbed? Then it is simply posted to the backend
	// OR
	// We have to submit, run a fetch which the bird is chosem,
	// create a route that searches for the bird via params,
	// then sets that bird id.

	useEffect(() => {
		fetch('/birds')
			.then((r) => r.json())
			.then((birds) => {
				setBirds(birds);
				// console.log(birds);
			});
	}, []);
	const renderOptions = birds.map((birdOption) => {
		return (
			<Option
				onChange={handleChange}
				key={birdOption.id}
				value={birdOption.id}
			>
				{birdOption.common_name}
			</Option>
		);
	});

	return (
		<>
			<h3>What did you see?</h3>
			<Form onSubmit={handleSubmit} name="spotting-form">
				<Select
					showSearch
					style={{ width: 200 }}
					placeholder="Search to Select"
					optionFilterProp="children"
					filterOption={(input, option) =>
						option.children
							.toLowerCase()
							.indexOf(input.toLowerCase()) >= 0
					}
					filterSort={(optionA, optionB) =>
						optionA.children
							.toLowerCase()
							.localeCompare(optionB.children.toLowerCase())
					}
				>
					{renderOptions}
				</Select>
				<Form.Item
				// rules={[
				// 	{
				// 		required: true,
				// 		message: 'Please input your Username!',
				// 	},
				// ]}
				>
					<Input
						name="notes"
						// prefix={
						// 	<SmallDashOutlined className="site-form-item-icon" />
						// }
						placeholder="Field notes"
						onChange={handleChange}
					/>
				</Form.Item>
				<Form.Item
				// rules={[
				// 	{
				// 		required: true,
				// 		message: 'Please input your Username!',
				// 	},
				// ]}
				>
					<Input
						name="image"
						// prefix={
						// 	<SmallDashOutlined className="site-form-item-icon" />
						// }
						placeholder="Image"
						onChange={handleChange}
					/>
				</Form.Item>
				<Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						className="spotting-form-button"
					>
						Submit
					</Button>
				</Form.Item>
			</Form>
			{/* <Wrapper googleMapsApiKey={process.env.REACT_APP_API_KEY}>
				<Map />
			</Wrapper> */}
		</>
	);
};

export default SpottingForm;
