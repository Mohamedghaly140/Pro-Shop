import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import {
	Row,
	Col,
	Image,
	Card,
	Button,
	Spinner,
	ListGroup,
} from 'react-bootstrap';
import Rating from '../components/Rating';
import { Product } from '../models/Product';

const ProductScreen = () => {
	const { id } = useParams<{ id: string }>();

	const [product, setProduct] = useState<Product>();

	useEffect(() => {
		(async () => {
			const { data } = await axios.get<Product>(`/api/products/${id}`);

			setProduct(data);
		})();
	}, [id]);

	if (!product) {
		return (
			<div className="vh-100 d-flex justify-content-center align-items-center">
				<Spinner animation="border" />
			</div>
		);
	}

	return (
		<>
			<Link className="btn btn-light my-3" to="/">
				Go Back
			</Link>
			<Row>
				<Col md={6}>
					<Image src={product.image} alt={product.name} fluid />
				</Col>
				<Col md={3}>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h3>{product.name}</h3>
						</ListGroup.Item>
						<ListGroup.Item>
							<Rating
								value={product.rating}
								text={`${product.numReviews} reviews`}
							/>
						</ListGroup.Item>
						<ListGroup.Item>Price: ${product.price}</ListGroup.Item>
						<ListGroup.Item>Description: ${product.description}</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={3}>
					<Card>
						<ListGroup variant="flush">
							<ListGroup.Item>
								<Row>
									<Col>Price:</Col>
									<Col>
										<strong>${product.price}</strong>
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Status:</Col>
									<Col>
										{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Button
									block
									variant="dark"
									disabled={product.countInStock === 0}
								>
									Add to Cart
								</Button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default ProductScreen;
