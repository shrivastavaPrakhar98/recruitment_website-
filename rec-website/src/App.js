import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './component/Main';
import Services from './component/Services';
import Navbar from './component/Navbar';
import Placement from './component/Placement';
import Blog from './component/Blog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/services' element={<Services />} />
          <Route path='/page2' element={<Placement />} />
          <Route path='/blog' element={<Blog/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App; 
