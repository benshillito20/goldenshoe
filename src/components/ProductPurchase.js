import {useParams, useNavigate} from 'react-router-dom'
import NavBar from './NavBar';
import {useState} from 'react';

function ProductPurchase({addToCart, products}) {
    const params = useParams()
    const navigate = useNavigate()
    const product = products.find(findingProduct => findingProduct.name === params.productname)
    const [size, setSize] = useState('6')
    const [colour, setColour] = useState(product.colours[0][0])
    return (
      <div>
        <NavBar/>
        <h1>{product.name}</h1>
        <div>
          <label>Size</label>
          <select onChange={(e) => setSize(e.target.value)}>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
              <option value={11}>11</option>
              <option value={12}>12</option>
              <option value={13}>13</option>
          </select>
        </div>
        <div>
          <label>Colour</label>
          <select onChange={(e) => setColour(e.target.value)}>
              {product.colours.map((colour) => (
                <option value={colour[0]}>{colour[0]}</option>
              ))}
          </select>
        </div>
        <button onClick={() => ((addToCart(product, size, colour), navigate("..")))}>Add to cart</button>
      </div>
    );
  }
  
  export default ProductPurchase;
  