import { Toaster } from "sonner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/index.css";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import WeddingInfo from "./Pages/WeddingInfo";
import HomePage from "./Pages/Home";

function App() {
    return (
        <>
            <Toaster position="bottom-right" richColors />
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/wedding-info" element={<WeddingInfo />} />
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
