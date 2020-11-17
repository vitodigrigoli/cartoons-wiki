import React, {useState, useEffect} from 'react'
import './App.css';
import 'bulma/css/bulma.css'
import CardList from "./components/CardList";
import Search from "./components/Search";

function App() {

	const baseURL = 'https://sampleapis.com/cartoons/api';

	const [ URL, setURL ] = useState({
		cartoons2D: `${baseURL}/cartoons2D`,
		cartoons3D: `${baseURL}/cartoons3D`
	})

	const [isLoading, setLoading] = useState( false )

	const [data2D, setData2D] = useState([] )
	const [data3D, setData3D] = useState([] )

	useEffect(  () => {
		console.log('use effect 2d')
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



	const handleClick = (event) => {
		event.persist()
		setLoading(true)
		const url = `${baseURL}?year=${event.target.value}`
		console.log( url)
	}

	return (
		<div className="App container is-fluid">
			<Search/>
			<CardList title="Cartoons 2D"  data={data2D} handleClick={handleClick} isLoading={isLoading}/>
			<CardList title="Cartoons 3D"  data={data3D} handleClick={handleClick} isLoading={isLoading}/>
		</div>
	);
}

export default App;