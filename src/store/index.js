import { combineReducers } from "redux";
import productDetailsReducer from "./reducers/getProductDetails";

import productReducer from "./reducers/productReducer";

const rootReducer = combineReducers({
  product: productReducer,
  details: productDetailsReducer,
});

export default rootReducer;
