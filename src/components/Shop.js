import NavBar from './NavBar'
import ShopItem from './ShopItem'
import { useState } from 'react'

function Shop({stock}) {
  const[products, setProducts] = useState(stock)
    return (
      <div>
        <NavBar></NavBar>
        {
          stock.map((product) => (
            <ShopItem Product={product}/>
          ))
        }
      </div>
    );
  }
  
export default Shop;