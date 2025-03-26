import Helper from "../../../utils/Helper";

const UserItem = ({ index, user, onOpenModal }) => {
    return (
        <tr className="border-b hover:bg-gray-100 transition duration-200 text-sm">
            <td className="px-1 py-2 text-center">{index + 1}</td>
            <td className="py-2 text-left hidden md:table-cell">
                <img
                    src={user?.image || "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"}
                    alt={user.name}
                    className="w-8 h-8 rounded-full border shadow-sm "
                />
            </td>
            <td className="px-3 py-2 text-left">{user?.name || '-'}</td>
            <td className="px-2 py-2 text-left">{user.email}</td>
            <td className="px-2 py-2 text-center font-semibold capitalize">{user.role}</td>
            <td className="px-2 py-2 text-center hidden lg:table-cell">{Helper.formatDate(user.created_at)}</td>
            <td className="px-2 py-2 text-center hidden lg:table-cell">{Helper.formatDate(user.updated_at)}</td>
            <td className="px-2 py-2 text-center">
                <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold 
                        ${user.blocked ? "bg-red-200 text-red-700" : "bg-green-200 text-green-700"}`}
                >
                    {user.blocked ? "Bị khóa" : "Hoạt động"}
                </span>
            </td>
            <td className="px-2 py-2 text-center">
                <div className="flex justify-center gap-2 flex-wrap">
                    <button
                        onClick={() => onOpenModal("role", user)}
                        className={`px-3 py-1 rounded-md text-xs min-w-[80px] shadow 
                            ${user.role === "premium" ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"} text-white`}
                    >
                        {user.role === "premium" ? "Hạ cấp" : "Nâng cấp"}
                    </button>
                    <button
                        onClick={() => onOpenModal("block", user)}
                        className={`px-3 py-1 rounded-md text-xs min-w-[80px] shadow 
                            ${user.blocked ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"} text-white`}
                    >
                        {user.blocked ? "Mở khóa" : "Khóa"}
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default UserItem;
