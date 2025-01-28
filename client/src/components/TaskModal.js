import React, { useState } from 'react';
import '../styles.css'; 

const TaskModal = ({ isOpen, onClose, onConfirm }) => {
    const [taskName, setTaskName] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName.trim() === '') return;
        onConfirm(taskName);
        setTaskName('');
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Add New Task</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Enter task name" 
                        value={taskName} 
                        onChange={(e) => setTaskName(e.target.value)} 
                        className="modal-input"
                    />
                    <div className="modal-buttons">
                        <button type="submit" className="confirm-btn">Confirm</button>
                        <button type="button" onClick={onClose} className="cancel-btn">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TaskModal;
