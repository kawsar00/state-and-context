import React, { useContext, useState, useEffect } from 'react';
import { categoryContext } from '../../App';
import CatagoryDetails from '../CatagoryDetails/CatagoryDetails';

const allProducts = [
  {name:'Samsung', category:'laptop'}, {name:'Lenovo', category:'laptop'},
  {name:'Dell', category:'laptop'},
  
  {name:'Samsung', category:'mobile'}, {name:'Vivo', category:'mobile'},{name:'Oppo', category:'mobile'}, 

  {name:'Sony', category:'camera'}, {name:'Cannon', category:'camera'},{name:'Samsung', category:'camera'}, 
]

const Catagories = () => {
  const [category] = useContext(categoryContext)

  const [product, setProduct] = useState([])
  useEffect(() => {
    console.log({category})
    const matchProduct = allProducts.filter(pd => pd.category.toLowerCase() === category.toLowerCase())
    setProduct(matchProduct)
  }, [category])

  return (
    <div>
      <h2>Selected catagories: {category}</h2>
      {
        product.map(pd => <CatagoryDetails product={pd}></CatagoryDetails>)
      }
    </div>
  );
};

export default Catagories;