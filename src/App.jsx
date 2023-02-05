import { useEffect, useState } from "react";

import { Header, AddTask, DisplayTasks, Footer } from "./components";

function App() {
    //get tasks from local storage
    const getLocalTasks = () => {
        const localTasks = JSON.parse(localStorage.getItem("tasks"));
        if (localTasks) {
            return localTasks;
        } else {
            return [];
        }
    };

    //states
    const [tasks, setTasks] = useState(getLocalTasks());
    const [task, setTask] = useState("");

    //add tasks to local storage

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return (
        <div className="app">
            <div className="container">
                <Header />
                <AddTask
                    task={task}
                    setTask={setTask}
                    tasks={tasks}
                    setTasks={setTasks}
                />

                <DisplayTasks tasks={tasks} setTasks={setTasks} />
                <Footer tasks={tasks} />
            </div>
        </div>
    );
}

export default App;
