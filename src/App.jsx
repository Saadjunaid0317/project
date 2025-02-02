import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Component/Home'  
import Menu from './Component/Menu' 
import Info from './Component/Info'  
import About from './Component/About'  
import Contact from './Component/Contact'
import Notfound from './Component/Notfound'  
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() { 

  return (
    <>
      <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Nested Route for About & Info */}
          <Route path="/about" element={<About />}>
            <Route path="info" element={<Info />} />
          </Route>

          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </BrowserRouter>
      
    </>
  )
}

export default App
