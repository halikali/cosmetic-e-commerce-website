import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Checkbox from "./Checkbox";
import "./Sidebar.scss";

const Sidebar = () => {

  const closeFilter = (e) => {
    console.log("closeFilter");
    document.querySelector(".sidebar").classList.remove("sidebar__opened");
  }

  return (
    <div className="sidebar">
      <FontAwesomeIcon className="sidebar__icon" icon={faClose} onClick={(e) => closeFilter(e)} />
      <div className="categories">
        <h4 className="sidebar__title">Categories</h4>
        <ul
          className="categoris__list-wrapper"
          style={{ padding: 0, margin: 0 }}
        >
          <li className="categories__list-item">Women</li>
          <li className="categories__list-item">Men</li>
          <li className="categories__list-item">Shoes</li>
          <li className="categories__list-item">Popular</li>
          <li className="categories__list-item">Best Seller</li>
          <li className="categories__list-item">Accessories</li>
        </ul>
      </div>
      <div className="size">
        <h4 className="sidebar__title">Size</h4>
        <div className="size__list-wrapper">
          {[
            { size: "xs" },
            { size: "s" },
            { size: "m" },
            { size: "l" },
            { size: "xl" },
          ].map((item) => (
            <Checkbox name={item.size} />
          ))}
        </div>
      </div>
      <div className="product-type">
        <h4 className="sidebar__title">PRODUCT TYPE</h4>
        <div className="product-type__list-wrapper">
          {[
            { type: " Accessories " },
            { type: " Dress " },
            { type: " Shirts " },
            { type: " Shoes " },
            { type: " Shorts " },
            { type: " Tshirts " },
            { type: " Women's shoes " },
          ].map((item) => (
            <Checkbox name={item.type} />
          ))}
        </div>
      </div>
      <div className="brand">
        <h4 className="sidebar__title">BRAND</h4>
        <div className="brand__list-wrapper">
          {[
            { brandName: "Amyar" },
            { brandName: "Anne" },
            { brandName: "brunglia" },
            { brandName: "burberry" },
            { brandName: "Camper" },
            { brandName: "Charcoal" },
            { brandName: "Croock" },
            { brandName: "Givenchy" },
            { brandName: "Womeni" },
          ].map((item) => (
            <Checkbox name={item.brandName} />
          ))}
        </div>
      </div>
      <div className="availability">
        <h4 className="sidebar__title">AVAILABILITY</h4>
        <div className="availability__list-wrapper">
          {[{ status: "In stock" }, { status: "Out of stock" }].map((item) => (
            <Checkbox name={item.status} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
