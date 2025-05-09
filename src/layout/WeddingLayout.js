import {Outlet, useNavigate, useLocation} from "react-router-dom";
import { LuUsersRound, LuHeart, LuCalendar } from "react-icons/lu";
import { BiPhotoAlbum } from "react-icons/bi";
import { RiHomeHeartLine } from "react-icons/ri";
import UserStatusButton from "../components/common/UserStatusButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchCouples } from "../redux/couple/coupleSlice";
import { useEffect } from "react";
import Header from "../components/common/Header";
import { BsGlobe2 } from "react-icons/bs";
import { fetchGeneralInfos } from "../redux/generalInfo/generalInfoSlice";


function WeddingLayout() {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
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
            <div className="bg-red-900 drop-shadow-sm">
                <div className="flex justify-between items-center md:px-4 px-2 py-2">
                    <img
                        onClick={() => navigate('/')}
                        src="/images/Lovelyinvites.png"
                        alt="Logo"
                        className="cursor-pointer md:h-14 h-8"
                    />
                    <div className="hidden md:block">
                        <Header navItems={navItems} location={location} />
                    </div>
                    <div className="flex items-center gap-2" >
                        {templateUrl && user?.id && (
                            <a
                                href={`http://localhost:3000/theme?template=${templateUrl}&user_id=${user.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-gray-700 gap-1 border px-2 py-2 md:px-3 md:py-2 md:text-md text-sm rounded-full bg-white"
                            >
                                <div className="md:text-[16px] text-[13px]">
                                    <BsGlobe2/>
                                </div>
                                <span className="md:text-base text-xs">Xem website</span>
                            </a>
                        )}
                        <UserStatusButton/>
                    </div>
                </div>
            </div>
            <main className="mx-auto max-w-7xl md:pt-8 max-md:mt-6 px-2 md:px-0">
                <Outlet />
            </main>
            <div className="md:hidden">
                <Header navItems={navItems} location={location} />
            </div>
        </div>
    );
}

export default WeddingLayout;