import React, { useContext } from 'react';
import { categoryContext } from '../../App';


const CatagoryDetails = (props) => {
  const { name, category } = props.product
  return (
    <div>
      <h4>This is catagories details: {category}</h4>
      <p>Selected Product: {name}</p>
    </div>
  );
};

export default CatagoryDetails;