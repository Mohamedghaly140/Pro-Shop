import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, userDetailsActions, userUpdateActions } from '../redux';
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

	const { success } = useSelector((state: RootState) => state.userUpdate);
	const updateLoading = useSelector(
		(state: RootState) => state.userUpdate.loading
	);

	const updatedUser = useSelector((state: RootState) => state.userUpdate.user);

	const { email, userName, name, password } = updateUser;

	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUpdateUser({ ...updateUser, [event.target.name]: event.target.value });
	};

	const updateProfileHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			setMessage('Passwords do not Match, Please check your password again!');
		} else {
			dispatch(userUpdateActions.updateUserProfile(updateUser));
		}
	};

	useEffect(() => {
		if (!userInfo) {
			return history.push('/login');
		}

		if (!user || !user.name || success) {
			dispatch(userUpdateActions.resetUserProfile());
			dispatch(userDetailsActions.getUserProfile('profile'));
		} else {
			setUpdateUser({
				password: '',
				name: user.name,
				email: user.email,
				userName: user.userName,
			});
		}
	}, [history, userInfo, user, success, dispatch]);

	if (loading || !user) {
		return (
			<div className="vh-100 d-flex justify-content-center align-items-center">
				<Spinner />
			</div>
		);
	}

	return (
		<Row>
			<Col md={4}>
				<h2>User Profile</h2>
				{error && <Message variant="danger">{error}</Message>}
				{message && <Message variant="danger">{message}</Message>}
				{updatedUser && success && (
					<Message variant="success">{updatedUser.message}</Message>
				)}
				<Form onSubmit={updateProfileHandler}>
					<Form.Group controlId="name">
						<Form.Label>Update Name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Update Name"
							value={name}
							name="name"
							onChange={changeHandler}
						></Form.Control>
					</Form.Group>

					<Form.Group controlId="userName">
						<Form.Label>Update User Name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Update User Name"
							value={userName}
							name="userName"
							onChange={changeHandler}
						></Form.Control>
					</Form.Group>

					<Form.Group controlId="email">
						<Form.Label>Update Email Address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Update Email"
							value={email}
							name="email"
							onChange={changeHandler}
							inputMode="email"
						></Form.Control>
					</Form.Group>

					<Form.Group controlId="password">
						<Form.Label>Update Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Update Password"
							value={password}
							name="password"
							onChange={changeHandler}
						></Form.Control>
					</Form.Group>

					<Form.Group controlId="confirmPassword">
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Confirm Password"
							value={confirmPassword}
							name="confirmPassword"
							onChange={e => setConfirmPassword(e.target.value)}
						></Form.Control>
					</Form.Group>

					{updateLoading ? (
						<Spinner width={50} height={50} />
					) : (
						<Button type="submit" variant="primary" block>
							Update
						</Button>
					)}
				</Form>
			</Col>
			<Col md={8}>
				<h2>My Orders</h2>
			</Col>
		</Row>
	);
};

export default ProfileScreen;
