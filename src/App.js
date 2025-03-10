import {Toaster} from 'sonner';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import '../src/index.css';
import Login from './Pages/Auth/Login';
import SignUp from './Pages/Auth/SignUp';
import WeddingInfo from './Pages/WeddingInfo';
import HomePage from './Pages/Home';
import MainLayout from './Layout/MainLayout';
import {AuthProvider} from './context/AuthContext';
import ProtectedRoute from './Component/ProtectedRoute';

function App() {
    return (
        <AuthProvider>
            <Toaster position="bottom-right" richColors/>
            <BrowserRouter>
                <Routes>
                    {/* Các route không cần đăng nhập */}
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/sign-up" element={<SignUp/>}/>
                    <Route path="/" element={<HomePage/>}/>
                    {/* Các route cần đăng nhập mới vào được */}
                    <Route element={<MainLayout/>}>
                        <Route path="/wedding-info" element={<ProtectedRoute><WeddingInfo/></ProtectedRoute>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;