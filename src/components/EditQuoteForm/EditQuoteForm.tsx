import React, { useState } from 'react';
import axiosApi from '../../axiosAPI.ts';

interface EditQuoteFormProps {
  quote: {
    id: string;
    category: string;
    author: string;
    text: string;
  };
  onClose: () => void;
}

const EditQuoteForm: React.FC<EditQuoteFormProps> = ({ quote, onClose }) => {
  const [category, setCategory] = useState(quote.category);
  const [author, setAuthor] = useState(quote.author);
  const [text, setText] = useState(quote.text);

  const handleEditQuote = async () => {
    try {
      await axiosApi.put(`/quotes/${quote.id}.json`, { category, author, text });
      onClose();
    } catch (error) {
      console.error('Error updating quote:', error);
    }
  };

  return (
    <div>
      <h2>Edit Quote</h2>
      <div>
        <label>Category:</label>
        <input value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>
      <div>
        <label>Author:</label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <div>
        <label>Quote Text:</label>
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <button onClick={handleEditQuote}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EditQuoteForm;