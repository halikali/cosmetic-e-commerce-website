import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
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
];

export default routes;
