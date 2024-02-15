import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../../Authprovider/Authprovider";
import checkout from "../../assets/images/checkout/checkout.png"

const Booking = () => {
    const {user} = useContext(authContext)
    const servise = useLoaderData();
    // console.log(servise)
    const {title, price} = servise;
    const hendalFromSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value; 
        const date = form.date.value; 
        const email = user?.email; 
        const price = form.price.value; 
        const order = {
            Coustomer :
            name,
            date,
            email,
            price

        }
        console.log(order)

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