import React, { useState } from 'react';
import Count from './Count';
import EditTaskForm from './EditTaskForm';
import '../styles/App.css';

const TaskList = ({ todos, onEdit, onDelete, onToggleComplete, onClearAll }) => {
    const [filter, setFilter] = useState('all');
    const [editingTask, setEditingTask] = useState(null);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString();
    };

    const filteredTodos = todos.filter(task => {
        if (filter === 'active') return !task.completed;
        if (filter === 'completed') return task.completed;
        return true;
    });

    const handleEditClick = (task) => {
        setEditingTask(task);
    };

    const handleSaveEdit = (updatedTask) => {
        onEdit(updatedTask.id, updatedTask);
        setEditingTask(null);
    };

    return (
        <div className={`task-list-container ${editingTask ? 'editing' : ''}`} style={{ position: 'relative' }}>
            <div className="task-header">
                <h4>All Tasks</h4>
                {todos.length > 0 && (
                    <button 
                        onClick={onClearAll}
                        className="btn-clear"
                        title="Clear all tasks"
                    >
                        Clear All
                    </button>
                )}
            </div>
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
                                onClick={() => handleEditClick(task)} 
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
            {editingTask && (
                <EditTaskForm
                    task={editingTask}
                    onSave={handleSaveEdit}
                    onCancel={() => setEditingTask(null)}
                />
            )}
        </div>
    );
};

export default TaskList;