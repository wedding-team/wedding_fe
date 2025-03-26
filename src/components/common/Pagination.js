import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
    const getPageNumbers = () => {
        let pages = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pages = [1, 2, 3, 4, "...", totalPages];
            } else if (currentPage >= totalPages - 2) {
                pages = [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
            } else {
                pages = [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
            }
        }
        return pages;
    };

    return (
        <nav className="flex items-center justify-center mt-4 gap-x-1" aria-label="Pagination">
            <button
                className={`min-h-9.5 min-w-9.5 py-2 px-2.5 rounded-lg text-gray-800 dark:text-white transition duration-200 hover:bg-gray-100 dark:hover:bg-white/10 ${currentPage === 1 ? 'opacity-50 pointer-events-none' : ''}`}
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous"
            >
                &#x2039;
            </button>
            {getPageNumbers().map((page, index) => (
                <button
                    key={index}
                    className={`min-h-9.5 min-w-9.5 px-3 py-2 text-sm rounded-lg transition duration-200 ${page === currentPage ? 'bg-gray-200 text-gray-800 dark:bg-neutral-600 dark:text-white' : 'text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-white/10'}`}
                    onClick={() => typeof page === "number" && onPageChange(page)}
                    disabled={page === "..."}
                >
                    {page}
                </button>
            ))}
            <button
                className={`min-h-9.5 min-w-9.5 py-2 px-2.5 rounded-lg text-gray-800 dark:text-white transition duration-200 hover:bg-gray-100 dark:hover:bg-white/10 ${currentPage === totalPages ? 'opacity-50 pointer-events-none' : ''}`}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next"
            >
                &#x203A;
            </button>
        </nav>
    );
}

export default Pagination;