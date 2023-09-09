import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { bookNow } from './Store'

const data = [
    {
        id:1,
    date: 'Thu May 06 2021',
    time: '01:00 PM PST - 2:00 PM PST',
    availability: '3 seats available',
    btnText: 'Book Now'
    },
    {
        id:2,
    date: 'Thu May 06 2021',
    time: '01:00 PM PST - 2:00 PM PST',
    availability: '3 seats available',
    btnText: 'Book Now'
    },
    {
        id:3,
    date: 'Thu May 06 2021',
    time: '01:00 PM PST - 2:00 PM PST',
    availability: '3 seats available',
    btnText: 'Book Now'
    },
    {
        id:4,
    date: 'Thu May 06 2021',
    time: '01:00 PM PST - 2:00 PM PST',
    availability: '3 seats available',
    btnText: 'Book Now'
    },
    {
        id:5,
    date: 'Thu May 06 2021',
    time: '01:00 PM PST - 2:00 PM PST',
    availability: '3 seats available',
    btnText: 'Book Now'
    },
    {
        id:6,
    date: 'Thu May 06 2021',
    time: '01:00 PM PST - 2:00 PM PST',
    availability: '3 seats available',
    btnText: 'Book Now'
    },
    {
        id:7,
    date: 'Thu May 06 2021',
    time: '01:00 PM PST - 2:00 PM PST',
    availability: '3 seats available',
    btnText: 'Book Now'
    },
    {
        id:8,
    date: 'Thu May 06 2021',
    time: '01:00 PM PST - 2:00 PM PST',
    availability: '3 seats available',
    btnText: 'Book Now'
    },
    {
        id:9,
    date: 'Thu May 06 2021',
    time: '01:00 PM PST - 2:00 PM PST',
    availability: '3 seats available',
    btnText: 'Book Now'
    },
]


function Booking() {


    const x = useSelector((state)=> state)
    const dispatch = useDispatch()

    const [timeLeft, setTimeLeft] = useState(60)


    function addToCart(item,index){
        dispatch(bookNow(item))
    }


    useEffect(()=>{
        let randomNum = Math.ceil(Math.random()*60)
        if(randomNum >= 30 ){
            setTimeLeft(randomNum)
        }

    },[])



  return (
    <>
   <div>
   <p className='time-left'>Time Left: {timeLeft} seconds</p>
   <div className='bookSeats'>
   <p className='booking-free-trial'>Claim Your Free Trail Class</p>
   <Link to='/cart'> <div>
    
   <i class="fa-solid fa-cart-shopping"></i>
   </div></Link>
   </div>
   </div>
   <div className='bookSeats'>
   <h3>Class Schedule</h3>  
   <p>Free Seats Left: <span>{data.length - x.length}</span>
    </p>
   </div>
    <table className='table'>
    <tr className='header'>
        <th>Date</th>
        <th>Time</th>
        <th>Availablity</th>
        <th></th>
    </tr>
    
        {
            data.map((eachItem, index)=>{
                return(
                    <tr key={eachItem.id}>
                        <td>{eachItem.date}</td>
                        <td>{eachItem.time}</td>
                        <td>{eachItem.availability}</td>
                        <td className='button-part'><button onClick = {()=>addToCart(eachItem)}>Book Now</button></td>
                    </tr> 
                )
            })
        }
  
  
</table>
</>
  )
}

export default Booking
