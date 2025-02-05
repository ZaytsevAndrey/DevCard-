import React from "react";
import { FaReact, FaJsSquare, FaNodeJs, FaDatabase, FaTools, FaCode, FaMobileAlt, FaServer } from "react-icons/fa";
import "./Skills.scss";

const Skills = () => (
    <section id="skills">
        <div className="skills container">
            <h2>Skills</h2>

            <div className="skills__category">
                <h3>Core Skills</h3>
                <div className="skills__list">
                    <div className="skills__item"><FaJsSquare className="skills__icon" /> JavaScript (ES6+), TypeScript</div>
                    <div className="skills__item"><FaReact className="skills__icon" /> React, Redux</div>
                    <div className="skills__item"><FaCode className="skills__icon" /> RxJS</div>
                </div>
            </div>

            <div className="skills__category">
                <h3>Backend Communication</h3>
                <div className="skills__list">
                    <div className="skills__item"><FaServer className="skills__icon" /> REST API, GraphQL</div>
                    <div className="skills__item"><FaServer className="skills__icon" /> Socket.io</div>
                    <div className="skills__item"><FaServer className="skills__icon" /> Firebase</div>
                </div>
            </div>

            <div className="skills__category">
                <h3>Frameworks & Libraries</h3>
                <div className="skills__list">
                    <div className="skills__item"><FaMobileAlt className="skills__icon" /> React Native</div>
                    <div className="skills__item"><FaReact className="skills__icon" /> AngularJS</div>
                    <div className="skills__item"><FaCode className="skills__icon" /> Lodash, Webpack, Babel</div>
                    <div className="skills__item"><FaCode className="skills__icon" /> Material UI, SCSS</div>
                </div>
            </div>

            <div className="skills__category">
                <h3>Databases</h3>
                <div className="skills__list">
                    <div className="skills__item"><FaDatabase className="skills__icon" /> PostgreSQL, MySQL</div>
                    <div className="skills__item"><FaDatabase className="skills__icon" /> PHP (Basic)</div>
                </div>
            </div>

            <div className="skills__category">
                <h3>Tools</h3>
                <div className="skills__list">
                    <div className="skills__item"><FaTools className="skills__icon" /> Jira, Confluence, Bitbucket, GitHub, GitLab</div>
                    <div className="skills__item"><FaTools className="skills__icon" /> Figma, Zeplin</div>
                    <div className="skills__item"><FaTools className="skills__icon" /> Postman</div>
                    <div className="skills__item"><FaTools className="skills__icon" /> Docker (Basic)</div>
                </div>
            </div>
        </div>
    </section>
);

export default Skills;
