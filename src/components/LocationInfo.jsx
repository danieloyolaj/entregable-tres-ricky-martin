import React from 'react'

const LocationInfo = ({location}) => {
  return (
    <div className="container">
      <header>
        <img className='img-header' src="../src/assets/rick-morty-header.jpg" alt="" />
      </header>
      <article>
          <h2>Name: {location?.name}</h2>

          <div className="location-info">

            <div className="location-info-type">
              <span className='strong'>Type: </span>
              <p>{location?.type}</p>
            </div>

            <div className="location-info-dimension">
              <span className='strong'>Dimension: </span>
              <p>{location?.dimension}</p>
            </div>

            <div className="location-info-population">
              <span className='strong'>Population: </span>
              <p>{location?.residents.length}</p>
            </div>
          </div>
      </article>
    </div>
  )
}

export default LocationInfo