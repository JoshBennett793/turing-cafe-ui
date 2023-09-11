import './Card.css'

export default function Card({ reservation }) {
  const { name, date, time, number } = reservation;

  return (
    <div className='res-card'>
      <ul>
        <li>{name}</li>
        <li>{date}</li>
        <li>{time} pm</li>
        <li>Number of guests: {number}</li>
      </ul>
    </div>
  );
}
