export const getAllProducts = (page = 1) => {
  return (dispatch) => {
    fetch(`http://localhost:4000/products?_page=${page}&_limit=12`)
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
