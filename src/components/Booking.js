import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bookNow } from "./Store";

const initialData = [
  {
    id: 1,
    subject: "React js",
    date: "Thu May 06 2021",
    time: "01:00 PM PST - 2:00 PM PST",
    availability: "3",
    btnText: "Book Now",
  },
  {
    id: 2,
    subject: "Node js",

    date: "Thu May 06 2021",
    time: "01:00 PM PST - 2:00 PM PST",
    availability: "3",
    btnText: "Book Now",
  },
  {
    id: 3,
    subject: "mySql",
    date: "Thu May 06 2021",
    time: "01:00 PM PST - 2:00 PM PST",
    availability: "3",
    btnText: "Book Now",
  },
  {
    id: 4,
    subject: "AWS",
    date: "Thu May 06 2021",
    time: "01:00 PM PST - 2:00 PM PST",
    availability: "3",
    btnText: "Book Now",
  },
  {
    id: 5,
    subject: "EXPRESS",
    date: "Thu May 06 2021",
    time: "01:00 PM PST - 2:00 PM PST",
    availability: "3",
    btnText: "Book Now",
  },
  {
    id: 6,
    subject: "MERN",

    date: "Thu May 06 2021",
    time: "01:00 PM PST - 2:00 PM PST",
    availability: "3",
    btnText: "Book Now",
  },
  {
    id: 7,
    subject: "Java",

    date: "Thu May 06 2021",
    time: "01:00 PM PST - 2:00 PM PST",
    availability: "3",
    btnText: "Book Now",
  },
  {
    id: 8,
    subject: "PYTHON",

    date: "Thu May 06 2021",
    time: "01:00 PM PST - 2:00 PM PST",
    availability: "3",
    btnText: "Book Now",
  },
  {
    id: 9,
    subject: "HTML&CSS",

    date: "Thu May 06 2021",
    time: "01:00 PM PST - 2:00 PM PST",
    availability: "3",
    btnText: "Book Now",
  },
];

function Booking() {
  const x = useSelector((state) => state);
  const dispatch = useDispatch();

  const [timeLeft, setTimeLeft] = useState(60);
  const [data, setData] = useState(initialData);

  function addToCart(item, index) {
    if (item.availability > 0) {
      const updatedData = [...data];
      const updatedItem = { ...updatedData[index] };
      updatedItem.availability -= 1;
      updatedData[index] = updatedItem;
      setData(updatedData);
      dispatch(bookNow(item));
    }
  }

  useEffect(() => {
    let randomNum = Math.ceil(Math.random() * 60);
    if (randomNum >= 30) {
      setTimeLeft(randomNum);
    }
  }, []);

  return (
    <>
      <div>
        <p className="time-left">
          <h3>Time Left: {timeLeft} seconds</h3>
        </p>
        <div className="bookSeats">
          <p className="booking-free-trial">Claim Your Free Trail Class</p>
          <Link to="/cart">
            {" "}
            <div>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </Link>
        </div>
      </div>

      <div className="bookSeats">
        <h2>Class Schedule</h2>
        <p>
          Free Seats Left: <span>{Math.max(data.length - x.length, 5)}</span>
        </p>
      </div>

      <table className="table">
        <tr className="header">
          <th>Subject</th>
          <th>Time</th>
          <th>Availablity</th>
          <th></th>
        </tr>

        {data.map((eachItem, index) => {
          return (
            <tr key={eachItem.id}>
              <td>{eachItem.subject}</td>
              <td>{eachItem.time}</td>
              <td>{eachItem.availability}</td>
              <td className="button-part">
                {/* <button onClick={() => addToCart(eachItem, index)}>
                  Book Now
                </button> */}
                <button onClick={() => addToCart(eachItem, index)}>
                  {eachItem?.availability === 0 ? "Full" : "Book Now"}
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default Booking;
