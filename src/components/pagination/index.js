import {
  faArrowLeft,
  faArrowRight,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../store/actions";
import { scrollToTop } from "../../utils";

import "./pagination.scss";

const Pagination = () => {
  const dispatch = useDispatch();
  let [page, setPage] = useState(1);

  const prevPage = () => {
    page !== 1 && setPage((prev) => prev - 1);
  };

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    dispatch(getAllProducts(page));
    scrollToTop();
  }, [page]);

  return (
    <div className="pagination">
      {page > 10 && (
        <span className="pagination__block" onClick={() => setPage(1)}>
          <FontAwesomeIcon icon={faBackward} />
        </span>
      )}
      <span className="pagination__block" onClick={() => prevPage()}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </span>
      <span className="pagination__block pagination__block--count">{page}</span>
      <span className="pagination__block" onClick={() => nextPage()}>
        <FontAwesomeIcon icon={faArrowRight} />
      </span>
    </div>
  );
};

export default Pagination;
