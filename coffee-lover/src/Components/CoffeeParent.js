import { useState, useEffect } from 'react'
import { getCoffee } from './api'
import Row from 'react-bootstrap/Row'
import CoffeeChilled from './CoffeeChilled'

export default function CoffeeParent() {
	const [coffee, setCoffee] = useState([]) // Initialize coffee as an empty array

	useEffect(() => {
		getCoffee().then((data) => {
			console.log(data)
			const coffeeArr = data.map((obj) => {
				return obj.title
			})

			setCoffee(coffeeArr)
		})
	}, [])

	return (
		<Row>
			{coffee.map((item) => {
				return <CoffeeChilled key={item} coffee={item}></CoffeeChilled>
			})}
		</Row>
	)
}
