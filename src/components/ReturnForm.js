import NavBar from './NavBar'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function ReturnForm({findOrderFunction}) {
    const params = useParams()
    const [returnMessage, setReturnMessage] = useState()
    const [order, setOrder] = useState(findOrderFunction(params.orderId))
    return (
        <div>
            <NavBar></NavBar>
            <label>Return Reason: </label>
            <select>
                <option>Incorrect shoe size</option>
                <option>Didn't like the shoe style</option>
                <option>Didn't like the colour</option>
                <option>Other</option>
            </select>
            <div>
                <label>Please explain the reason for returning the order: </label>
                <input onChange={(e) => (setReturnMessage(e.target.value))}></input>
            </div>
            
            <button>Return</button>
        </div>
    );
}

export default ReturnForm;