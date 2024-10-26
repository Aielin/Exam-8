import Home from './containers/Home/Home.tsx';
import { Route, Routes } from 'react-router-dom';
import AddQuoteForm from './components/AddQuoteForm/AddQuoteForm.tsx';

const App = () => {
  return (

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add-quote" element={<AddQuoteForm/>}/>
        </Routes>
  );
};

export default App;