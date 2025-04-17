import {Outlet, useNavigate, useLocation, Link} from "react-router-dom";
import { LuUsersRound, LuHeart, LuCalendar } from "react-icons/lu";
import { BiPhotoAlbum } from "react-icons/bi";
import { RiHomeHeartLine } from "react-icons/ri";
import UserStatusButton from "../components/common/UserStatusButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeddingInvitations } from "../redux/weddingInvitation/weddingInvitationSlice";
import { useEffect } from "react";
import Notification from "../components/common/Notification";
import Header from "../components/common/Header";

function WeddingLayout() {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const { weddingInvitation } = useSelector((state) => state.weddingInvitations);

    useEffect(() => {
        dispatch(fetchWeddingInvitations());
    }, [dispatch]);

    const navItems = [
        { to: "/wedding/general-info", label: "Thông tin chung", icon: <RiHomeHeartLine size={25} />, mobileLabel: "Chung" },
        { to: "/wedding/couple", label: "Cặp đôi", icon: <LuUsersRound size={25} />, mobileLabel: "Cặp đôi" },
        { to: "/wedding/love-story", label: "Tình yêu", icon: <LuHeart size={25} />, mobileLabel: "Tình yêu" },
        { to: "/wedding/image", label: "Album Hình Cưới", icon: <BiPhotoAlbum size={25} />, mobileLabel: "Album" },
        { to: "/wedding/event", label: "Sự kiện cưới", icon: <LuCalendar size={25} />, mobileLabel: "Sự kiện" },
    ];

    return (
        <div className="bg-stone-100 min-h-screen pb-20 md:pb-0">
            <div className="bg-white drop-shadow-sm">
                <div className="container flex justify-between items-center max-md:mx-4 md:mx-24 py-2">
                    <img
                        onClick={() => navigate('/')}
                        src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=rose&shade=500"
                        alt="Logo"
                        className="cursor-pointer h-10"
                    />
                    <div className="flex items-center gap-4">
                        <Link to="" className="border px-3 py-2 rounded-full hover:bg-gray-200">
                            Xem trước mẫu
                        </Link>
                        <div className="border rounded-full">
                            <Notification/>
                        </div>
                        <UserStatusButton/>
                    </div>
                </div>
            </div>
            <div
                className="text-center py-6 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(/images/bg.webp)` }}
            >
                <div className="flex items-center justify-center max-sm:text-2xl sm:text-3xl md:text-4xl text-gray-900 py-4">
                    <h1 className="font-GreatVibes flex-1 text-right">{weddingInvitation?.groom_name}</h1>
                    <img
                        src="/images/couple.png"
                        className="max-md:mx-4 md:mx-12 max-md:w-12 md:w-20"
                        alt="heart"
                    />
                    <h1 className="font-GreatVibes flex-1 text-left">{weddingInvitation?.bride_name}</h1>
                </div>
            </div>
            <Header navItems={navItems} location={location} />
            <main className="mx-auto max-w-7xl md:pb-8 py-8 px-4 md:px-0">
                <Outlet />
            </main>
        </div>
    );
}

export default WeddingLayout;