import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, userDetailsActions } from '../redux';
import Spinner from '../components/Loader';
import Message from '../components/Message';

const ProfileScreen: React.FC = () => {
	const [updateUser, setUpdateUser] = useState({
		name: '',
		email: '',
		userName: '',
		password: '',
	});
	const [confirmPassword, setConfirmPassword] = useState<string>('');
	const [message, setMessage] = useState<string | null>(null);

	const history = useHistory();

	const dispatch = useDispatch();

	const { userInfo } = useSelector((state: RootState) => state.userAuth);

	const { loading, user, error } = useSelector(
		(state: RootState) => state.userDetails
	);

	const { email, userName, name, password } = updateUser;

	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUpdateUser({ ...updateUser, [event.target.name]: event.target.value });
	};

	const loginHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			setMessage('Passwords do not Match, Please check your password again!');
		} else {
			// Dispatch Update Action
		}
	};

	useEffect(() => {
		if (!userInfo) {
			return history.push('/login');
		}

		if (user) {
			setUpdateUser({
				password: '',
				name: user.name,
				email: user.email,
				userName: user.userName,
			});
		} else {
			dispatch(userDetailsActions.getUserProfile('profile'));
		}
	}, [history, userInfo, user, dispatch]);

	if (loading) {
		return (
			<div className="vh-100 d-flex justify-content-center align-items-center">
				<Spinner />
			</div>
		);
	}

	return (
		<Row>
			<Col md={3}>
				<h2>User Profile</h2>
				{error && <Message variant="danger">{error}</Message>}
				{message && <Message variant="danger">{message}</Message>}
				<Form onSubmit={loginHandler}>
					<Form.Group controlId="name">
						<Form.Label>Name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter Your Name"
							value={name}
							name="name"
							onChange={changeHandler}
						></Form.Control>
					</Form.Group>

					<Form.Group controlId="userName">
						<Form.Label>User Name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter User Name"
							value={userName}
							name="userName"
							onChange={changeHandler}
						></Form.Control>
					</Form.Group>

					<Form.Group controlId="email">
						<Form.Label>Email Address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter Your Email"
							value={email}
							name="email"
							onChange={changeHandler}
							inputMode="email"
						></Form.Control>
					</Form.Group>

					<Form.Group controlId="password">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Enter Password"
							value={password}
							name="password"
							onChange={changeHandler}
						></Form.Control>
					</Form.Group>

					<Form.Group controlId="confirmPassword">
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="confirm Password"
							value={confirmPassword}
							name="confirmPassword"
							onChange={e => setConfirmPassword(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Button type="submit" variant="primary">
						Update
					</Button>
				</Form>
			</Col>
			<Col md={9}>
				<h2>My Orders</h2>
			</Col>
		</Row>
	);
};

export default ProfileScreen;
