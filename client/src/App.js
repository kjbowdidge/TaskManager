import React, { useEffect, useState } from 'react';
import TaskList from './components/TaskList';
import TaskModal from './components/TaskModal';
import { fetchTasks, addTask, updateTask, deleteTask } from './features/tasks/tasksApi';
import { fetchToken, getToken } from './utils/auth';
import './styles.css';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        fetchToken().then((token) => {
            if (token) {
                console.log("Token retrieved:", token);
                fetchTasks().then(setTasks);
            }
        });
    }, []);

    const handleComplete = async (id) => {
        await updateTask(id);
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
        ));
    };

    const handleDelete = async (id) => {
        await deleteTask(id);
        setTasks(tasks.filter(task => task.id !== id));
    };

    const handleAddTask = async (taskName) => {
        const newTask = await addTask({ name: taskName, isCompleted: false });
        setTasks([...tasks, newTask]);
    };

    return (
        <div className="app-container">
            <h1>Task Manager</h1>
            <button className="add-task-btn" onClick={() => setModalOpen(true)}>+ Add Task</button> 
            <TaskList tasks={tasks} onComplete={handleComplete} onDelete={handleDelete} />
            <TaskModal 
                isOpen={isModalOpen} 
                onClose={() => setModalOpen(false)} 
                onConfirm={handleAddTask} 
            />
        </div>
    );
};

export default App;







