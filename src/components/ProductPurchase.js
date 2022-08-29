import {useParams, useNavigate} from 'react-router-dom'
import Products from '../Assets/Products';
import NavBar from './NavBar';
import {useState} from 'react';

function ProductPurchase({addToCart}) {
    const params = useParams()
    const navigate = useNavigate()
    const product = Products.find(findingProduct => findingProduct.name === params.productname)
    const [size, setSize] = useState('6')
    return (
      <div>
        <NavBar/>
        <h1>{product.name}</h1>
        <div>
        <label>Size</label>
        <select id="size" onChange={(e) => setSize(e.target.value)}>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
            <option value={11}>11</option>
            <option value={12}>12</option>
            <option value={13}>13</option>
        </select>
        <label></label>
        </div>
        <button onClick={() => ((addToCart(product, size), navigate("..")))}>Add to cart</button>
      </div>
    );
  }
  
  export default ProductPurchase;
  