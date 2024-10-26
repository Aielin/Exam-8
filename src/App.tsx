import Home from './containers/Home/Home.tsx';
import { Route, Routes } from 'react-router-dom';
import AddQuoteForm from './components/AddQuoteForm/AddQuoteForm.tsx';
import ToolBar from './components/ToolBar/ToolBar.tsx';

const App = () => {
  return (
    <div>
      <ToolBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add-quote" element={<AddQuoteForm/>}/>
      </Routes>
    </div>

  );
};

export default App;