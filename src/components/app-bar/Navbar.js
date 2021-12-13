import React from 'react';
import b from './Navbar.module.scss';
import p from "../../image/Main Logo.png";
import a from "../../image/avatar.png";

const Navbar = () => {
    return (
        <div className={b.bar}>
            <div className={b.wrapper}>
                <div className={b.left_block}>
                    <img src={p} alt="icon"/>
                    <h1>Tasks</h1>
                </div>
                <div className={b.right_block}>
                    <div className={b.name}>Leanne Graham</div>
                    <img src={a} alt="avatar"/>
                    <div className={b.bar_list}></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;