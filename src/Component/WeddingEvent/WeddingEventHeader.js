function WeddingEventHeader({ onAdd }) {
    return (
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Danh sách sự kiện cưới</h2>
            <button
                onClick={onAdd}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-sm shadow-md"
            >
                + Thêm mới
            </button>
        </div>
    );
}

export default WeddingEventHeader;
