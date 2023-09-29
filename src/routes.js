import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";

 const RoutesCustom = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
      <Route path="*" element={<>Page not found</>}/>
    </Routes>
  );
};

export default RoutesCustom
