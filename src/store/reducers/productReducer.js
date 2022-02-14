const initialState = {
  data: [],
  isLoad: false,
  error: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS_REQUEST":
      return { ...state, isLoad: false };

    case "GET_ALL_PRODUCTS_SUCCESS":
      return { ...state, data: action.payload, isLoad: true };

    case "GET_ALL_PRODUCTS_FAILURE":
      return { ...state, error: action.payload, isLoad: false };
      
    default:
      return state;
  }
};

export default productReducer;
