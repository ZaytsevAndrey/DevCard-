import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.scss";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = (targetId) => {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
        setMenuOpen(false);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <div
                    className="navbar__logo"
                    onClick={scrollToTop}
                    style={{ cursor: "pointer" }}
                ></div>

                <ul className={`navbar__menu ${menuOpen ? "active" : ""}`}>
                    <li>
                        <a onClick={scrollToTop}>Home</a>
                    </li>
                    <li>
                        <a onClick={() => handleScroll("contacts")}>Contacts</a>
                    </li>
                    <li>
                        <a onClick={() => handleScroll("experience")}>Experience</a>
                    </li>
                    <li>
                        <a onClick={() => handleScroll("education")}>Education</a>
                    </li>
                    <li>
                        <a onClick={() => handleScroll("skills")}>Skills</a>
                    </li>
                    <li>
                        <a onClick={() => handleScroll("about")}>About</a>
                    </li>
                </ul>

                <div
                    className="navbar__toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
