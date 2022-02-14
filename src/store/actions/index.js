export const getAllProducts = () => {
  return (dispatch) => {
    dispatch({ type: "GET_ALL_PRODUCTS_REQUEST" });

    dispatch({ type: "GET_ALL_PRODUCTS_SUCCESS" });
  };
};
