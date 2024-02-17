import { useContext } from "react";
import { authContext } from "../Authprovider/Authprovider";
import { Navigate } from "react-router-dom";


const PrivedRoute = ({children}) => {
    const {user,loder} = useContext(authContext);
    if (user?.email) {
        return children
    }
    if (loder) {
        return <span className="loading loading-dots loading-lg"></span>
    }
    return <Navigate to={"/singin"} replace></Navigate>
};

export default PrivedRoute;