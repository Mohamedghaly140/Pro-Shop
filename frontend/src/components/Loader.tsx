import { Spinner } from 'react-bootstrap';

const Loader = () => {
	return (
		<Spinner
			animation="border"
			className="m-auto d-block"
			style={{ width: '100px', height: '100px' }}
		>
			<span className="sr-only">Loading...</span>
		</Spinner>
	);
};

export default Loader;
