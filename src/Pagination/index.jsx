import React, { useEffect, useState } from "react";

const LIMIT = 10;
const Pagination = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=${LIMIT * page}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.products);
        setTotalPage(Math.ceil(data.total / LIMIT));
      });
  }, [page]);

  return (
    <div>
      {data.map((product) => {
        return (
          <p key={product.id}>
            {product.id}. {product.title}
          </p>
        );
      })}

      <div className="pagination">
        <button disabled={page === 0} onClick={() => setPage((cP) => cP - 1)}>
          ◀️
        </button>
        {[...Array(totalPage).keys()].map((pN) => {
          const isActive = pN === page;
          return (
            <button onClick={() => setPage(pN)} className={isActive ? "active" : ""} key={pN}>
              {pN + 1}
            </button>
          );
        })}
        <button onClick={() => setPage((cP) => cP + 1)} disabled={page >= totalPage - 1}>
          ▶️
        </button>
      </div>
    </div>
  );
};

export default Pagination;
