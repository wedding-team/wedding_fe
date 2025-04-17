import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { useEffect, useState } from "react";
import AdminApi from "../../../apis/admin/AdminApi";

function Dashboard() {
    const [totalUsers, setTotalUsers] = useState(0);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const result = await AdminApi.getTotalUsers();
                setTotalUsers(result.data.total_users);
            } catch (error) {
                console.error("Lỗi khi lấy tổng số người dùng:", error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl">
                <AiOutlineUsergroupAdd size={20} />
            </div>
            <div className="flex items-end justify-between mt-5">
                <div>
                    <span className="text-sm text-gray-500">Người dùng</span>
                    <h4 className="mt-2 font-bold text-gray-800 text-title-sm">
                        {totalUsers}
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
