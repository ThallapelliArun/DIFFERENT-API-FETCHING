
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './Components/Products';
import Recipe from './Components/Recipe';
import Country from './Components/Country';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Products/>}/>
        <Route path="/recipe" element={<Recipe/>}/>
        <Route path="/country" element={<Country/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
