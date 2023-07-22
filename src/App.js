import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/header/Navbar';
import MegaRoute from './components/MegaRoute';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <MegaRoute />
    </BrowserRouter>
  );
}

export default App;
