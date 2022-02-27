import React from "react";
import { Route, Routes } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import routes from "./routes";
import "./app.scss";

const App = () => {
  return (
    <div className="app">
      <NavigationBar />
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.page} key={route.name} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
