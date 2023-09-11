import './Form.css';
import { useState } from 'react';

export default function Form({ updateReservations }) {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    number: ''
  });

  const handleChange = e => {
    const { name, value, type } = e.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === 'number' ? parseInt(value) : value
      };
    });
  };

  const submitForm = e => {
    e.preventDefault();
    updateReservations(formData);
  };

  return (
    <form className='res-form' onSubmit={submitForm}>
      <input
        type='text'
        name='name'
        id='name'
        placeholder='Name'
        onChange={handleChange}
        value={formData.name}
      />
      <input
        type='text'
        name='date'
        id='date'
        placeholder='Date (mm/dd)'
        onChange={handleChange}
        value={formData.date}
      />
      <input
        type='text'
        name='time'
        id='time'
        placeholder='Time'
        onChange={handleChange}
        value={formData.time}
      />
      <input
        type='number'
        name='number'
        id='number'
        placeholder='Number of guests'
        onChange={handleChange}
        value={formData.number}
      />
      <button type='submit' className='submit-btn'>
        Make Reservation
      </button>
    </form>
  );
}
