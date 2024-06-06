import React from "react";
import Pagination from "@mui/material/Pagination";

import "./CustomPagination.css";

function CustomPagination({ setPage, totalPages }) {
    const handleChange = (event, value) => {
        setPage(value);
        window.scroll(0, 0);
    };

    return (
        <div className="pagination-container">
            <Pagination
                count={totalPages}
                onChange={handleChange}
                sx={{
                    '& .MuiPaginationItem-root': {
                        color: '#fff',
                    },
                    '& .Mui-selected': {
                        backgroundColor: '#e50914',
                        color: 'primary',
                    },
                    '& .MuiPaginationItem-ellipsis': {
                        color: '#fff',
                    },
                }}
            />
        </div>
    );
}

export default CustomPagination;
