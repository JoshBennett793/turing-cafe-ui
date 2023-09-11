import './Card.css'

export default function Card({ reservation }) {
  const { name, date, time, number } = reservation;

  return (
    <div className='res-card'>
      <ul>
        <li>{name}</li>
        <li>{date}</li>
        <li>{time}</li>
        <li>{number}</li>
      </ul>
    </div>
  );
}
