

import { useRef } from 'react';
import './App.css'
import Navbar from "./Navbar"
import Home from "./pages/Home"
import Contact from './pages/Contact'
import About from './pages/About'


export default function App() {
  const gamesRef = useRef();
  let component
  switch (window.location.pathname){

    case "/":
      component = <Home/>
      break
    case "/about%20us":
      component = <About/>
      break
    case "/contact%20us":
      component = <Contact/>
      break
  }
  return(
  <>
  <Navbar/>
  <div className="container">{component}</div>
  
  </>
  

  
  
    
  
  );
}





  


