import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getAllUsers} from "../../../redux/admin/adminSlice";

function Dashboard() {
    const dispatch = useDispatch();
    const userCount = useSelector((state) => state.admin.userCount);
    const loading = useSelector((state) => state.admin.loading);

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    return (
        <div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl">
                    <AiOutlineUsergroupAdd size={20} />
                </div>
                <div className="flex items-end justify-between mt-5">
                    <div>
                        <span className="text-sm text-gray-500">Người dùng</span>
                        <h4 className="mt-2 font-bold text-gray-800 text-title-sm">
                            {loading ? "Đang tải..." : userCount}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
