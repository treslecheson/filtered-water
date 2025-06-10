import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import CleanWater from './CleanWater';
import DirtyWater from './DirtyWater';


const header: string[] = ["Mission", "Instructions"]
const cardTitle: string[] = ["Filter the water", "Take a look around"]
const cardDescription: string[] = ["We just got a big drum of water shipped to us and we need you to filter it. We will test to make sure you actually did filtering. Then you can get paid for your work. In water.", "The water is dirty. What is even in water? You must find out. We will give you a list of everything in the dirty water and you must click on everything that supposed to be there."]

const cardButton: string[] = ["Begin", "Next"]
const Game = () => {
	const [index, setIndex] = useState(0)

	const [checkedSalt, setCheckedSalt] = useState(false)
	const handleCheckedSalt = () => setCheckedSalt(!checkedSalt);

	const [checkedUranium, setCheckedUranium] = useState(false)
	const handleCheckedUranium = () => setCheckedUranium(!checkedUranium);

	const [checkedDirt, setCheckedDirt] = useState(false)
	const handleCheckedDirt = () => setCheckedDirt(!checkedDirt);

	const [checkedCalcite, setCheckedCalcite] = useState(false)
	const handleCheckedCalcite = () => setCheckedCalcite(!checkedCalcite);

	const [checkedRubber, setCheckedRubber] = useState(false)
	const handleCheckedRubber = () => setCheckedRubber(!checkedRubber);

	const handleSubmit = () => {
		if (checkedSalt == true && checkedCalcite == true && checkedRubber == true && checkedUranium != true && checkedDirt != true) {
			setIndex(index + 1)
		} else {
			setIndex(index + 2)
		}
	}

	if (index < 2) {
		return (

			<>

				<DirtyWater />


				<section className='mission'>
					<div className='card'>
						<Card.Header>{header[index]}</Card.Header>
						<Card.Body>
							<Card.Title>{cardTitle[index]}</Card.Title>
							<Card.Text>
								{cardDescription[index]}
							</Card.Text>
							<Button variant="primary" onClick={() => setIndex(index + 1)}>{cardButton[index]}</Button>
						</Card.Body>
					</div>
				</section>
			</>

		)
	} else if (index == 2) {

		return (
			<>
				<DirtyWater />

				<div className='mission'>
					<div className='card'>
						<div className='checklist-card'>
							<h1>Water Elements</h1>
							<p>Check what should stay</p>
							<label>
								<input type='checkbox' checked={checkedSalt} onChange={handleCheckedSalt} />
								Salt
							</label>

							<label>
								<input type='checkbox' checked={checkedUranium} onChange={handleCheckedUranium} />
								Uranium
							</label>
							<label>
								<input type='checkbox' checked={checkedDirt} onChange={handleCheckedDirt} />
								Dirt
							</label>
							<label>
								<input type='checkbox' checked={checkedCalcite} onChange={handleCheckedCalcite} />
								Calcite
							</label>
							<label>
								<input type='checkbox' checked={checkedRubber} onChange={handleCheckedRubber} />
								Rubber
							</label>

							<Button onClick={handleSubmit} variant="primary">Submit</Button>
						</div>
					</div>
				</div>
			</>
		)
	} else if (index == 3) {

		return (

			<CleanWater />
		)
	} else {
		return (
			<>
				<DirtyWater />
				<div className='mission'>
					<div className='end-card'>
						<h1>Water is still dirty</h1>
					</div>
				</div>
			</>

		)
	}

}
export default Game;
