import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Home } from './components';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
