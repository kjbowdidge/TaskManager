import React from 'react';
import { FaTrash } from 'react-icons/fa';
import '../styles.css';

const TaskItem = ({ task, onComplete, onDelete }) => {
    return (
        <div className="task-item">
            <input 
                type="checkbox" 
                checked={task.isCompleted} 
                onChange={() => onComplete(task.id)} 
                className="task-checkbox"
            />
            <span className={task.isCompleted ? "task-text completed" : "task-text"}>
                {task.name}
            </span>
            <button onClick={() => onDelete(task.id)} className="delete-btn">
                <FaTrash />
            </button>
        </div>
    );
};

export default TaskItem;




