import { AiOutlinePlus } from "react-icons/ai";

const AddTask = ({ task, setTask, tasks, setTasks }) => {
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
    return (
        <>
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
        </>
    );
};

export default AddTask;
