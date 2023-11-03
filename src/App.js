import { useState } from 'react';
import './App.css';
import { Form } from './Components/Form';
import Location from './Components/ShowLocation';
import Popup from './Components/Popup';
import axios from 'axios';

function App() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const fetchData = async (postalCode) => {
    try {
      setError(null); // Clear any previous errors
      setLocation(null); // Clear the previous location

      setLoading(true);

      const response = await axios.get(`https://api.zippopotam.us/in/${postalCode}`);
      const responseData = response.data;
      console.log(responseData);

      if (responseData && responseData.places) {
        setLocation({
          country: responseData.country,
          state: responseData.state,
          places: responseData.places,
        });
      } else {
        setError(new Error('Invalid API Response'));
        setShowPopup(true);
      }
    } catch (error) {
      console.log(error);
      setError(error);
      setShowPopup(true);
    } finally {
      setLoading(false);
    }
  }

  const Reset = () => {
    setLocation(null);
    setError(null);
  }

  const closePopup = () => {
    setShowPopup(false);
  }

  return (
    <div className="App">
      <Form onSearch={fetchData} />
      {error ? (
        <>
          {showPopup && (
            <Popup message={error ? error.message : "An error occured"} onClose={closePopup} />
          )}
        </>
      ) : (
        <Location location={location} loading={loading} onClear={Reset} />
      )}
    </div>
  );
}

export default App;
