import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import RegisterScreen from './screens/RegisterScreen';

const App: React.FC = () => {
	return (
		<Router>
			<Header />
			<main className="py-3">
				<Container>
					<Route path="/product/:id" component={ProductScreen} />
					<Route path="/shipping" component={ShippingScreen} />
					<Route path="/register" component={RegisterScreen} />
					<Route path="/profile" component={ProfileScreen} />
					<Route path="/cart/:id?" component={CartScreen} />
					<Route path="/login" component={LoginScreen} />
					<Route path="/" component={HomeScreen} exact />
				</Container>
			</main>
			<Footer />
		</Router>
	);
};

export default App;
