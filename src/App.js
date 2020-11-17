import React, {useState, useEffect} from 'react'
import './App.css';
import 'bulma/css/bulma.css'
import CardList from "./components/CardList";
import Search from "./components/Search";

function App() {

	const baseURL = 'https://sampleapis.com/cartoons/api';

	const firstUpper = (str) => str.charAt(0).toUpperCase() + str.slice(1)
	const capitalize = (str) => str.split(' ').map(firstUpper).join(' ')

	const [ URL, setURL ] = useState({
		cartoons2D: `${baseURL}/cartoons2D`,
		cartoons3D: `${baseURL}/cartoons3D`
	})
	const [formValue, setFormValue] = useState( {
		field: 'year',
		value: ''
	})

	const handleChange = (event) => {
		setFormValue({
			...formValue,
			[event.target.name]: event.target.value
		})
	}
	const handleSubmit = (event) => {
		event.preventDefault()
		event.persist()
		const value = capitalize(formValue.value)

		setURL({

			cartoons2D: `${baseURL}/cartoons2D?${formValue.field}=${value}`,
			cartoons3D: `${baseURL}/cartoons3D?${formValue.field}=${value}`,
		})
		console.log(`${baseURL}/cartoons2D?${formValue.field}=${value}`)
	}
	const handleReset = () =>{
		setURL({
			cartoons2D: `${baseURL}/cartoons2D`,
			cartoons3D: `${baseURL}/cartoons3D`
		})
		setFormValue({
			...formValue,
			value: ''
		})
	}
	const handleClick = (event) => {
		event.persist()

		setURL({
			cartoons2D: `${baseURL}/cartoons2D?${event.target.name}=${event.target.value}`,
			cartoons3D: `${baseURL}/cartoons3D?${event.target.name}=${event.target.value}`,
		})
	}

	const [isLoading, setLoading] = useState( false )
	const [data2D, setData2D] = useState([] )
	const [data3D, setData3D] = useState([] )

	useEffect(  () => {
		console.log('use effect 2d')
		console.log(URL.cartoons2D )
		setLoading(true)

		async function fetchData(){
			return await fetch( URL.cartoons2D ).then( response => response.json())
		}

		fetchData().then( results => {
			setData2D( [...results] )
			setLoading(false)
		} )

	}, [ URL.cartoons2D ] )
	useEffect(  () => {
		console.log('use effect 3d')
		setLoading(true)

		async function fetchData(){
			return await fetch( URL.cartoons3D ).then( response => response.json())
		}

		fetchData().then( results => {
			setData3D( [...results] )
			setLoading(false)
		} )

	}, [ URL.cartoons3D ] )

	return (
		<div className="App container">
			<Search handleChange={handleChange} handleSubmit={handleSubmit} handleReset={handleReset} field={formValue.field} value={formValue.value}/>
			<CardList title="Cartoons 2D"  data={data2D} handleClick={handleClick} isLoading={isLoading}/>
			<CardList title="Cartoons 3D"  data={data3D} handleClick={handleClick} isLoading={isLoading}/>
		</div>
	);
}

export default App;