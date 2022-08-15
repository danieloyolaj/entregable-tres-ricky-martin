import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import LocationInfo from './components/LocationInfo'

function App() {

  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    let numberLocation
    if(searchInput === ''){
      numberLocation = Math.ceil(Math.random() * (126 - 1) + 1) //Returns a random number between 1 and 126 inclusive
    }else{
      numberLocation = searchInput
    }
    
    const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`
    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))
  }, [searchInput])
  
  
  const handleSubmit = e => {
    e.preventDefault()
    setSearchInput(e.target.search.value)
  }

  return (
    <div className="App">
      {/* <h1>Riky & Martin</h1> */}
      
      <LocationInfo location={location} />
      
      <form onSubmit={handleSubmit} >
        <input id='search' placeholder=' Type a location id' type="text" />
        <button>Search</button>
      </form>
      <div className="title">
        <h1>Residents</h1>
      </div>
      
      <div>
        {
          location?.residents.map(url => (
            <CardResident 
              key={url}
              url={url}
            />
          ))
        }
      </div>
      
      <footer>
      <p>Rick & Morty</p>
      <p>Made with &hearts; in Academlo</p>
    </footer>
    </div>
  )
}

export default App
