import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default function CoffeeChilled({ coffee }) {
	return (
		<Card border='success' style={{ width: '18rem' }}>
			<Card.Img variant='top' src={coffee.image} />
			<Card.Body>
				<Card.Title>{coffee.title}</Card.Title>
				<Card.Text>{coffee.description}</Card.Text>
				<h2>{coffee.ingredients}</h2>
				<Button variant='primary'>Go somewhere</Button>
			</Card.Body>
		</Card>
	)
}
