import { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    number: 0
  });

  return (
    <form>
      <input type='text' name='name' id='name' placeholder='Name' />
      <input type='text' name='date' id='date' placeholder='Date (mm/dd)' />
      <input type='text' name='time' id='time' placeholder='Time' />
      <input type='number' name='number' id='number' placeholder='Number of guests' />
    </form>
  );
}
