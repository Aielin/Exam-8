import QuotesList from '../../components/QuotesList/QuotesList.tsx';
import AddQuoteForm from '../../components/AddQuoteForm/AddQuoteForm.tsx';


const Home = () => {
  return (
    <div className="container">
      <h1>Quotes App</h1>
      <AddQuoteForm/>
      <QuotesList/>
    </div>
  );
};

export default Home;