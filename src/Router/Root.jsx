import { Outlet } from "react-router-dom";
import NavBar from "../Layout/NavBar/NavBar";


const Root = () => {
    return (
        <div className="w-5/6 mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;