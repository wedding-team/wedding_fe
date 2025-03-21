import { useEffect, useState } from "react";
import UserItem from "./UserItem";
import AdminApi from "../../../apis/AdminApi";
import Helper from "../../../utils/Helper";

function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await AdminApi.getAllUsers();
                setUsers(response.data);
            } catch {
                setError("Không thể lấy danh sách người dùng!");
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const updateUser = (userId, updatedData) => {
        setUsers(users.map(user => (user.id === userId ? { ...user, ...updatedData } : user)));
    };

    const handlePromoteRole = async (userId) => {
        try {
            await AdminApi.updateRole(userId, "premium");
            const response = await AdminApi.getAllUsers();
            setUsers(response.data);
            Helper.toastSuccess("Nâng cấp tài khoản thành công");
        } catch {
            Helper.toastError("Không thể nâng cấp");
        }
    };

    const handleToggleBlock = async (userId, isBlocked) => {
        try {
            await AdminApi.toggleBlockUser(userId);
            updateUser(userId, { blocked: !isBlocked });
            Helper.toastSuccess(isBlocked ? "Mở khoá tài khoản thành công" : "Khoá tài khoản thành công");
        } catch {
            alert("Không thể cập nhật trạng thái khóa!");
        }
    };

    if (loading) return <p className="text-center text-gray-500">Đang tải...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="overflow-x-auto p-4">
            <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                <thead>
                <tr className="bg-gray-100 text-gray-700 text-sm md:text-base">
                    <th className="py-3 px-4 border-b text-left">Ảnh</th>
                    <th className="py-3 px-4 border-b text-left">Tên</th>
                    <th className="py-3 px-4 border-b text-left">Email</th>
                    <th className="py-3 px-4 border-b text-left">Vai trò</th>
                    <th className="py-3 px-4 border-b text-center">Ngày tạo</th>
                    <th className="py-3 px-4 border-b text-center">Ngày cập nhật</th>
                    <th className="py-3 px-4 border-b text-left">Trạng thái</th>
                    <th className="py-3 px-4 border-b text-center">Hành động</th>
                </tr>
                </thead>
                <tbody className="text-gray-700 text-sm md:text-base">
                {users.map(user => (
                    <UserItem key={user.id} user={user} onPromote={handlePromoteRole}
                              onToggleBlock={handleToggleBlock}/>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;
