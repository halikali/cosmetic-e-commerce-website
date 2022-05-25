export const getAllProducts = () => {
  return (dispatch) => {
    fetch("http://localhost:4000/products/")
      .then((response) => response.json())
      .then((products) =>
        dispatch({ type: "GET_ALL_PRODUCTS_SUCCESS", payload: products })
      );
  };
};

export const getProductById = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:4000/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "GET_PRODUCT_DETAILS_SUCCESS", payload: data });
      });
  };
};
