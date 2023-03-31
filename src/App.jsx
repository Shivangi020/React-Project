import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToGoal from "./01-ToGoal/ToGoal";
import Links from "./00-MainApp/Links";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Links />}></Route>
        <Route path="/togoal" element={<ToGoal />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
