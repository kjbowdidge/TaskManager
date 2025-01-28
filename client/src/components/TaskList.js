import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onComplete, onDelete }) => {
    return (
        <div>
            {tasks.length === 0 ? (
                <p>No tasks available. Add a new task!</p>
            ) : (
                tasks.map((task) => (
                    <TaskItem 
                        key={task.id} 
                        task={task} 
                        onComplete={onComplete} 
                        onDelete={onDelete} 
                    />
                ))
            )}
        </div>
    );
};

export default TaskList;



