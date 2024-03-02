import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from "./Components/Landing";
import Signin from "./Components/Signin";
import Service from "./Components/Service";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Landing />}
        />
        <Route
          exact
          path="/signin"
          element={<Signin />} // Render Signin component for /signin route
        />
        <Route
          exact
          path="/Service"
          element={<Service />} // Render Signin component for /signin route
        />
      </Routes>
    </Router>
  );
}

export default App;
