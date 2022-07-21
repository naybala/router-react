import React, { useEffect, useState } from "react";
import "./Navbar.css"
const imgurl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAwp8sJeH4aRAmPH0_Zf6ZK-Z1H2fuigeW3A&usqp=CAU"



const Navbar = () => {
    const clickNav = () => {
        const removeNav = document.querySelector('.collapse');
        removeNav.classList.remove("show");
    }



    return (
        <>
            <nav className="navbar navbar-expand-lg py-3 fixed-top bg-light" >
                <div className="container">
                    <img
                        src={imgurl}
                        className="img-fluid rounded-2"
                        alt=""
                    />
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navmenu"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navmenu">
                        <ul className="navbar-nav ms-auto" onClick={clickNav}>
                            <li className="nav-item">
                                <a href="!#" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="!#" className="nav-link">About</a>
                            </li>
                            <li className="nav-item">
                                <a href="!#" className="nav-link">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a href="!#" className="nav-link">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <br /><br /><br />
            <br /><br /><br /> <br />
        </>
    )
}

export default Navbar;