import React, { useState, useEffect } from 'react';
import ClassInput from './components/TaskInput';
import TaskList from './components/TaskList';
import AppInfo from './components/AppInfo';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
    const [todos, setTodos] = useState(() => {
        try {
            const savedTodos = localStorage.getItem('todos');
            return savedTodos ? JSON.parse(savedTodos) : [];
        } catch (error) {
            console.error('Error loading todos:', error);
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('todos', JSON.stringify(todos));
        } catch (error) {
            console.error('Error saving todos:', error);
        }
    }, [todos]);

    const handleEdit = (taskId, updatedTask) => {
        // Remove the prompt/alert and directly update the task
        const updatedTasks = todos.map(task => 
            task.id === taskId ? updatedTask : task
        );
        setTodos(updatedTasks);
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

    const clearAllTasks = () => {
        if (window.confirm('Are you sure you want to clear all tasks?')) {
            setTodos([]);
            localStorage.removeItem('todos');
        }
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
                    onClearAll={clearAllTasks}
                />
            </main>
            <Footer />
        </div>
    );
}

export default App;
