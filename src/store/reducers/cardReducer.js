const initialState = {
  products: [],
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CARD":
      return {
        ...state,
        products: state.products.some(
          (product) => product.id === action.payload.id
        )
          ? state.products.map((item) =>
              item.id === action.payload.id
                ? {
                    ...item,
                    productCount:
                      item.productCount + action.payload.productCount,
                  }
                : item
            )
          : [...state.products, action.payload],
      };
    case "REMOVE_FROM_CARD":
      return {
        ...state,
        products: state.products.filter((item) => item.id !== action.payload),
      };

    case "INCREASE_PRODUCT_COUNT":
      return {
        ...state,
        products: state.products.map((item) =>
          item.id === action.payload
            ? { ...item, productCount: item.productCount + 1 }
            : item
        ),
      };

    case "DECREASE_PRODUCT_COUNT":
      return {
        ...state,
        products: state.products.map((item) =>
          item.id === action.payload
            ? { ...item, productCount: item.productCount - 1 }
            : item
        ),
      };
    default:
      return state;
  }
};

export default cardReducer;
