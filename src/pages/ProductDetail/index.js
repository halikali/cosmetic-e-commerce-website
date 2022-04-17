import {
  faClock,
  faEnvelope,
  faHeart,
  faPaperPlane,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProductDetail.scss";

const index = () => {
  return (
    <div className="container details mt-3">
      <div className="row mx-auto">
        <div className="details__image-wrapper col-12 col-lg-6">
          <img
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt=""
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
          <h1 className="info__title"> casual indigo shirt </h1>
          <div className="info__evaluation">
            starring -{" "}
            <span className="info__evaluation--reviews"> 3 reviews </span>{" "}
            <span className="info__evaluation--stock">in stocks</span>
            <span> SKU:AVo1-D-46</span>
          </div>
          <h3 className="info__price">$382.00</h3>
          <p className="info__description">
            The construction lifts and smooths, giving your rear assets all they
            need for an amped-up style that screams sex appeal from every angle.
            With a chic hue, this one makes for a perfect pick this fall. So get
            your basics... <br />
            <span className="info__description-left">Hurry, only 6 left!</span>
          </p>

          <div className="info__color-wrapper">
            <span
              className="info__color"
              style={{ backgroundColor: "red" }}
            ></span>
            <span
              className="info__color"
              style={{ backgroundColor: "green" }}
            ></span>
            <span
              className="info__color"
              style={{ backgroundColor: "blue" }}
            ></span>
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
            <p>Type: Shirts</p>
            <p>
              Collections: All Products, Bottoms, Home page, Hot Collection,
              Men,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
