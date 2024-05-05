import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <HomePage />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
