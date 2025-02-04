import React from "react";
import "./About.scss";

const About = () => (
    <div className="wrapper" id="about">
        <section className="about">
            <h2>About Me</h2>
            <p>
                I am passionate about <span className="highlight">programming</span> and truly value the people I work with in any company.
                My goal is to contribute to <span className="highlight">interesting projects</span> that are beneficial to society.
            </p>
            <p>
                My interests include <span className="keyword">artificial intelligence</span>,
                <span className="string"> cryptocurrencies</span>, and the gaming industry.
                I strive to stay updated with the latest trends and technologies in these fields.
            </p>
            <p>
                Working on meaningful projects that solve real-world problems motivates me,
                and I am always eager to collaborate with like-minded professionals.
            </p>
        </section>
    </div>
);

export default About;
