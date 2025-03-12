import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="social-links">
                    <a 
                        href="https://github.com/NikitaGhimire/my-tasks-react-app.git" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link github"
                    >
                        <i className="fa-brands fa-github fa-lg"></i>
                        <span>GitHub</span>
                    </a>
                    <a 
                        href="https://linkedin.com/in/nikita-ghimire-info" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link linkedin"
                    >
                        <i className="fa-brands fa-linkedin fa-lg"></i>
                        <span>LinkedIn</span>
                    </a>
                </div>
                <div className="copyright">
                    <p>&copy; {new Date().getFullYear()} Nikita Ghimire. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;