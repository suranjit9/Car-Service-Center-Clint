import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Authprovider/Authprovider";
import BookListDesigan from "./BookListDesigan";
import Swal from 'sweetalert2'
import axios from "axios";

const BookingList = () => {
    const {user} = useContext(authContext);
    const [bookingList, setBookingList] = useState([]);
    // console.log(bookingList)
    const url = `http://localhost:5000/BookingOrder?email=${user?.email}`;
    useEffect(()=>{
      axios.get(url, {withCredentials: true})
      .then(res=>{
        console.log('Booking list text',res)
        setBookingList(res.data)
      })
        // fetch(url)
        // .then(res => res.json())
        // .then(data => setBookingList(data))
    },[])
    const hendaleDelet = id =>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to delete this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          // fetch(`http://localhost:5000/BookingOrder/${id}`,{
          //   method: "delete"
          // })
          // .then(res => res.json())
          // .then(data =>{
          //   console.log(data)
          //   if (data.deletedCount > 0) {
          //     Swal.fire({
          //       title: "Deleted!",
          //       text: "Your file has been deleted.",
          //       icon: "success"
          //     });
          //     const remening = bookingList.filter(booki => booki._id !== id);
          //   setBookingList(remening);
          //   }
           
          // })
          axios.delete(`http://localhost:5000/BookingOrder/${id}`,{withCredentials: true})
          .then(res => {
            console.log(res.data)
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              const remening = bookingList.filter(booki => booki._id !== id);
            setBookingList(remening);}
          })
          
        }
      });
      
    }
    const handalConform = id =>{
      fetch(`http://localhost:5000/BookingOrder/${id}`, {
        method: 'PATCH',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({status: "Confirm"})
    })
      
      .then(res => res.json())
      .then(data =>{
        console.log(data);
        if (data.modifiedCount > 0) {
          const remening = bookingList.filter(booki => booki._id !== id);
          const upDated = bookingList.find(book => book._id === id);
          upDated.status = "Confirm"
          const newBooking = [upDated, ...remening];
          setBookingList(newBooking);
        }
      })
    }
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <h4> Total : {bookingList.length}</h4>
          </label>
        </th>
        <th>Title</th>
        <th>Price</th>
        <th>Booking Data</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
       bookingList.map(book => <BookListDesigan
       key={book._id}
       book={book}
       hendaleDelet={hendaleDelet}
       handalConform={handalConform}
       ></BookListDesigan>) 
      }
     
    </tbody>
   
    
  </table>
</div>
    );
};

export default BookingList;
