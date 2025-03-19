import {Toaster} from 'sonner';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import '../src/index.css';
import HomePage from './pages/Home';
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Authen/Login";
import AdminLogin from "./pages/Admin/Login";
import SignUp from "./pages/Authen/SignUp";
import WeddingLayout from "./layout/WeddingLayout";
import WeddingInvitation from "./pages/WeddingInvitation/WeddingInvitation";
import WeddingEvent from "./pages/WeddingEvent/WeddingEvent";
import WeddingGallery from "./pages/WeddingGallery/WeddingGallery";
import LoveStory from "./pages/LoveStory/LoveStory";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/admin" element={<AdminLogin/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="/" element={<HomePage/>}/>
                <Route element={<ProtectedRoute />}>
                    <Route path="/wedding" element={<WeddingLayout/>}>
                        <Route path="couple" element={<WeddingInvitation/>}/>
                        <Route path="event" element={<WeddingEvent/>}/>
                        <Route path="image" element={<WeddingGallery/>}/>
                        <Route path="love-story" element={<LoveStory/>}/>
                    </Route>
                </Route>
            </Routes>
            <Toaster position="bottom-right" richColors/>
        </BrowserRouter>
    );
}

export default App;