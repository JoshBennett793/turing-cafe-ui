import Reservations from '../components/Reservations/Reservations';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      const response = await fetch('http://localhost:3001/api/v1/reservations');
      const data = await response.json();
      setReservations(data);
    };

    fetchReservations();
  }, []);

  return (
    <div className='App'>
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'></div>
      <div className='resy-container'>
        <Reservations reservations={reservations} />
      </div>
    </div>
  );
}

export default App;
