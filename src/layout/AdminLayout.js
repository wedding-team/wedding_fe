import {Outlet} from "react-router-dom";
import {useState} from "react";
import Header from "../components/Admin/Header";
import Sidebar from "../components/Admin/Sidebar";

export default function AdminLayout() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="min-h-screen flex">
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
            <div className={`flex-1 transition-all duration-300 ${isOpen ? "ml-64" : "ml-0 md:ml-20"}`}>
                <Header setIsOpen={setIsOpen}/>
                <div className="p-4 mx-auto md:p-6 bg-gray-50 h-full">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}