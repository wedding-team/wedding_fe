import {Outlet, useNavigate, useLocation, Link} from "react-router-dom";
import { LuUsersRound, LuHeart, LuCalendar } from "react-icons/lu";
import { BiPhotoAlbum } from "react-icons/bi";
import { RiHomeHeartLine } from "react-icons/ri";
import UserStatusButton from "../components/common/UserStatusButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchCouples } from "../redux/couple/coupleSlice";
import { useEffect } from "react";
import Notification from "../components/common/Notification";
import Header from "../components/common/Header";
import { BsGlobe2 } from "react-icons/bs";
import { fetchGeneralInfos } from "../redux/generalInfo/generalInfoSlice";


function WeddingLayout() {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const { couple } = useSelector((state) => state.couples);
    const {generalInfo} = useSelector((state) => state.generalInfos);
    const { user } = useSelector((state) => state.auth);
    const templateUrl = generalInfo?.template_code;

    useEffect(() => {
        dispatch(fetchCouples());
        dispatch(fetchGeneralInfos());
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
                <div className="flex justify-between items-center md:px-4 px-2 py-2">
                    <img
                        onClick={() => navigate('/')}
                        src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=rose&shade=500"
                        alt="Logo"
                        className="cursor-pointer h-10"
                    />
                    <div className="flex items-center gap-4">
                        {templateUrl && user?.id && (
                            <a
                                href={`http://localhost:3000/theme?template=${templateUrl}&user_id=${user.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-gray-700 gap-1 border px-2 py-2 md:px-3 md:py-2 md:text-md text-sm rounded-full hover:bg-gray-200"
                            >
                                <BsGlobe2 size={16}/>
                                <span>Xem website</span>
                            </a>
                        )}
                        <div className="border rounded-full">
                            <Notification/>
                        </div>
                        <UserStatusButton/>
                    </div>
                </div>
            </div>
            <div
                className="text-center py-6 bg-cover bg-center bg-no-repeat"
                style={{backgroundImage: `url(/images/bg.webp)`}}
            >
                <div
                    className="flex items-center justify-center max-sm:text-2xl sm:text-3xl md:text-4xl text-gray-900 py-4">
                    <h1 className="font-GreatVibes flex-1 text-right">{couple?.groom_name}</h1>
                    <img
                        src="/images/couple.png"
                        className="max-md:mx-4 md:mx-12 max-md:w-12 md:w-20"
                        alt="heart"
                    />
                    <h1 className="font-GreatVibes flex-1 text-left">{couple?.bride_name}</h1>
                </div>
            </div>
            <Header navItems={navItems} location={location} />
            <main className="mx-auto max-w-7xl md:pb-8 py-8 px-2 md:px-0">
                <Outlet />
            </main>
        </div>
    );
}

export default WeddingLayout;