import { useState } from 'react';
import { Link } from 'react-router-dom';

// const Login = ({ handleLogIn }) => {
// 	// const [formData, setFormData] = useState({
// 	// 	username: '',
// 	// 	password: '',
// 	// });

// 	// const handleChange = (e) => {
// 	// 	console.log(e.target.name, ':', e.target.value);
// 	// 	setFormData({ ...formData, [e.target.name]: e.target.value });
// 	// };

// 	// const logIn = (e) => {
// 	// 	e.preventDefault();
// 	// 	handleLogIn(formData);
// 	// };

// 	return (
// 		// <>
// 		// 	<form onSubmit={logIn}>
// 		// 		<input
// 		// 			onChange={handleChange}
// 		// 			name="username"
// 		// 			placeholder="username"
// 		// 		></input>{' '}
// 		// 		<input
// 		// 			onChange={handleChange}
// 		// 			name="password"
// 		// 			placeholder="password"
// 		// 		></input>{' '}
// 		// 		<button>Submit</button>
// 		// 	</form>

// 		// 	<Link to="/signup">Don't have an account? Sign up!</Link>
// 		// </>
// 	);
// };

// export default Login;

import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Login = ({ handleLogIn }) => {
	const onFinish = ()=> {
		handleLogIn(formData);
	};

	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});

	const handleChange = (e) => {
		console.log(e.target.name, ':', e.target.value);
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const logIn = (e) => {
		e.preventDefault();
		handleLogIn(formData);
	};

	return (
		<Form
			name="normal_login"
			className="login-form"
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onSubmit={logIn}
		>
			<Form.Item
				rules={[
					{ required: true, message: 'Please input your Username!' },
				]}
			>
				<Input
					name="username"
					prefix={<UserOutlined className="site-form-item-icon" />}
					placeholder="Username"
					onChange={handleChange}
				/>
			</Form.Item>
			<Form.Item
				rules={[
					{ required: true, message: 'Please input your Password!' },
				]}
			>
				<Input
					prefix={<LockOutlined className="site-form-item-icon" />}
					type="password"
					placeholder="Password"
					onChange={handleChange}
					name="password"
				/>
			</Form.Item>
			<Form.Item>
				<Form.Item name="remember" valuePropName="checked" noStyle>
					<Checkbox>Remember me</Checkbox>
				</Form.Item>

				{/* <a className="login-form-forgot" href="">
					Forgot password
				</a> */}
			</Form.Item>

			<Form.Item>
				<Button
					type="primary"
					htmlType="submit"
					className="login-form-button"
				>
					Log in
				</Button>
				Or <a href="">sign up now!</a>
			</Form.Item>
		</Form>
	);
};

export default Login;

// #components-form-demo-normal-login .login-form {
//   max-width: 300px;
// }
// #components-form-demo-normal-login .login-form-forgot {
//   float: right;
// }
// #components-form-demo-normal-login .ant-col-rtl .login-form-forgot {
//   float: left;
// }
// #components-form-demo-normal-login .login-form-button {
//   width: 100%;
// }
