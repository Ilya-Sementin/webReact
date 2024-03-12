import React from "react";
import "./Header.css";

export const Header = () => {
    return(
        <header className="header">
            <span className="header__logo">Logo</span>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item"><a>Main</a></li>
                    <li className="header__nav-item"><a>About</a></li>
                    <li className="header__nav-item"><a>Addres</a></li>
                    <li className="header__nav-item"><a>Contacts</a></li>
                    <li className="header__nav-item"><a>LogIn</a></li>
                </ul>
            </nav>
        </header>
    );
};