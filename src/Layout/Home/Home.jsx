import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";
import AboutUs from "../About/AboutUs";

const Home = () => {
    return (
        <div className="w-5/6 mx-auto">
            <NavBar></NavBar>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;