import {Toaster} from 'sonner';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import '../src/index.css';
import HomePage from './pages/Home';
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Authen/Login";
import AdminLogin from "./pages/Admin/session/Login";
import SignUp from "./pages/Authen/SignUp";
import WeddingLayout from "./layout/WeddingLayout";
import Couple from "./pages/Couple/Couple";
import WeddingEvent from "./pages/WeddingEvent/WeddingEvent";
import WeddingGallery from "./pages/WeddingGallery/WeddingGallery";
import LoveStory from "./pages/LoveStory/LoveStory";
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/Admin/dashboard/Dashboard";
import UserList from "./pages/Admin/user/UserList";
import NotFound from "./pages/Error/404";
import TemplateManagement from "./pages/Admin/template/TemplateManagement";
import GeneralInfo from "./pages/GeneralInfo/GeneralInfo";
import TemplateList from "./pages/Template/TemplateList";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/admin" element={<AdminLogin/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/404" element={<NotFound />} />
                <Route path="/templates" element={<TemplateList/>}/>
                <Route element={<ProtectedRoute isAdmin={false} />}>
                    <Route path="wedding" element={<WeddingLayout/>}>
                        <Route path="couple" element={<Couple/>}/>
                        <Route path="event" element={<WeddingEvent/>}/>
                        <Route path="image" element={<WeddingGallery/>}/>
                        <Route path="love-story" element={<LoveStory/>}/>
                        <Route path="general-info" element={<GeneralInfo/>}/>
                    </Route>
                </Route>
                <Route element={<ProtectedRoute isAdmin={true} />}>
                    <Route path="/admin" element={<AdminLayout/>}>
                        <Route path="dashboard" element={<Dashboard/>}/>
                        <Route path="templates" element={<TemplateManagement/>}/>
                        <Route path="users" element={<UserList/>}/>
                        <Route path="notifications" element={""}/>
                        <Route path="settings" element={""}/>
                    </Route>
                </Route>
                <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
            <Toaster position="bottom-right" richColors/>
        </BrowserRouter>
    );
}

export default App;