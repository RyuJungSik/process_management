import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Check from "./routes/check";
import Area from "./routes/area";
import Navigation from "./Navigation";
import Grid from "./routes/grid";

const AppRouter = ({ flags, setFlags }) => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route
          exact
          path="/check"
          element={<Check flags={flags} setFlags={setFlags} />}
        />
        <Route
          exact
          path="/area"
          element={<Area flags={flags} setFlags={setFlags} />}
        />
        <Route exact path="/grid" element={<Grid />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
