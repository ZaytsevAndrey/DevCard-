import React, { useEffect, useState } from "react";
import "./Header.scss";

const Header = () => {
    const line1 = "Software Engineer";
    const line2 = "Specializing in React.js";

    const [typedText, setTypedText] = useState("");
    const [currentLine, setCurrentLine] = useState(1);
    const [charIndex, setCharIndex] = useState(0);
    const [showSecondLine, setShowSecondLine] = useState(false);
    const [showThirdLine, setShowThirdLine] = useState(false);

    useEffect(() => {
        if (currentLine === 1 && charIndex < line1.length) {
            const timeout = setTimeout(() => {
                setTypedText((prev) => prev + line1[charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 100);

            return () => clearTimeout(timeout);
        } else if (currentLine === 1 && charIndex === line1.length) {
            setTimeout(() => {
                setShowSecondLine(true);
                setTypedText("");
                setCharIndex(0);
                setCurrentLine(2);
            }, 800);
        }
    }, [charIndex, currentLine]);

    useEffect(() => {
        if (currentLine === 2 && showSecondLine && charIndex < line2.length) {
            const timeout = setTimeout(() => {
                setTypedText((prev) => prev + line2[charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 100);

            return () => clearTimeout(timeout);
        } else if (currentLine === 2 && charIndex === line2.length) {
            setTimeout(() => {
                setShowThirdLine(true);
            }, 800);
        }
    }, [charIndex, currentLine, showSecondLine]);

    return (
        <div className="header" id="header">
            <div className="header__background"></div>
            <div className="header__content">
                <img src="/images/profile.JPG" alt="Andrii Zaitsev" className="header__photo" />
                <div className="header__info">
                    <p className="header__static-text">Hello, I'm <span className="highlight">Andrii Zaitsev</span></p>
                    <p className="header__dynamic-text">
                        {showSecondLine ? (
                            <>
                                I'm <span className="highlight">{ line1 }</span>
                            </>
                        ) : (
                            `I'm ${typedText}`
                        )}
                    </p>
                    <p className="header__dynamic-text">
                        { showSecondLine
                            ? showThirdLine
                                ? (<>Specializing in <span className="highlight">React.js</span></>)
                                : (typedText)
                            : null
                        }
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Header;
