import { LuSearch } from "react-icons/lu";

function Search({ searchTerm, setSearchTerm }) {
    return (
        <div className="relative flex items-center w-1/3 max-w-md hidden lg:flex">
            <input
                type="text"
                className="border rounded-lg border-gray-200 px-3 py-2 pr-10 w-full text-sm text-gray-700 focus:outline-none"
                placeholder="Tìm kiếm theo email"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="absolute right-3 text-gray-500">
                <LuSearch size={20} />
            </span>
        </div>
    );
}

export default Search;
