import React from 'react';
import './navbar.css';
import RdrIcon from '../image/RDR_Icon.png';

function Navbar() {
    return (
        <div className="headOfWeb">
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
                            <li><a href="#">Products 
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                </svg>
                            </a></li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </div>
                    <div className="third">
                        <input type="text" placeholder="Search..." />
                        <button className="SButton" type="button">
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                            </a>
                        </button>
                        <button className="signIn" type="button">Sign In</button>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;

