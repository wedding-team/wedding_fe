import {Outlet} from "react-router-dom";
import {useState} from "react";
import Header from "../components/Admin/Header";
import Sidebar from "../components/Admin/Sidebar";

export default function AdminLayout() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
            <div className={`transition-all duration-300 ${isOpen ? "ml-64" : "ml-0 md:ml-20"}`}>
                <Header setIsOpen={setIsOpen}/>
                <div className="mx-auto md:p-4 ">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}