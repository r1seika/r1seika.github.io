import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import Detail from '../src/pages/Detail';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
