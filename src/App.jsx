import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToGoal from "./01-ToGoal/ToGoal";
import Links from "./00-MainApp/Links";
import TourMainPage from "./02-OurTour/TourMainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Links />}></Route>
        <Route path="/togoal" element={<ToGoal />}></Route>
        <Route path="/ourtour" element={<TourMainPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
