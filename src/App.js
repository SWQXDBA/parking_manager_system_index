import {LoginForm} from "./components/LoginForm";
import React from "react";


import {routers} from "./configs/routers";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
console.log(routers)
  return (
    <div className="App">
      <Router>
          <Routes>
              {
                  //  <Route path = '/login' component={LoginForm}/>
                  routers.map(item=><Route key = {item.path} {...item}/>)
              }
          </Routes >

      </Router>



    </div>
  );
}

export default App;
