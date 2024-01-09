import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Link to='/note-list' target='_blank'>
        <button>Note</button>
      </Link>

      <Link to='/launcher' target='_blank'>
        <button>Quiz</button>
      </Link>

      <Link to='/weather' target='_blank'>
        <button>Weather</button>
      </Link>
    </div>
  );
}
