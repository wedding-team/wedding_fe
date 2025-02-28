import { Toaster } from "sonner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/index.css";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";

function App() {
    return (
        <>
            <Toaster position="bottom-right" richColors />
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
