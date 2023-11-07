import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import Detail from '../src/pages/Detail';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
