import HomePage from "./pages/HomePage";
import SecondPage from "./pages/SecondPage";

const routes = [
  {
    path: "/",
    page: <HomePage />,
    name: "homepage",
  },
  {
    path: "/second",
    page: <SecondPage />,
    name: "secondpage",
  },
];

export default routes;
