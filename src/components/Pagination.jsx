import * as React from "react";
import Pagination from "@mui/material/Pagination";

export default function CustomPagination({ setPage, numOfPages = 6 }) {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        paddingBottom: "30px",
      }}
    >
      <Pagination
        color="primary"
        count={numOfPages}
        onChange={(e) => handlePageChange(e.target.textContent)}
        hideNextButton
        hidePrevButton
      />
    </div>
  );
}
