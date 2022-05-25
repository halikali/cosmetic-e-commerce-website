const initialState = {
  data: [],
  isLoad: false,
  error: "",
};

const productDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT_DETAILS_REQUEST":
      return { ...state, isLoad: false };
    case "GET_PRODUCT_DETAILS_SUCCESS":
      return { ...state, isLoad: true, data: action.payload };
    case "GET_PRODUCT_DETAILS_FAILURE":
      return { ...state, isLoad: false, error: action.payload };
    default:
      return state;
  }
};

export default productDetailsReducer;
