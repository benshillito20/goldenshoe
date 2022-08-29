import NavBar from './NavBar'
import ShopItem from './ShopItem'
import Products from '../Assets/Products'
import { useState, useEffect } from 'react'

function Shop() {
  const[products, setProducts] = useState(Products)
    return (
      <div>
        <NavBar></NavBar>
        {
          products.map((product) => (
            <ShopItem Product={product}/>
          ))
        }
      </div>
    );
  }
  
export default Shop;