import React, { useEffect, useState } from "react";

import TaskList from "./components/Tasks/TaskList";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

const APP_URL =
  "https://to-do-app-63e05-default-rtdb.europe-west1.firebasedatabase.app/taskList.json";

function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const transformTasks = (tasksObj) => {
      const loadedTasks = [];

      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }

      setTasks(loadedTasks);
    };

    fetchTasks({ url: APP_URL }, transformTasks);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <div className="wrapper">
        <NewTask onAddTask={taskAddHandler} />
        <TaskList
          items={tasks}
          loading={isLoading}
          error={error}
          onFetch={fetchTasks}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
