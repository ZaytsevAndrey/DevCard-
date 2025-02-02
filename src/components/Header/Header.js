import React from "react";
import "./Header.scss";

const Header = () => (
    <div className="header" id="header">
        <div className="header__background"></div>
        <div className="header__content">
            <img
                src="/images/profile.jpg"
                alt="Andriy Zaytsev"
                className="header__photo"
            />
            <div className="header__info">
                <h1 className="header__name">Andriy Zaytsev</h1>
                <p className="header__position">Senior Software Engineer</p>
                <p className="header__specialization">
                    Specializing in React.js and scalable front-end applications
                </p>
            </div>
        </div>
    </div>
);

export default Header;
