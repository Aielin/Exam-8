import { useEffect, useState } from 'react';
import axiosApi from '../../axiosAPI.ts';
import EditQuoteForm from '../EditQuoteForm/EditQuoteForm.tsx';


interface Quote {
  id: string;
  category: string;
  author: string;
  text: string;
}

const QuotesList = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [editingQuote, setEditingQuote] = useState<Quote | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosApi.get('/quotes.json');
        const data = response.data;

        const fetchedQuotes: Quote[] = data
          ? Object.entries(data).map(([id, quoteData]) => {
            const quote = quoteData as Omit<Quote, 'id'>;
            return { id, ...quote };
          })
          : [];

        setQuotes(fetchedQuotes);
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    })();
  }, []);

  const handleDeleteClick = async (id: string) => {
    try {
      await axiosApi.delete(`/quotes/${id}.json`);
      setQuotes(prevQuotes => prevQuotes.filter(quote => quote.id !== id));
    } catch (error) {
      console.error('Error deleting quote:', error);
    }
  };

  const handleEditClick = (quote: Quote) => {
    setEditingQuote(quote);
  };

  const handleCloseEditForm = () => {
    setEditingQuote(null);
  };

  return (
    <div>
      <h2>Quotes List</h2>
      {editingQuote && (
        <EditQuoteForm quote={editingQuote} onClose={handleCloseEditForm} />
      )}
      <ul>
        {quotes.map((quote) => (
          <li key={quote.id}>
            <strong>{quote.category}:</strong> {quote.text} — <em>{quote.author}</em>
            <button onClick={() => handleEditClick(quote)}>Edit</button>
            <button onClick={() => handleDeleteClick(quote.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuotesList;
