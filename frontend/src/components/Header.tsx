import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
	return (
		<header>
			<Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
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
							<Nav.Link as={NavLink} to="/login">
								<i className="fas fa-user"></i> Sign In
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
