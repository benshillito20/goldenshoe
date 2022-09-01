import NavBar from './NavBar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Returns({ isOrderValidFunction }) {
    const [orderId, setOrderId] = useState('')
    const navigate = useNavigate()
    function isOrderValid()
    {
        if(isOrderValidFunction(orderId)){
            navigate(`/returns/${orderId}`)
        }
        else{
            return "Not Found"
        }
    }

    return (
        <div>
            <NavBar></NavBar>
            <div>
                <label>Return ID: </label>
                <input onChange={(e) => (setOrderId(e.target.value))}></input>
            </div>
            
            <button onClick={() => (console.log(isOrderValid()))}>Enter</button>
        </div>
    );
}

export default Returns;