import React from 'react'

const Location = ({ location, loading, onClear }) => {
  if (loading) {
    return <div className='load-container'><div className='load'></div></div>
  }
  
  if (!location) {
    return null;
  }

  return (
    <>
      <div className='container'>
        {
          location.places.map((place, index) => (
            <div key={index} className="card">
              <h4>Location Information</h4>
              <p>Country: {location.country}</p>
              <p>State: {place['state']}</p>
              <p>Place Name: {place['place name']}</p>
            </div>
          ))
        }
      </div>
      <div className='btn-container'>
        <button onClick={onClear} className='clear-btn'><i className='bx bx-trash'></i>Clear</button>
      </div>
    </>
  )
}

export default Location