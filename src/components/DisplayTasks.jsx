import { AiOutlineClose } from "react-icons/ai";

const DisplayTasks = ({ tasks, setTasks }) => {
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

    return (
        <div>
            {tasks.map((task) => (
                <div
                    key={task.id}
                    className={`task-row ${task.completed ? "completed" : ""}`}
                >
                    <p>
                        <input
                            type="checkbox"
                            defaultChecked={task.completed}
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
    );
};

export default DisplayTasks;
