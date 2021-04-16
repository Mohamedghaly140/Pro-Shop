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
						SG Couture
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
										<i className="far fa-address-card" /> Profile
									</NavDropdown.Item>
									<NavDropdown.Item onClick={logoutHandler}>
										<i className="fas fa-sign-out-alt" /> Logout
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								<Nav.Link as={NavLink} to="/login">
									<i className="fas fa-user"></i> Sign In
								</Nav.Link>
							)}
							{userInfo && userInfo.isAdmin && (
								<NavDropdown title="Admin" id={userInfo.userName}>
									<NavDropdown.Item as={NavLink} to="/admin/users">
										<i className="fas fa-users" /> Users
									</NavDropdown.Item>
									<NavDropdown.Item as={NavLink} to="/admin/products">
										<i className="fab fa-product-hunt" /> Products
									</NavDropdown.Item>
									<NavDropdown.Item as={NavLink} to="/admin/orders">
										<i className="fab fa-first-order-alt" /> Orders
									</NavDropdown.Item>
								</NavDropdown>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
