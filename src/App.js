import {Toaster} from 'sonner';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import '../src/index.css';
import HomePage from './Pages/Home';
import ProtectedRoute from "./Component/ProtectedRoute";
import Login from "./Pages/Authen/Login";
import SignUp from "./Pages/Authen/SignUp";
import WeddingLayout from "./Layouts/WeddingLayout";
import WeddingInvitation from "./Pages/WeddingInvitation/WeddingInvitation";
import WeddingEvent from "./Pages/WeddingEvent/WeddingEvent";
import WeddingGallery from "./Pages/WeddingGallery/WeddingGallery";
import LoveStory from "./Pages/LoveStory/LoveStory";

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