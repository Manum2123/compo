import React, { useState } from "react";
import MiddleButton from "./Middlebtn";
import Cards from "./slider";
import tasks from "./task.json";

function App() {
  const [filterCriteria, setFilterCriteria] = useState(null);

  // Filter tasks based on criteria
  const filteredTasks = filterCriteria
    ? tasks.filter((task) =>
        typeof filterCriteria === "number"
          ? task.status === filterCriteria // Filter by status
          : task.title.toLowerCase().includes(filterCriteria.toLowerCase()) // Filter by search term
      )
    : tasks; // Show all tasks if no filter

  return (
    <div>
      <MiddleButton onFilter={setFilterCriteria} />
      <Cards tasks={filteredTasks} />
    </div>
  );
}

export default App;
