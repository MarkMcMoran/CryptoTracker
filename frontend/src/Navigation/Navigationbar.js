import React from "react";
import "./Navigationbar.scss";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li style={{float: "left"}}><a>Cryptoprice Tracker </a></li>
                <li><a>Profile </a></li>
                <li><a>Cryptocurrencies </a></li>
                <li><a>Portfolio</a></li>


            </ul>
        </nav>
    );
}

export default NavBar;
