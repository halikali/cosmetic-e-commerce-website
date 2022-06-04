export const addToCard = (product) => {
  return (dispatch) => {
    dispatch({ type: "ADD_TO_CARD", payload: product });
  };
};

export const removeFromCard = (id) => {
  return (dispatch) => {
    dispatch({ type: "REMOVE_FROM_CARD", payload: id });
  };
};

export const increaseProductCount = (id) => {
  return (dispatch) => {
    dispatch({ type: "INCREASE_PRODUCT_COUNT", payload: id });
  };
};

export const decreaseProductCount = (id) => {
  return (dispatch) => {
    dispatch({ type: "DECREASE_PRODUCT_COUNT", payload: id });
  };
};
