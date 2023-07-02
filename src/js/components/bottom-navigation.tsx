import { useState } from 'react';

const BottomNavigation = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index: any) => {
        setActiveIndex(index);
    };

    return (
        <div className="nav-wrapper">
            <div className="nav">
                <div
                    className={`nav-item ${activeIndex === 0 ? 'active' : ''}`}
                    onClick={() => handleClick(0)}
                >
                    <i className="material-icons home-icon">home</i>
                    <span className="nav-text">Home</span>
                </div>
                <div
                    className={`nav-item ${activeIndex === 1 ? 'active' : ''}`}
                    onClick={() => handleClick(1)}
                >
                    <i className="material-icons favorite-icon">favorite</i>
                    <span className="nav-text">Likes</span>
                </div>
            </div>
        </div>

    );
};

export default BottomNavigation;
