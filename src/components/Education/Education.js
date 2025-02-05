import React from "react";
import "./Education.scss";

const Education = () => (
    <section id="education">
        <div className="education container">
            <h2>Education</h2>

            <div className="education__item">
                <h3>Master's Degree in Engineering</h3>
                <p className="education__institution">Donetsk National Technical University, Ukraine</p>
                <p className="education__years">2007 – 2012</p>
            </div>

            <div className="education__item">
                <h3>Mathematics and Computer Science</h3>
                <p className="education__institution">Donetsk National Technical Lyceum, Ukraine</p>
                <p className="education__years">2004 – 2007</p>
            </div>
        </div>
    </section>
);

export default Education;
