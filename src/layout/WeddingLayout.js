import {Link, Outlet, useNavigate, useLocation} from "react-router-dom";
import UserStatusButton from "../components/common/UserStatusButton";
import {useDispatch, useSelector} from "react-redux";
import {fetchWeddingInvitations} from "../redux/weddingInvitation/weddingInvitationSlice";
import {useEffect} from "react";
import {CiHeart} from "react-icons/ci";
import Notification from "../components/common/Notification";

function WeddingLayout() {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const { weddingInvitation } = useSelector((state) => state.weddingInvitations);

    useEffect(() => {
        dispatch(fetchWeddingInvitations());
    }, [dispatch]);

    return (
        <div className="bg-stone-100 min-h-screen">
            <div className="bg-white drop-shadow-sm sticky top-0 z-10">
                <div className="container mx-auto flex items-center justify-between px-6 py-2 shadow">
                    <img
                        onClick={() => navigate('/')}
                        src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=rose&shade=500"
                        alt="Logo"
                        className="cursor-pointer h-10"
                    />
                    <nav className="absolute left-1/2 transform -translate-x-1/2 flex gap-x-16 text-gray-700 font-medium">
                        <NavItem to="/wedding/couple" label="Cặp đôi" isActive={location.pathname === "/wedding/couple"} />
                        <NavItem to="/wedding/love-story" label="Chuyện tình yêu" isActive={location.pathname === "/wedding/love-story"} />
                        <NavItem to="/wedding/image" label="Album Hình Cưới" isActive={location.pathname === "/wedding/image"} />
                        <NavItem to="/wedding/event" label="Sự kiện cưới" isActive={location.pathname === "/wedding/event"} />
                    </nav>
                    <div className="flex items-center gap-4">
                        <div className="shadow-lg border rounded-full p-1">
                            <Notification />
                        </div>
                        <UserStatusButton />
                    </div>
                </div>
            </div>
            <div className="text-center py-6">
                <div className="flex items-center justify-center text-4xl font-bold text-gray-900 px-4">
                    <h1 className="flex-1 text-right">{weddingInvitation?.groom_name}</h1>
                    <CiHeart className="text-4xl text-rose-300 mx-4" />
                    <h1 className="flex-1 text-left">{weddingInvitation?.bride_name}</h1>
                </div>
                <p className="text-gray-500 text-lg mt-2">Just Married</p>
            </div>
            <main className="mx-auto max-w-7xl pb-8">
                <Outlet />
            </main>
        </div>
    );
}

const NavItem = ({ to, label, isActive }) => {
    return (
        <Link
            to={to}
            className={`relative py-2 px-4 duration-300 ${isActive ? "text-rose-600 font-bold" : "hover:text-rose-500"}`}
        >
            {label}
            {isActive && <span className="absolute bottom-0 left-0 w-full h-1 bg-rose-500 rounded-full" />}
        </Link>
    );
};

export default WeddingLayout;
