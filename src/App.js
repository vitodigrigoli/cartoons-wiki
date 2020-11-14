import React, {useState, useEffect} from 'react'
import './App.css';
import 'bulma/css/bulma.css'
import CardList from "./components/CardList";
import Search from "./components/Search";
import axios from "axios";

function App() {

  const baseURL = 'https://sampleapis.com/cartoons/api/cartoons2D';
  const [data, setData] = useState( [] )
  const [isLoading, setLoading] = useState( false )

  async function fetchData( url) {
    const result = await axios( url)
    setData( result.data )
    setLoading(false)
  }
  useEffect( () => {
    setLoading(true)
    fetchData(baseURL)
  }, [] )
  const handleClick = (event) => {
    event.persist()
    setLoading(true)
    const url = `${baseURL}?year=${event.target.value}`
    console.log( url)
    fetchData(url)
  }

  return (
    <div className="App container is-fluid">
      <Search/>
      <CardList data={data} handleClick={handleClick} isLoading={isLoading}/>
    </div>
  );
}

export default App;