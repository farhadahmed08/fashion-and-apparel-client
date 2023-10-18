import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../components/Footer";


const Root = () => {
    return (
        <div>
           <div className="max-w-6xl mx-auto space-y-6"><Navbar/>
            <Outlet/></div>
            <Footer/>
            <Toaster/>
            
        </div>
    );
};

export default Root;