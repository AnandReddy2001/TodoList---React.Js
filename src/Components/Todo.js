import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const InputChange = (event) => {
    setInputValue(event.target.value);
  };

  const AddTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const TaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const DeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const EditTask = (index) => {
    setEditIndex(index);
    setEditValue(tasks[index].text);
  };

  const SaveTask = () => {
    if (editValue.trim() !== "") {
      const newTasks = [...tasks];
      newTasks[editIndex].text = editValue;
      setTasks(newTasks);
      setEditIndex(null);
    }
  };
  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className="child-container">
        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={InputChange}
            placeholder="Enter task..."
          />
          <button onClick={AddTask}>Add Task</button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className={task.completed ? "completed" : ""}>
              {index === editIndex ? (
                <>
                  <input
                    id="save-task"
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                  <button onClick={SaveTask}>Save</button>
                </>
              ) : (
                <div className="task-list">
                  <span>{task.text}</span>
                  <div className="task-controls">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => TaskCompletion(index)}
                    />
                    <div>
                      <button onClick={() => EditTask(index)}>Edit</button>
                      <button onClick={() => DeleteTask(index)}>Delete</button>
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
