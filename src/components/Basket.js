import NavBar from "./NavBar";
import {useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'

function Basket({checkoutFunction, findVoucher, cart}) {
    const navigate = useNavigate()
    const [validVouceher, setValidVoucher] = useState(false)
    const [totalCost, setTotalCost] = useState(getTotalCost())
    const [voucherCode, setVoucherCode] = useState('')
    
    function AddVoucher(){
        return false
    }
    function getTotalCost()
    {
        let total = 0
        for (let index = 0; index < cart.length; index++) {
            total = total + cart[index][0].cost
        }
        return total
    }

    return (
        <div>
            <NavBar/>
            {cart.map((product) => (
                <div>
                    Product: {product[0].name} Size: {product[1]} Colour: {product[2]}
                </div>
            ))}
            <div>£{parseFloat(totalCost).toFixed(2)}</div>
            <div>
                <label>Voucher Code:</label>
                <input></input>
                <button>Redeem</button>
            </div>
            <button onClick={() => (checkoutFunction(cart),navigate(".."))}>Checkout</button>
        </div>
    );
}
    
export default Basket;