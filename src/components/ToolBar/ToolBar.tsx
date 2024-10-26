import { Link } from 'react-router-dom';

const ToolBar = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid black' }}>
      <h3>Quotes Central</h3>
      <nav>
        <Link to="/" style={{ marginRight: '10px' }}>Quotes</Link>
        <Link to="/add-quote">Submit new quote</Link>
      </nav>
    </div>
  );
};

export default ToolBar;