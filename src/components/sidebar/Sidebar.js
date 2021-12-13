import React from 'react';
import sb from './sidebar.module.scss';
import menu from '../../image/Menu Items.png';

const Sidebar = () => {
    return (
        <div className={sb.sidebar}>
            <img src={menu} alt="menu"/>
        </div>
    );
};

export default Sidebar;