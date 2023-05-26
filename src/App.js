import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import Blog from './Components/Blog';

function App() {
  return (
    <div className="App">
      
      
      <Navbar/>
      <Routes>
        <Route path= '/' element = {<Home/>}></Route>
        <Route path='/blog' element ={<Blog/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
