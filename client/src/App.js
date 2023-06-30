
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;