import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <>
        <footer className="py-4  text-white text-center position-relative background-footer">
        <div className="container">
            <p className="lead">
                Copyright © 2023 Rahma Samy
            </p>
            <a href="/#" className="position-absolute bottom-0 end-0 p-3">
                <i className="bi bi-arrow-up-circle h2"></i>
            </a>
        </div>
        </footer>
        </>
    );
}

export default Footer;
