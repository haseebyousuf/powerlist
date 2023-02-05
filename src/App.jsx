import { useEffect, useState } from "react";
import { GiHornedHelm } from "react-icons/gi";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
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

    //add task
    const handleSubmit = (e) => {
        e.preventDefault();
        if (task === "") {
            alert("Enter some Task Man!");
            return;
        }
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
    };

    //toggle completed
    const toggleComplete = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    //add tasks to local storage

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

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
                    <div className="form-input">
                        <AiOutlinePlus onClick={handleSubmit} />
                        <input
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                            type="text"
                            placeholder="Add a Task"
                        />
                    </div>
                </form>

                <div>
                    {tasks.map((task) => (
                        <div
                            key={task.id}
                            className={`task-row ${
                                task.completed ? "completed" : ""
                            }`}
                        >
                            <p>
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onClick={() => toggleComplete(task.id)}
                                ></input>
                                {task.taskName}
                            </p>
                            <AiOutlineClose
                                onClick={() => deleteTask(task.id)}
                                className="close"
                            />
                        </div>
                    ))}
                </div>
                <p className="message">
                    {tasks.length < 1
                        ? "You Have No Tasks!"
                        : `Tasks: ${tasks.length}`}
                </p>
            </div>
        </div>
    );
}

export default App;
