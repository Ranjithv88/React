import React from 'react';
import './navbar.css';
import RdrIcon from '../image/RDR_Icon.png';

function Navbar() {
    return (
        <div className="headOfWeb">
            {/*======== Icon Bootstrap Link ========*/}
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet"/>
            {/*======== Navigation Bar ========*/}
            <header>
                <nav>
                    <div className="first">
                        <a href="#"><img src={RdrIcon} height="80px" width="140px" alt="Logo" /></a>
                        <a href="#"><h1>Red Dead Redemption</h1></a>
                    </div>
                    <div className="second">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Products<i class="bi bi-caret-down-fill"></i></a></li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </div>
                    <div className="third">
                        <input type="text" placeholder="Search..." />
                        <button className="SButton" type="button"><a href="#"><i class="bi bi-search"></i></a></button>
                        <button className="signIn" type="button">Sign In</button>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;

