import { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    number: 0
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

  return (
    <form>
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
    </form>
  );
}
