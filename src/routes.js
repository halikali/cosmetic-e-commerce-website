import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import OrderPage from "./pages/OrderPage";

import ProductDetail from "./pages/ProductDetail";

const routes = [
  {
    path: "/",
    page: <HomePage />,
    name: "homepage",
  },
  {
    path: "/shop",
    page: <ShopPage />,
    name: "shoppage",
  },
  {
    path: "/shop/details",
    page: <ProductDetail />,
    name: "productDetail",
  },
  {
    path: "/order",
    page: <OrderPage />,
    name: "orderpage",
  }
];

export default routes;
