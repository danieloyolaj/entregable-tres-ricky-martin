import React from 'react'
import useFetch from '../hooks/useFetch'

const CardResident = ({url}) => {
  const resident = useFetch(url)
  
  //Dead/Alive/Unknown colors
  let myColor = 'Unknown'
  if(resident?.status === 'Alive'){
    myColor = 'Alive'
  }
  else if(resident?.status === 'Dead'){
    myColor = 'Dead'
  }

  return (
    <div className="resident-container">
    
    <div className='grid-container'>
      <div className="grid-item">

        <div className='card-header'>
          <img className='resident-image' src={resident?.image} alt={`image of ${resident?.name}`} />
          <div className={myColor}>
            <span>{resident?.status}</span>
          </div>
        </div>

        <div className="card-body">
          <h3 className='resident-data'>{resident?.name}</h3>
          
          <span className='small-caps'>SPECIES </span>
          <p className='resident-data'>{resident?.species}</p>
          <span className='small-caps'>ORIGIN </span>
          <p className='resident-data'>{resident?.origin.name}</p>
          <span className='small-caps'>EPISODES WHERE APPEARS</span>
          <p className='resident-data'>{resident?.episode.length}</p>
        </div>

      </div>
    </div>
    
    </div>
  )
}

export default CardResident