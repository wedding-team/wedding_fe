import {Toaster} from 'sonner';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import '../src/index.css';
import Login from './Pages/Auth/Login';
import SignUp from './Pages/Auth/SignUp';
import WeddingInvitation from './Pages/./WeddingInvitation';
import HomePage from './Pages/Home';
import WeddingEvent from "./Pages/WeddingEvent";
import WeddingImage from "./Pages/WeddingImage";
import WeddingLayout from "./Layout/WeddingLayout";
import ProtectedRoute from "./Component/ProtectedRoute";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="/" element={<HomePage/>}/>
                <Route element={<ProtectedRoute />}>
                    <Route path="/wedding" element={<WeddingLayout/>}>
                        <Route path="info" element={<WeddingInvitation/>}/>
                        <Route path="event" element={<WeddingEvent/>}/>
                        <Route path="image" element={<WeddingImage/>}/>
                    </Route>
                </Route>
            </Routes>
            <Toaster position="bottom-right" richColors/>
        </BrowserRouter>
    );
}

export default App;