import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";

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
];

export default routes;
