import { useEffect, useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, updateUser, updateUserInStore } from "../../../redux/admin/adminSlice";
import Helper from "../../../utils/Helper";
import UserItem from "./UserItem";
import ModalConfirm from "../../../components/common/ModalConfirm";
import Pagination from "../../../components/common/Pagination";
import Search from "../../../components/common/Search";

function UserList() {
    const dispatch = useDispatch();
    const { users, error, totalPages, currentPage } = useSelector((state) => state.admin);
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        dispatch(getAllUsers({ page: currentPage, search: searchTerm }));
    }, [dispatch, searchTerm, currentPage]);

    const handleOpenModal = useCallback((action, user) => {
        setSelectedUser({ ...user, action });
        setIsOpen(true);
    }, []);

    const handleConfirm = async () => {
        if (!selectedUser) return;
        const { id, role, blocked, action } = selectedUser;
        const updateData = action === "role" ? { role: role === "premium" ? "free" : "premium" } : { blocked: !blocked };
        try {
            await dispatch(updateUser({ userId: id, data: updateData })).unwrap();
            dispatch(updateUserInStore({ id, ...updateData }));
            Helper.toastSuccess(`Cập nhật ${action === "role" ? `vai trò thành ${updateData.role}` : blocked ? "mở khóa" : "khóa"} thành công`);
        } catch {
            Helper.toastError("Không thể cập nhật tài khoản");
        }
        setIsOpen(false);
    };

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            dispatch(getAllUsers({ page, search: searchTerm }));
        }
    };

    const userList = useMemo(
        () => users.map((user, index) => <UserItem key={user.id} index={index} user={user} onOpenModal={handleOpenModal} />),
        [users, handleOpenModal]
    );

    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold">DANH SÁCH NGƯỜI DÙNG</h3>
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            <div className="overflow-x-auto">
                <table className="w-full table-auto border border-gray-200 text-xs md:text-xs">
                    <thead className="bg-gray-100 text-gray-700 uppercase">
                    <tr className="border-b border-gray-300">
                        <th className="py-2 px-2 text-center">Stt</th>
                        <th className="py-2 px-1 text-left hidden md:table-cell">Ảnh</th>
                        <th className="py-2 px-3 text-left">Tên</th>
                        <th className="py-2 px-2 text-left">Email</th>
                        <th className="py-2 px-2 text-center">Vai trò</th>
                        <th className="py-2 px-2 text-center hidden lg:table-cell">Ngày tạo</th>
                        <th className="py-2 px-2 text-center hidden lg:table-cell">Ngày cập nhật</th>
                        <th className="py-2 px-2 text-center">Trạng thái</th>
                        <th className="py-2 px-2 text-center">Hành động</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">{userList}</tbody>
                </table>
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            {selectedUser && (
                <ModalConfirm
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    onConfirm={handleConfirm}
                    confirmText="Xác nhận"
                    title={selectedUser.action === "role" ? "Xác nhận thay đổi vai trò" : "Xác nhận khóa/mở khóa"}
                    description={`Bạn có chắc muốn ${selectedUser.action === "role" ? (selectedUser.role === "premium" ? "hạ cấp" : "nâng cấp") : selectedUser.blocked ? "mở khóa" : "khóa"} tài khoản này không?`}
                />
            )}
        </div>
    );
}

export default UserList;
