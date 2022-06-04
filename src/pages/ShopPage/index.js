import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { CategoryCard } from "../../components/CategoryCard/categoryCard";
import Sidebar from "../../components/Sidebar";
import { getAllProducts } from "../../store/actions";
import "./ShopPage.scss";

const ShopPage = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const openFilter = () => {
    document.querySelector(".sidebar").classList.add("sidebar__opened");
  };

  return (
    <Container style={{ marginTop: "20px" }}>
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col md={9}>
          <div className="category-head">
            <img
              className="category-head__image"
              src="http://cdn.shopify.com/s/files/1/0036/7306/3491/collections/collection-banner.jpg?v=1565000809"
            ></img>
            <h5 className="category-head__title">Hot Collection</h5>
            <p className="category-head__desc">
              The very latest in globally-recognised clothing brands offers you
              with an exquisite range of Branded Clothes, Artificial Jewelry,
              Shoes, Beauty Products and Accessories for Women, Men & Kids at
              affordable price
            </p>
          </div>

          <a
            className="filter-button mb-4 mx-auto"
            onClick={(e) => openFilter(e)}
          >
            Filter
          </a>

          <Row xs={1} md={2} lg={2} xl={3} className="g-4">
            {product.data &&
              product.data.map((item, i) => (
                <Col key={i}>
                  <Link to={`/shop/details/${item.id}`}>
                    <CategoryCard product={item} key={item.id} />
                  </Link>
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ShopPage;
