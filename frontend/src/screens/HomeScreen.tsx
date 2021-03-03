import { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import { Product as ProductItem } from '../models/Product';
import Product from '../components/Product';

const HomeScreen: React.FC = () => {
	const [products, setProducts] = useState<ProductItem[]>([]);

	useEffect(() => {
		(async () => {
			const { data } = await axios.get<ProductItem[]>('/api/products');

			setProducts(data);
		})();
	}, []);

	return (
		<>
			<h1>Latest Products</h1>
			<Row>
				{products.map(product => {
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
