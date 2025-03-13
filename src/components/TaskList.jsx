import React, { useState } from 'react';
import Count from './Count';
import '../styles/App.css';

const TaskList = ({ todos, onEdit, onDelete, onToggleComplete }) => {
    const [filter, setFilter] = useState('all');

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString();
    };

    const filteredTodos = todos.filter(task => {
        if (filter === 'active') return !task.completed;
        if (filter === 'completed') return task.completed;
        return true;
    });

    return (
        <div className="task-list-container">
            <h4>All Tasks</h4>
            <Count count={todos.length} />
            <div className="task-filters">
                <button 
                    className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                    onClick={() => setFilter('all')}
                >
                    All
                </button>
                <button 
                    className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
                    onClick={() => setFilter('active')}
                >
                    Active
                </button>
                <button 
                    className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
                    onClick={() => setFilter('completed')}
                >
                    Completed
                </button>
            </div>
            <ul className="task-list">
                {filteredTodos.map((task) => (
                    <li key={task.id} 
                        className={`task-item ${task.completed ? 'completed' : ''}`}
                        data-priority={task.priority}>
                        <div className="task-content">
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => onToggleComplete(task.id)}
                            />
                            <div className="task-details">
                                <span className="task-text">{task.text}</span>
                                <div className="task-meta">
                                    {task.dueDate && (
                                        <span className="due-date">
                                            Due: {formatDate(task.dueDate)}
                                        </span>
                                    )}
                                    <span className={`task-priority ${task.priority}`}>
                                        {task.priority}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="task-actions">
                            <button 
                                onClick={() => onEdit(task.id)} 
                                className="btn-edit"
                                title="Edit task"
                            >
                                <i className="fas fa-edit"></i>
                            </button>
                            <button 
                                onClick={() => onDelete(task.id)} 
                                className="btn-delete"
                                title="Delete task"
                            >
                                <i className="fas fa-trash"></i>
                            </button>
                        </div>
                    </li>
                ))}
                {filteredTodos.length === 0 && (
                    <p className="empty-message">No tasks found</p>
                )}
            </ul>
        </div>
    );
};

export default TaskList;