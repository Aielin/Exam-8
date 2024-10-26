import { useEffect, useState } from 'react';
import axiosApi from '../../axiosAPI.ts';


interface Quote {
  id: string;
  category: string;
  author: string;
  text: string;
}

const QuotesList = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);

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

  return (
    <div>
      <h2>Quotes List</h2>
      <ul>
        {quotes.map((quote) => (
          <li key={quote.id}>
            <strong>{quote.category}:</strong> {quote.text} — <em>{quote.author}</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuotesList;
