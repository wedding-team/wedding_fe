import {ToastContainer} from "react-toastify";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FormLogin from "./Component/Auth/FormLogin";
import '../src/index.css';
import FormSignUp from "./Component/Auth/FormSignUp";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<FormLogin/>}/>
                <Route path="/sign-up" element={<FormSignUp/>}/>
            </Routes>
            <ToastContainer/>
        </BrowserRouter>
    );
}

export default App;
