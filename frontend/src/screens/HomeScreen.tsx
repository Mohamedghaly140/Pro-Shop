import { Col, Row } from 'react-bootstrap';
import { Product as ProductItem } from '../models/Product';
import products from '../products';
import Product from '../components/Product';

const HomeScreen: React.FC = () => {
	return (
		<>
			<h1>Latest Products</h1>
			<Row>
				{products.map((product: ProductItem) => {
					return (
						<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
							<Product product={product} />
						</Col>
					);
				})}
			</Row>
		</>
	);
};

export default HomeScreen;
