import Home from './containers/Home/Home.tsx';
import { Route, Routes } from 'react-router-dom';
import AddQuoteForm from './components/AddQuoteForm/AddQuoteForm.tsx';
import ToolBar from './components/ToolBar/ToolBar.tsx';
import QuotesList from './components/QuotesList/QuotesList.tsx';
import './App.css';

const App = () => {
  return (
    <div>
      <ToolBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/quotes" element={<QuotesList />} />
        <Route path="/quotes/:category" element={<QuotesList />} />
        <Route path="/add-quote" element={<AddQuoteForm/>}/>
      </Routes>
    </div>

  );
};

export default App;