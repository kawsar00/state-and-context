import React from 'react';
import Catagories from '../Catagories/Catagories';
import { useContext } from 'react';
import { categoryContext } from '../../App';

const Home = () => {
  const category = useContext(categoryContext)
  return (
    <div>
      <h1>This is home: {category}</h1>
      <Catagories></Catagories>
    </div>
  );
};

export default Home;