import React, { useEffect, useState } from "react";
import "./Header.scss";

const Header = () => {
    const texts = [
        "Andrii Zaitsev",
        "Senior Software Engineer",
        "Specializing in React.js"
    ];
    const [currentText, setCurrentText] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((prev) => (prev + 1) % texts.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="header" id="header">
            <div className="header__background"></div>
            <div className="header__content">
                <img
                    src="/images/profile.JPG"
                    alt="Andrii Zaytsev"
                    className="header__photo"
                />
                <div className="header__info">
                    <p className="typewriter header__text">
                        {texts[currentText]}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Header;
