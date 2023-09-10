import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {  cancelSeat } from './Store'

function Cart() {
    const cartItems = useSelector((state)=> state)
    const dispatch = useDispatch()
  return (
    <>
    <div className='bookSeats'>
    <h1 className='cart-main-heading'>Cart</h1>
   <Link to='/'> <i class="fa-solid fa-house"></i></Link>
    </div>
    <table className='table'>
    <tr className='header'>
        <th>Date</th>
        <th>Time</th>
        <th></th>
    </tr>
    
        {
            cartItems.map((eachItem, index)=>{
                return(
                    <tr key={eachItem.id}>
                        <td>{eachItem.date}</td>
                        <td>{eachItem.time}</td>
                        <td className='button-part' onClick={()=>dispatch(cancelSeat(index))}><button >Cancel</button></td>
                    </tr> 
                )
            })
        }
  
  
</table>
</>
  )
}

export default Cart
