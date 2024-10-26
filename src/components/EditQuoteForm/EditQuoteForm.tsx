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
    <div className="container mt-4">
      <h2>Edit Quote</h2>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">Category:</label>
        <input
          type="text"
          className="form-control"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="author" className="form-label">Author:</label>
        <input
          type="text"
          className="form-control"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="text" className="form-label">Quote Text:</label>
        <textarea
          className="form-control"
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button className="btn btn-primary me-2" onClick={handleEditQuote}>Save</button>
      <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EditQuoteForm;