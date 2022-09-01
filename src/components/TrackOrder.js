import NavBar from './NavBar'
import { useState } from 'react'

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result.toDateString();
  }

function TrackOrder({ findOrderFunction }) {
    const [currentOrder, setCurrentOrder] = useState('')
    const [currentCode, setCurrentCode] = useState('')
    console.log(currentOrder)
    return (
        <div>
            <NavBar></NavBar>
            {
                Array.isArray(currentOrder) === true ? 
                (<div>{currentOrder.map((orderItem) => (<div>{orderItem.name}</div>))}
                Shipping date: {addDays(currentOrder[0].orderDate, 5)}</div>):
                (<div>Please enter an order code.</div>)
            }
            <input onChange={(e) => (setCurrentCode(e.target.value))}></input>
            <button onClick={() => (setCurrentOrder(findOrderFunction(currentCode)))}>Track</button>
        </div>
    );
}

export default TrackOrder;