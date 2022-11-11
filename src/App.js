import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./Components/pages/Home"
import About from "./Components/pages/About"
import Contact from "./Components/pages/Contact"
import Product from "./Components/pages/Product"
import Navbar from './Components/Navbar';
import Features from './Components/pages/Features';
import New from "./Components/pages/New";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route to path='/About' element={<About/>}/>
        <Route to path='/Contact' element={<Contact/>}/>
        <Route path='/Product/' element={<Product/>}>
        <Route path='Feature' element={<Features/>}/>
        <Route path='New' element={<New/>}/>
        </Route>
    
    
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
