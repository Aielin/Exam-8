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
    <div>
      <h3>Add a Quote</h3>
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <textarea
        placeholder="Quote Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addQuote}>Add Quote</button>
    </div>
  );
};

export default AddQuoteForm;
