import React, { useState } from 'react'

export const Form = ({ onSearch }) => {
  const [postalCode, setPostalCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(postalCode)
  }

  return (
    <div className='form-content'>
      <form onSubmit={handleSubmit} className='input-form'>
        <input type='text' placeholder='Enter a zip code here...' value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
        <button type='submit' className='btn'><i className='bx bx-search'></i></button>
      </form>
    </div>
  )
}
