import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Shipment from './Components/Shipment/Shipment';
import Header from './Components/Header/Header';
import { createContext } from 'react';


export const categoryContext = createContext()

function App() {
  const [category, setCategory] = useState('Laptop')
  return (
    <categoryContext.Provider value={[category, setCategory]}>
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
    </categoryContext.Provider>
  );
}

export default App;
