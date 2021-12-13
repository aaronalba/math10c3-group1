// import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';
import { Routes, Route } from 'react-router-dom';
import About from './screens/About';
import WriteUp from './screens/WriteUp';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/writeup' element={<WriteUp />} />
    </Routes>
  )
}

export default App;
