import { useContext } from "react";
import { json, useLoaderData } from "react-router-dom";
import { authContext } from "../../Authprovider/Authprovider";
import checkout from "../../assets/images/checkout/checkout.png"
import useAxiosUrl from "../../Hook/useAxiosUrl";
import Swal from 'sweetalert2';

const Booking = () => {
    const {user} = useContext(authContext)
    const servise = useLoaderData();
    const axiousurl = useAxiosUrl();
   
    // console.log(servise)
    const {title, price,img, _id, service_id } = servise;
    const hendalFromSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value; 
        const date = form.date.value; 
        const email = user?.email; 
        const price = form.price.value; 
        const BookingOrder = {
            
            name,
            date,
            email,
            price,
            img,
            service_id,
            title,


        }
       console.log(BookingOrder)
        // fetch ("http://localhost:5000/BookingOrder",{
        //     method: "POST",
        //     headers: {
        //         "content-type" : "application/json"
        //     },
        //     body:JSON.stringify(BookingOrder)
        // })
        // .then(res => res.json())
        // .then(data =>{console.log(data)})
        axiousurl.post('/BookingOrder', BookingOrder)
        .then(res=> {
           
            if (res.data.acknowledged > 0) {
                Swal.fire("Yor Serves is Add to Booking");
            }else{
                Swal.fire("Opp ! ");
            }
        })
        
      
        // axios.post('/user', {
        //     firstName: 'Fred',
        //     lastName: 'Flintstone'
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });

    }
    return (
        <>
      <div className="w-full  relative mb-6">
        <img src={checkout} className="w-full" alt="" />
        <h3 className="absolute top-[50%] left-[20%] text-xl md:text-5xl font-bold text-white shadow-xl">
            Servise : {title}
        </h3>


      </div>
        <form onSubmit={hendalFromSubmit}>
            <div className="grid grid-cols-2 gap-6 p-7 bg-slate-500 rounded-lg">
            <div className="flex ">
            <div className="w-full mb-5">
                <label className="text-xs font-semibold px-1">Name</label>
                <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                    <input type="name" name="name" defaultValue={user?.displayName} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Name" />
                </div>
            </div>
        </div>
        <div className="flex ">
            <div className="w-full ">
                <label className="text-xs font-semibold px-1">Date</label>
                <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                    <input type="date" name="date" required className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
                </div>
            </div>
        </div>
        <div className="flex ">
            <div className="w-full ">
                <label className="text-xs font-semibold px-1">Email</label>
                <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                    <input type="email" name="email" defaultValue={user?.email} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
                </div>
            </div>
        </div>
        <div className="flex ">
            <div className="w-full ">
                <label className="text-xs font-semibold px-1">price</label>
                <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                    <input type="text" name="price" defaultValue={'$' + price} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
                </div>
            </div>
        </div>
        <div className=" ">
            <div className="w-full ">
                <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">REGISTER NOW</button>

            </div>
        </div>
            </div>
    </form >
     
    </> 
 
    );
};

export default Booking;