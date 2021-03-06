import React, { useEffect, useState } from "react";

const renderItems = (data) => {
  return (
    <ul className='todoLijst'>
      {data.map((posts, index) => {
        return <li>{posts.title}</li>;
      })}
    </ul>
  );
};

function Paginator() {
  const [data, setData] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPage] = useState(10);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPage); i++) {
    pages.push(i);
  }

  const indexLastItem = currentPage * itemsPage;
  const indefFirstItem = indexLastItem - itemsPage;
  const items = data.slice(indefFirstItem, indexLastItem);
  const renderPageNumbers = pages.map((number) => {
    return (
      <li className='paginatorButtons' id={number} onClick={handleClick}>
        {number}
      </li>
    );
  });

  const handleNextBtn = () => {
    if (currentPage < 10) {
      setcurrentPage(currentPage + 1);
    } else if (currentPage === null) {
      setcurrentPage(currentPage == 10);
    }
  };

  const handlePreviousBtn = () => {
    if (currentPage > 1) {
      setcurrentPage(currentPage - 1);
    } else if (currentPage === null) {
      setcurrentPage(currentPage == 1);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

  function apiCall() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }

  return (
    <>
      <div className='paginator'>
        <h1>lijst voor uncinc</h1>
        {renderItems(items)}
        <ul className='navigator'>
          <li>
            <button
              className='previousBtn'
              onClick={handlePreviousBtn}
              disabled={currentPage == 1}
            >
              Previous
            </button>
          </li>
          <li>
            {" "}
            <p>Pagina: {currentPage}</p>
          </li>
          <li>
            <button
              className='nextBtn'
              onClick={handleNextBtn}
              disabled={currentPage == 10}
            >
              Next
            </button>
          </li>
        </ul>
        <ul className='paginanummers'>{renderPageNumbers}</ul>
      </div>
    </>
  );
}

export default Paginator;
