import React from 'react';
import './App.css';
import { BrowserRouter as Router , Routes, Route } from "react-router-dom"
import Menu from './components/Menu';
import Docs from './components/Docs';
import Tutorial from './components/Tutorial';
import Commutity from './components/Community';
import Errorpage from './components/Errorpage';

function App() {

  return (

    <Router>
        <Menu/>
          <Routes>
              <Route path="/" element={<Docs/>}/>
              <Route path="/tutorial"  element={<Tutorial/>}/>
              <Route path="/community"  element={<Commutity/>}/>
              <Route path="*" element={<Errorpage/>}/>          
          </Routes>
     </Router>
  
  )
}

export default App 
