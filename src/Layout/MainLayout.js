import {Outlet} from "react-router-dom";
import Navbar from "../Component/common/Navbar";
import Footer from "../Component/common/Footer";

export default function MainLayout() {
    return (
        <div>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
}

