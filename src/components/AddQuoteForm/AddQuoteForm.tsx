import { useState } from 'react';
import axiosApi from '../../axiosAPI.ts';


const AddQuoteForm = () => {
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  const categories: string[] = ['Star Wars', 'Famous people', 'Saying', 'Humour', 'Motivational'];

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
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
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
