import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

import "../App.css";
import AllRoutes from "./AllRoutes";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        {AllRoutes.map((item) => {
          const { name, path, component } = item;
          return (
            <Route
              key={item.name}
              // element={item.private ? <PrivateRoute /> : <PublicRoute />}
            >
              <Route name={name} exact={true} path={path} element={component} />
            </Route>
          );
        })}
      </Routes>
    </>
  );
};

export default App;
