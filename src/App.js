import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Shop from './components/Shop'
import ProductPurchase from './components/ProductPurchase';
import Basket from './components/Basket';

var shoppingCart = []

function addToCart(Product, size, colour) { 
  shoppingCart.push([Product, size, colour])
  console.log(shoppingCart)
}

function removeVoucher(voucherId){

}

function isVoucherValid(voucherId){

}

function addOrder(order){

}

function returnOrder(orderId){

}

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="" element={ <Shop/> }></Route>
          <Route path="/product/:productname" element={<ProductPurchase addToCart={addToCart}/>}></Route>
          <Route path="/checkout" element={<Basket cart={shoppingCart}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
