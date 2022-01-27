import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';    
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';



export default function App(){
  return(
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="/Contact" element={<Contact />} />

     

    </Route>
  </Routes>
</BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
