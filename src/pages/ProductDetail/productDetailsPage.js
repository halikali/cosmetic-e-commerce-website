import {
  faClock,
  faEnvelope,
  faHeart,
  faPaperPlane,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../../store/actions";
import "./ProductDetail.scss";

const ProductDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data } = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(getProductById(id));
  }, []);

  return (
    <div className="container details mt-3">
      <div className="row mx-auto">
        <div className="details__image-wrapper col-12 col-lg-6">
          <img
            src={data.image_link && data.image_link}
            alt={data.name && data.name}
            className="details__image"
          />
          <div className="share__button-wrapper ">
            <p className="share__text"> Share : </p>
            <FontAwesomeIcon
              icon={faClock}
              className="share__button share__button--facebook"
            />
            <FontAwesomeIcon
              icon={faClock}
              className="share__button share__button--twitter"
            />
            <FontAwesomeIcon
              icon={faClock}
              className="share__button share__button--pinterest"
            />
            <FontAwesomeIcon
              icon={faClock}
              className="share__button share__button--linkedin"
            />
            <FontAwesomeIcon
              icon={faClock}
              className="share__button share__button--mail"
            />
          </div>
        </div>
        <div className="info col-12 col-lg-6 ">
          <h1 className="info__title">
            {data.brand && data.brand} - {data.name && data.name}
          </h1>
          <div className="info__evaluation">
            starring -{" "}
            <span className="info__evaluation--reviews"> 3 reviews </span>{" "}
            <span className="info__evaluation--stock">in stocks</span>
            <span> SKU:AVo1-D-46</span>
          </div>
          <h3 className="info__price">${data && data.price}</h3>
          <p className="info__description">
            {data.description && data.description}
            <br />
            <span className="info__description-left">Hurry, only 6 left!</span>
          </p>

          <div className="info__color-wrapper">
            {data.product_colors &&
              data.product_colors.map((item, i) => (
                <span
                  key={i}
                  className="info__color"
                  style={{ backgroundColor: item.hex_value }}
                ></span>
              ))}
          </div>
          <div className="whishlist__wrapper">
            <p>
              <FontAwesomeIcon icon={faHeart} /> Add to Whishlist
            </p>
            <p>
              <FontAwesomeIcon icon={faPaperPlane} /> Delivery & Returns
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> Enquiry
            </p>
          </div>
          <div className="info__button-wrapper">
            <p className="info__counter">
              <span>-</span> 1 <span>+</span>
            </p>
            <a className="info__button">add to cart</a>
          </div>

          <div className="info__shipping">
            <p>
              <FontAwesomeIcon icon={faTruck} /> Spend <strong>$126.00</strong>{" "}
              more for
              <strong> FREE Shipping</strong>
            </p>
            <p>
              <FontAwesomeIcon icon={faClock} /> Estimated delivery between{" "}
              <span>Thursday 31 March</span> and
              <strong> Wednesday 06 April.</strong>
            </p>
            <p>
              Type: {data.category && data.category} -{" "}
              {data.product_type && data.product_type.replace("_", " ")}
            </p>

            {data.tag_list && (
              <p>
                Collections:{" "}
                {data.tag_list.map((item, i) => (
                  <a key={i}> {item},</a>
                ))}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
