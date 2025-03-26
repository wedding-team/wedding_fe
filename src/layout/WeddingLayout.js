import {Link, Outlet, useNavigate, useLocation} from "react-router-dom";
import { LuUsersRound, LuHeart, LuAlbum , LuCalendar } from "react-icons/lu";
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
    const {weddingInvitation} = useSelector((state) => state.weddingInvitations);

    useEffect(() => {
        dispatch(fetchWeddingInvitations());
    }, [dispatch]);

    return (
        <div className="bg-stone-100 min-h-screen">
            <div className="bg-white drop-shadow-sm">
                <div className="container flex justify-between items-center max-md:mx-4 md:mx-24 py-2">
                    <img
                        onClick={() => navigate('/')}
                        src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=rose&shade=500"
                        alt="Logo"
                        className="cursor-pointer h-10"
                    />
                    <div className="flex items-center gap-4">
                        <div className="border rounded-full p-1">
                            <Notification />
                        </div>
                        <UserStatusButton />
                    </div>
                </div>
            </div>
            <div className="text-center py-6 bg-cover bg-center bg-no-repeat" style={{
                backgroundImage: `url(/images/bg.webp)`
            }}>
                <div className="flex items-center justify-center max-sm:text-2xl sm:text-3xl md:text-4xl text-gray-900 py-4">
                    <h1 className="font-GreatVibes flex-1 text-right">{weddingInvitation?.groom_name}</h1>
                    <img src="/images/couple.png" className="max-md:mx-4 md:mx-12 max-md:w-12 md:w-20" alt={'heart'}/>
                    <h1 className="font-GreatVibes flex-1 text-left">{weddingInvitation?.bride_name}</h1>
                </div>
            </div>
            <nav className="border-t border-gray-200 z-10">
                <div className="flex max-md:justify-between max-md:mx-4 md:justify-center md:space-x-8 py-4 text-gray-700 font-medium">
                    <NavItem
                        to="/wedding/couple"
                        label="Cặp đôi"
                        icon={<LuUsersRound size={24} />}
                        isActive={location.pathname === "/wedding/couple"}
                    />
                    <NavItem
                        to="/wedding/love-story"
                        label="Chuyện tình yêu"
                        icon={<LuHeart size={24} />}
                        isActive={location.pathname === "/wedding/love-story"}
                    />
                    <NavItem
                        to="/wedding/image"
                        label="Album Hình Cưới"
                        icon={<LuAlbum  size={24} />}
                        isActive={location.pathname === "/wedding/image"}
                    />
                    <NavItem
                        to="/wedding/event"
                        label="Sự kiện cưới"
                        icon={<LuCalendar size={24} />}
                        isActive={location.pathname === "/wedding/event"}
                    />
                </div>
            </nav>
            <main className="mx-auto max-w-7xl pb-8">
                <Outlet/>
            </main>
        </div>
    );
}

const NavItem = ({ to, label, icon, isActive }) => {
    return (
        <Link
            to={to}
            className={`flex flex-col items-center py-2 px-4 text-lg group`}
        >
            <div className={`
                ${isActive ? "text-rose-600" : "text-gray-600 group-hover:text-rose-500"}
                mb-1
            `}>
                {icon}
            </div>
            <span className={`
                max-md:hidden 
                ${isActive ? "text-rose-600" : "text-gray-700 group-hover:text-rose-500"}
                text-sm
            `}>
                {label}
            </span>
        </Link>
    );
};

export default WeddingLayout;
