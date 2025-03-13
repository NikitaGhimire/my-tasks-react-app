import React from 'react';
import '../styles/AppInfo.css';

const AppInfo = () => {
    return (
        <div className="app-info">
            <h1 className="title-animate">Task Master</h1>
            {/* <p className="description-animate">
                Streamline your daily tasks with our intuitive todo list application
            </p> */}
            
            <div className="features-container">
                <div className="feature-item">
                    <span className="feature-icon">✨</span>
                    <h3>Simple & Intuitive</h3>
                    {/* <p>Easy to use interface for managing your tasks</p> */}
                </div>
                
                <div className="feature-item">
                    <span className="feature-icon">🚀</span>
                    <h3>Stay Organized</h3>
                    {/* <p>Keep track of all your tasks in one place</p> */}
                </div>
                
                <div className="feature-item">
                    <span className="feature-icon">⚡️</span>
                    <h3>Quick Actions</h3>
                    {/* <p>Add, edit, and delete tasks with ease</p> */}
                </div>
            </div>
        </div>
    );
};

export default AppInfo;