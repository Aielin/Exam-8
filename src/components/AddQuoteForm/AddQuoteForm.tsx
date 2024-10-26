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
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="Famous people">Famous people</option>
        <option value="Motivational">Motivational</option>
        <option value="Star Wars">Star Wars</option>
        <option value="Saying">Saying</option>
        <option value="Humour">Humour</option>
      </select>
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
