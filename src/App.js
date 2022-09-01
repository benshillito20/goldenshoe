import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Shop from './components/Shop'
import ProductPurchase from './components/ProductPurchase';
import Basket from './components/Basket';
import TrackOrder from './components/TrackOrder';
import Returns from './components/Returns';
import ReturnForm from './components/ReturnForm';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

var shoppingCart = []

function addToCart(Product, size, colour) { 
  shoppingCart.push([Product, size, colour])
  console.log(shoppingCart)
}

function removeVoucher(voucherId){

}

function isVoucherValid(voucherId){

}




function App() {
  const [orders, setOrders] = useState([])
  const [stock, setStock] = useState([])
  const [vouchers, setVouchers] = useState([])
  const [returns, setReturns] = useState([])

  function returnOrder(orderId){
    let returnArray = []
    for (let index = 0; index < orders.length; index++) {
      if(orders[index].orderCode === orderId)
      {
        returnArray.push(orders[index])
      }
    }
    if(returnArray.length > 0){
      return returnArray
    }
    else{
      return ''
    }
  }

  function customerReturn(order, returnMessage){
    let returnObject = {orders:order, message:returnMessage}
    addReturn()
  }

  const getOrders = async() => {
    const ordersFromServer = await fetchOrders()
    setOrders(ordersFromServer)
  }

  useEffect(() => {
    const getOrders = async() => {
      const ordersFromServer = await fetchOrders()
      setOrders(ordersFromServer)
    }
    const getStock = async() => {
      const stockFromServer = await fetchStock()
      setStock(stockFromServer)
    }
    const getVouchers = async() =>{
      const vouchersFromServer = await fetchVouchers()
      setVouchers(vouchersFromServer)

      console.log(vouchers)
    }
    getOrders()
    getStock()
    getVouchers()
  }, [])

  const fetchOrders = async() => {
    const res = await fetch('http://localhost:5000/orders')
    const data = await res.json()
    
    return data
  }
  const fetchStock = async() => {
    const res = await fetch('http://localhost:5000/stock')
    const data = await res.json()
    
    return data
  }
  const fetchVouchers = async() => {
    const res = await fetch('http://localhost:5000/vouchers')
    const data = await res.json()

    return data
  }

  function findOrder(orderId){
    getOrders()
    for (let index = 0; index < orders.length; index++) {
      if(orders[index].orderCode === orderId){
        return true
      }
    }
    return false
  }

  const checkout = async(orders) => {
    let dateObject = new Date()
    let current_date = new Date().toDateString()
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let order_code = (dateObject.getHours() + ":" + dateObject.getMinutes() + "-" + dateObject.getDate() + '-' + dateObject.getMonth() + "-" + dateObject.getFullYear()) + '-'
    for (let index = 0; index < 5; index++) {
      order_code = order_code + characters.charAt(Math.floor(Math.random() * characters.length));
    }
    for (let index = 0; index < orders.length; index++) {
      let tempObject = {name:orders[index][0].name, colour:orders[index][2], size:orders[index][1], orderDate:current_date, orderCode:order_code}
      addOrder(tempObject)
    }
    shoppingCart = []
    getOrders()
  }

  
  const deleteOrder = async(serverId) => {
    await fetch(`http://localhost:5000/orders/${serverId}`, {
      method:'DELETE',
    })

    setOrders(orders.filter((order) => order.id !== serverId))
  }

  const addReturn = async(returnObject) => {
    const res = await fetch('http://localhost:5000/returns',{
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(returnObject)
    })
    const data = await res.json
    setOrders([...orders, data])
  }

  const addOrder = async(order) => {
    const res = await fetch('http://localhost:5000/orders',{
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(order)
    })
    const data = await res.json
    setReturns([...returns, data])
  }


  return (
    <div>
      <Router>
        <Routes>
          <Route path="" element={ <Shop stock={stock}/> }></Route>
          <Route path="/track" element={ <TrackOrder findOrderFunction={returnOrder}/>}></Route>
          <Route path="/returns" element={ <Returns isOrderValidFunction={findOrder}/>}></Route>
          <Route path="/returns/:orderId" element={ <ReturnForm findOrderFunction={returnOrder}/>}></Route>
          <Route path="/product/:productname" element={<ProductPurchase addToCart={addToCart} products={stock}/>}></Route>
          <Route path="/checkout" element={<Basket checkoutFunction={checkout} cart={shoppingCart}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
