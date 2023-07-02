import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BottomNavigation = () => {
    const [activeLink, setActiveLink] = useState('');
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        if (path === '/likes') {
            setActiveLink('likes');
        } else if (path === '/') {
            setActiveLink('home');
        }
    }, [location]);

    const handleClick = (activeNav: string) => {
        setActiveLink(activeNav);
        if (activeNav === 'home') window.location.href = '/';
        else if (activeNav === 'likes') window.location.href = '/likes';
    };

    return (
        <div className="nav-wrapper">
            <div className="nav">
                <div
                    className={`nav-item ${activeLink === 'home' ? 'active' : ''}`}
                    onClick={() => handleClick('home')}
                >
                    <i className="material-icons home-icon">home</i>
                    <span className="nav-text">Home</span>
                </div>
                <div
                    className={`nav-item ${activeLink === 'likes' ? 'active' : ''}`}
                    onClick={() => handleClick('likes')}
                >
                    <i className="material-icons favorite-icon">favorite</i>
                    <span className="nav-text">Likes</span>
                </div>
            </div>
        </div>
    );
};

export default BottomNavigation;
