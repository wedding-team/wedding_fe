import Helper from "../../../utils/Helper";

const UserItem = ({ user, onPromote, onToggleBlock }) => (
    <tr className="border-b hover:bg-gray-100 transition duration-200">
        <td className="py-3 px-4">
            <img src={user?.image || "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"} alt={user.name} className="w-12 h-12 rounded-full border shadow-md" />
        </td>
        <td className="py-3 px-4">{user?.name || '-'}</td>
        <td className="py-3 px-4">{user.email}</td>
        <td className="py-3 px-4 font-semibold capitalize">{user.role}</td>
        <td className="py-3 px-4 text-center">{Helper.formatDate(user.created_at)}</td>
        <td className="py-3 px-4 text-center">{Helper.formatDate(user.updated_at)}</td>
        <td className="py-3 px-4 justify-center">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${user.blocked ? "bg-red-200 text-red-700" : "bg-green-200 text-green-700"}`}>
                {user.blocked ? "Bị khóa" : "Hoạt động"}
            </span>
        </td>
        <td className="py-3 text-center flex justify-center gap-2">
            <button
                onClick={() => onPromote(user.id)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md text-xs md:text-sm shadow"
            >
                Nâng cấp
            </button>
            <button
                onClick={() => onToggleBlock(user.id, user.blocked)}
                className={`px-3 py-2 rounded-md text-xs md:text-sm shadow ${
                    user.blocked ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"
                } text-white`}
            >
                {user.blocked ? "Mở khóa" : "Khóa"}
            </button>
        </td>
    </tr>
);

export default UserItem;
