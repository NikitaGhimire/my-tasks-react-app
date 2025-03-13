import React, { useState } from 'react';

const EditTaskForm = ({ task, onSave, onCancel }) => {
    const [editedTask, setEditedTask] = useState({
        text: task.text,
        dueDate: task.dueDate,
        priority: task.priority
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...task, ...editedTask });
    };

    return (
        <div className="edit-task-overlay">
            <form onSubmit={handleSubmit} className="edit-task-form">
                <h4>Edit Task</h4>
                <div className="input-group">
                    <label htmlFor="edit-text">Task Description:</label>
                    <input
                        type="text"
                        id="edit-text"
                        value={editedTask.text}
                        onChange={(e) => setEditedTask({ ...editedTask, text: e.target.value })}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="edit-date">Due Date:</label>
                    <input
                        type="date"
                        id="edit-date"
                        value={editedTask.dueDate}
                        onChange={(e) => setEditedTask({ ...editedTask, dueDate: e.target.value })}
                        min={new Date().toISOString().split('T')[0]}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="edit-priority">Priority:</label>
                    <select
                        id="edit-priority"
                        value={editedTask.priority}
                        onChange={(e) => setEditedTask({ ...editedTask, priority: e.target.value })}
                        className="priority-select"
                    >
                        <option value="low">Low</option>
                        <option value="normal">Normal</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <div className="form-actions">
                    <button type="submit" className="btn-save">Save Changes</button>
                    <button type="button" className="btn-cancel" onClick={onCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default EditTaskForm;