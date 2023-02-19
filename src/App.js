import React,{useState,createContext} from "react";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import ToGoal from "./01-ToGoal/ToGoal";
import Links from "./Links";
export const GlobalData = createContext();

function App() {
  const [url,setUrl] = useState('');

  return (
    <Router>
    <GlobalData.Provider value={{url,setUrl}}>
      <Routes>
          <Route path="/" element={<Links/>}></Route>
          <Route path="/togoal" element={<ToGoal/>} ></Route>
      </Routes>

    </GlobalData.Provider>
    </Router>
  );
}

export default App;


{/* <Route path="/job" element={<Job/>}></Route> */}
{/* <Route path="/search" element={<Search/>}></Route> */}
{/* <Route path="/filter" element={ <Filter/>}></Route> */}