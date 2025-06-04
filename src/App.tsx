import './App.css'
import LiquidChrome from './blocks/Backgrounds/LiquidChrome/LiquidChrome'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


const mission: string = "Mission"
const startCardTitle: string = "Filter the water"
const startCardDescription: string = "There is water that needs to be filtered."
const startCardButton: string = "Begin"

function App() {

	return (
		<>
			<div className='background'>
				<div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
					<LiquidChrome
						baseColor={[0.44, 0.4, 0.29]}
						speed={0.3}
						amplitude={0.6}
						interactive={true}
					/>
				</div>
			</div>

			<section className='mission'>
				<div className='card'>
					<Card.Header>{mission}</Card.Header>
					<Card.Body>
						<Card.Title>{startCardTitle}</Card.Title>
						<Card.Text>
							{startCardDescription}
						</Card.Text>
						<Button variant="primary">{startCardButton}</Button>
					</Card.Body>
				</div>
			</section>



		</>
	)
}

export default App
