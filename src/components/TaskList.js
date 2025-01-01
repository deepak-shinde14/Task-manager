import React from "react";
import { FaTrashAlt, FaCheckCircle, FaCircle } from "react-icons/fa";

function TaskList({ tasks, toggleTaskStatus, deleteTask, filter, clearCompleted }) {
  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.done;
    if (filter === "pending") return !task.done;
    return true;
  });

  return (
    <div className="task-list">
      {filteredTasks.length === 0 ? (
        <p>No tasks available based on your filter.</p>
      ) : (
        filteredTasks.map((task) => (
          <div key={task.id} className={`task ${task.done ? "done" : ""}`}>
            <div className="task-details">
              <button className="status-btn" onClick={() => toggleTaskStatus(task.id)}>
                {task.done ? <FaCheckCircle /> : <FaCircle />}
              </button>
              <span>{task.name}</span>
            </div>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>
              <FaTrashAlt />
            </button>
          </div>
        ))
      )}
      <button className="clear-completed" onClick={clearCompleted}>
        Clear Completed Tasks
      </button>
    </div>
  );
}

export default TaskList;
