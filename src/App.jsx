import React, { useState } from 'react';
import ClassInput from './components/TaskInput';
import TaskList from './components/TaskList';
import AppInfo from './components/AppInfo';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
    const [todos, setTodos] = useState([]);

    const handleEdit = (taskId) => {
        const taskToEdit = todos.find(task => task.id === taskId);
        if (taskToEdit) {
            // Update the task
            const updatedTasks = todos.map(task => 
                task.id === taskId 
                    ? { ...task, text: prompt('Edit task:', task.text) || task.text }
                    : task
            );
            setTodos(updatedTasks);
        }
    };

    const handleDelete = (taskId) => {
        setTodos(todos.filter(task => task.id !== taskId));
    };

    const handleAddTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    const handleToggleComplete = (taskId) => {
        setTodos(todos.map(task => 
            task.id === taskId 
                ? { ...task, completed: !task.completed }
                : task
        ));
    };

    return (
        <div className="App">
            <main className="main-container">
                <AppInfo />
                <ClassInput 
                    name="My Todo List" 
                    onAddTodo={handleAddTodo}
                />
                <TaskList 
                    todos={todos}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onToggleComplete={handleToggleComplete}
                />
            </main>
            <Footer />
        </div>
    );
}

export default App;
