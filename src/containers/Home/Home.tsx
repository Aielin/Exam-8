import QuotesList from '../../components/QuotesList/QuotesList.tsx';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <Link to="/add-quote">Submit new quote</Link>
      <QuotesList/>
    </div>
  );
};

export default Home;