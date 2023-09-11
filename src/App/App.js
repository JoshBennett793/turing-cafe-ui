import Form from '../components/Form/Form';
import Reservations from '../components/Reservations/Reservations';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  // temp fix to allow manually added reservations until POST is implemented
  const [initialReservations, setInitialReservations] = useState([]);
  const [manualReservations, setManualReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {

      try {
        const response = await fetch('http://localhost:3001/api/v1/reservations');
        const data = await response.json();
        setInitialReservations(data);
      } catch (error) {
        console.error('Error fetching reservations: ', error)
      }
    };

    fetchReservations();
  }, []);

  const updateReservations = newRes => {
    setManualReservations(prevReservations => {
      return [...prevReservations, newRes];
    });
  };

  const combinedReservations = [...initialReservations, ...manualReservations];

  return (
    <div className='App'>
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <Form updateReservations={updateReservations} />
      <Reservations reservations={combinedReservations} />
    </div>
  );
}

export default App;
