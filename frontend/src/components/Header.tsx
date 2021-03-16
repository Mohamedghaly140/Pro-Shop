import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, userActions } from '../redux';

const Header: React.FC = () => {
	const { userInfo } = useSelector((state: RootState) => state.userAuth);

	const dispatch = useDispatch();

	const logoutHandler = () => dispatch(userActions.logout());

	return (
		<header>
			<Navbar variant="dark" expand="md" collapseOnSelect>
				<Container>
					<Navbar.Brand as={NavLink} to="/" exact>
						ProShop
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Link as={NavLink} to="/cart">
								<i className="fas fa-shopping-cart"></i> Cart
							</Nav.Link>
							{userInfo ? (
								<NavDropdown title={userInfo.name} id={userInfo.userName}>
									<NavDropdown.Item as={NavLink} to="/profile">
										<i className="far fa-address-card"></i> Profile
									</NavDropdown.Item>
									<NavDropdown.Item onClick={logoutHandler}>
										<i className="fas fa-sign-out-alt"></i> Logout
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								<Nav.Link as={NavLink} to="/login">
									<i className="fas fa-user"></i> Sign In
								</Nav.Link>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
