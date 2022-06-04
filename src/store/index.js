import { combineReducers } from "redux";
import cardReducer from "./reducers/cardReducer";
import productDetailsReducer from "./reducers/getProductDetails";

import productReducer from "./reducers/productReducer";

const rootReducer = combineReducers({
  product: productReducer,
  details: productDetailsReducer,
  card: cardReducer,
});

export default rootReducer;
