import { useState } from 'react';
import axiosApi from '../../axiosAPI.ts';


const AddQuoteForm = () => {
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  const addQuote = async () => {
    try {
      const newQuote = { category, author, text };
      await axiosApi.post('/quotes.json', newQuote);

      setCategory('');
      setAuthor('');
      setText('');
      alert('Quote added successfully!');
    } catch (error) {
      console.error('Error adding quote:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="text-success">Add a Quote</h3>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">Category:</label>
        <select
          id="category"
          className="form-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Famous people">Famous people</option>
          <option value="Motivational">Motivational</option>
          <option value="Star Wars">Star Wars</option>
          <option value="Saying">Saying</option>
          <option value="Humour">Humour</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="author" className="form-label">Author:</label>
        <input
          type="text"
          id="author"
          className="form-control"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="text" className="form-label">Quote Text:</label>
        <textarea
          id="text"
          className="form-control"
          placeholder="Quote Text"
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={addQuote}>Add Quote</button>
    </div>
  );
};

export default AddQuoteForm;
