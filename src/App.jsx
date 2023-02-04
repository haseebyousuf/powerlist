import { useState } from "react";
import { GiHornedHelm } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";
function App() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    //add task
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: Math.floor(Math.random() * 1000),
            taskName: task,
            completed: false,
        };
        setTasks([...tasks, newTask]);
        setTask("");
    };

    //delete task
    const deleteTask = (id) => {
        let fiteredTasks = [...tasks].filter((task) => task.id !== id);
        setTasks(fiteredTasks);
        console.log("Deleted");
    };

    //toggle completed

    const toggleComplete = (id) => {};
    const date = new Date();
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    return (
        <div className="app">
            <div className="container">
                <h1>
                    <GiHornedHelm />
                    Powerlist
                </h1>
                <div className="date">
                    <p>{days[date.getDay()]}</p>
                    <p>{date.getDate()},</p>
                    <p>{months[date.getMonth()]}</p>
                    <p>{date.getFullYear()}</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <AiOutlinePlus />
                    <input
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        type="text"
                        placeholder="Add a Task"
                    />
                </form>

                <div>
                    {tasks.map((task) => (
                        <div key={task.id}>
                            <p>
                                {task.taskName}
                                <button onClick={() => deleteTask(task.id)}>
                                    Delete
                                </button>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
