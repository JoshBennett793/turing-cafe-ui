import './Reservations.css';
import Card from '../Card/Card';

export default function Reservations({ reservations }) {
  const cards = reservations.map(res => {
    return <Card reservation={res} key={res.id} />;
  });

  return <div className='resy-container'>{cards}</div>;
}
