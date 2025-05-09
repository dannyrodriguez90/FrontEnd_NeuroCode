import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes.jsx";

function App() {
  const routing = useRoutes(routes);
  return routing;
}

export default App;
