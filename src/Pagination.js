import React, { useEffect, useState } from "react";

const Pagination = ({ showPerPage, onChangePagination, total }) => {
  const [counter, setCounter] = useState(1);
  const [onButtonChnge, setOnButtonChnge] = useState(
    Math.ceil(total / showPerPage)
  );

  useEffect(() => {
    let val = showPerPage * counter;
    onChangePagination(val - showPerPage, val);
  }, [counter]);

  const handleChange = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(counter);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (onButtonChnge === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  return (
    <div className="d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a
              className="page-link"
              href="!#"
              onClick={() => handleChange("prev")}
            >
              Previous
            </a>
          </li>

          {new Array(onButtonChnge).fill("").map((el, index) => (
            <li
              className={`page-item ${index + 1 === counter ? "active" : null}`}
            >
              <a className="page-link" href="!#" onClick={()=>setCounter(index +1)}>
                {index + 1}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a
              className="page-link"
              href="!#"
              onClick={() => handleChange("next")}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;

{
  /* <li className="page-item">
            <a className="page-link" href="!#" onClick={() => handleChange("next")}>
              Next
            </a>
          </li> */
}
