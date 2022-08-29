import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Shop from './components/Shop'
import ProductPurchase from './components/ProductPurchase';


var shoppingCart = []

function addToCart(Product, size) { 
  shoppingCart.push([Product, size])
  console.log(shoppingCart)
}

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="" element={ <Shop/> }></Route>
          <Route path="/product/:productname" element={<ProductPurchase addToCart={addToCart}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
