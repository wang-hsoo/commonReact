import React, { useState } from 'react';

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // 전체 페이지 수

  // 이전 페이지로 이동
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // 다음 페이지로 이동
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // 특정 페이지로 이동
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // 페이지 번호 목록 생성
  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={currentPage === i ? 'active' : ''}
          onClick={() => goToPage(i)}
        >
          {i}
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <div>
      <h1>Pagination Example</h1>
      <div>
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          이전 페이지
        </button>
        <ul>
          {getPageNumbers()}
        </ul>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          다음 페이지
        </button>
      </div>
      <div>
        현재 페이지: {currentPage}
      </div>
    </div>
  );
}

export default Pagination;