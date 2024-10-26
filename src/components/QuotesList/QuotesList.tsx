import { useEffect, useState } from 'react';
import axiosApi from '../../axiosAPI.ts';
import EditQuoteForm from '../EditQuoteForm/EditQuoteForm.tsx';
import Categories from '../Categories/Categories.tsx';
import { useNavigate, useParams } from 'react-router-dom';
import './QuotesList.css';


interface Quote {
  id: string;
  category: string;
  author: string;
  text: string;
}

const QuotesList = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [editingQuote, setEditingQuote] = useState<Quote | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();
  const { category } = useParams<{ category: string }>();

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

  useEffect(() => {
    if (category) {
      setSelectedCategory(category.replace(/_/g, ' '));
    } else {
      setSelectedCategory('All');
    }
  }, [category]);

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

  const handleCategorySelect = (selectedCategory: string) => {
    setSelectedCategory(selectedCategory);
    navigate(`/quotes/${category}`);
  };

  const filteredQuotes = selectedCategory === 'All'
    ? quotes
    : quotes.filter((quote) => quote.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="container mt-4">
      <Categories selectedCategory={selectedCategory} onSelectCategory={handleCategorySelect} />
      {editingQuote && (
        <EditQuoteForm quote={editingQuote} onClose={handleCloseEditForm} />
      )}
      <ul className="list-group mt-3">
        {filteredQuotes.map((quote) => (
          <li key={quote.id} className="border border-primary mb-3 p-4 quote-list">
            <strong>{quote.category}:</strong> {quote.text} — <em>{quote.author}</em>
            <button className="btn btn-outline-primary btn-sm float-end ms-2" onClick={() => handleEditClick(quote)}>Edit</button>
            <button className="btn btn-outline-danger btn-sm float-end" onClick={() => handleDeleteClick(quote.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuotesList;
