import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
	Button,
	Row,
	Col,
	ListGroup,
	Image,
	Card,
	Spinner,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, orderActions } from '../redux';
import Loader from '../components/Loader';
import Message from '../components/Message';

const OrderScreen: React.FC = () => {
	const { loading, order, error } = useSelector(
		(state: RootState) => state.orderDetail
	);

	const { id } = useParams<{ id: string }>();

	const dispatch = useDispatch();
	console.log(id);

	useEffect(() => {
		dispatch(orderActions.getOrderById(id));
	}, [id, dispatch]);

	if (loading || !order) {
		return <Loader />;
	}

	const {
		shippingAddress: { address, city, country, postalCode },
		paymentMethod,
		shippingPrice,
		orderItems,
		itemsPrice,
		totalPrice,
		taxPrice,
	} = order;

	return (
		<>
			{error && <Message variant="danger">{error}</Message>}
			<h1>Order {order._id}</h1>
			<Row>
				<Col md={8}>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h2>Shipping</h2>
							<p>
								<strong className="font-weight-bold">Address: </strong>
								{`${address}, ${city}, ${country}, ${postalCode}`}
							</p>
						</ListGroup.Item>
						<ListGroup.Item>
							<h2>Payment Method</h2>
							<p>
								<strong className="font-weight-bold">Method: </strong>
								{paymentMethod}
							</p>
						</ListGroup.Item>
						<ListGroup.Item>
							<h2>Orders</h2>
							{orderItems.length === 0 ? (
								<Message>Orders is Empty</Message>
							) : (
								<ListGroup variant="flush">
									{orderItems.map((item, index) => (
										<ListGroup.Item key={item.product}>
											<Row>
												<Col md={1}>
													<Image
														src={item.image}
														alt={item.name}
														fluid
														rounded
													/>
												</Col>
												<Col>
													<Link to={`/product/${item.product}`}>
														{item.name}
													</Link>
												</Col>
												<Col md={4}>
													{item.qty} <strong>X</strong> ${item.price} = $
													{(item.qty * item.price).toFixed(2)}
												</Col>
											</Row>
										</ListGroup.Item>
									))}
								</ListGroup>
							)}
						</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={4}>
					<Card>
						<ListGroup variant="flush">
							<ListGroup.Item>
								<h2>Order Summery</h2>
							</ListGroup.Item>

							<ListGroup.Item>
								<Row>
									<Col>Items</Col>
									<Col>$ {itemsPrice.toFixed(2)}</Col>
								</Row>
							</ListGroup.Item>

							<ListGroup.Item>
								<Row>
									<Col>Shipping</Col>
									<Col>$ {shippingPrice}</Col>
								</Row>
							</ListGroup.Item>

							<ListGroup.Item>
								<Row>
									<Col>Tax</Col>
									<Col>$ {taxPrice}</Col>
								</Row>
							</ListGroup.Item>

							<ListGroup.Item>
								<Row>
									<Col>Total</Col>
									<Col>$ {totalPrice}</Col>
								</Row>
							</ListGroup.Item>

							<ListGroup.Item>
								{error && <Message variant="danger">{error}</Message>}
							</ListGroup.Item>

							{/* <ListGroup.Item>
								{loading ? (
									<div className="d-flex justify-content-center align-items-center">
										<Spinner animation="border" role="status">
											<span className="sr-only">Loading...</span>
										</Spinner>
									</div>
								) : (
									<Button
										type="button"
										block
										onClick={placeOrderHandler}
										disabled={cartItems.length === 0}
									>
										Place Order
									</Button>
								)}
							</ListGroup.Item> */}
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default OrderScreen;
