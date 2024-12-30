import React, { useState } from "react";
import Btn from "./Middlebtn";
import Cards from "./slider";
import tasks from "./task.json";

function App() {
  
  return (
    <div>
      <div >
      <h1> Filter  </h1>
    <Btn /> <br>
    </br>
    <Cards /> 
    </div>
    </div>
  );
}

export default App;
