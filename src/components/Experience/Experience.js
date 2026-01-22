import React from "react";
import "./Experience.scss";

const Experience = () => (
    <section id="experience">
        <div className="experience container">
            <h2>Experience</h2>

            <div className="experience__item">
                <h3>Senior Frontend Engineer</h3>
                <p className="experience__company">JOMY AI | Aug 2025 – Present</p>
                <p>
                    JOMY AI is an innovative AI-powered startup developing cutting-edge solutions. As a key member of a small, agile frontend team,
                    I took on significant responsibilities and ownership of the product's frontend architecture and development.
                </p>
                <ul>
                    <li>Led frontend development as a core team member, taking full ownership of features from conception to deployment with strong self-management and autonomy.</li>
                    <li>Built scalable React applications using TypeScript, ensuring type safety and maintainable code architecture.</li>
                    <li>Actively leveraged AI development assistants to accelerate development cycles while maintaining high code quality standards.</li>
                    <li>Established development best practices, code review processes, and technical standards for the frontend team.</li>
                    <li>Delivered high-quality features under tight deadlines, demonstrating strong problem-solving and adaptability in a fast-paced startup environment.</li>
                </ul>
            </div>

            <div className="experience__item">
                <h3>Senior Software Engineer (React/Redux)</h3>
                <p className="experience__company">Innovecs/Ummanu | Jan 2018 – Feb 2025</p>
                <p>
                    Ummanu is a global leader in telemedicine, providing services to over 18 million clients and delivering more than 2 million remote consultations annually.
                </p>
                <ul>
                    <li>Developed core platform features, including video and SIP call systems, interactive modules, and user-friendly interfaces.</li>
                    <li>Optimized application performance and ensured scalability for international use.</li>
                    <li>Contributed to the development of administrative consoles for management and analytics.</li>
                    <li>Integrated APIs and third-party services to enhance product reliability.</li>
                </ul>
            </div>

            <div className="experience__item">
                <h3>FrontEnd Developer (React Native)</h3>
                <p className="experience__company">Empeek | Aug 2017 – Jan 2018</p>
                <p>
                    Empeek specializes in developing mobile applications for healthcare and sports. The primary project was a platform for organizing outdoor training sessions.
                </p>
                <ul>
                    <li>Developed mobile applications for iOS and Android, delivering an intuitive user interface.</li>
                    <li>Enhanced app performance and usability for outdoor training enthusiasts.</li>
                </ul>
            </div>

            <div className="experience__item">
                <h3>FrontEnd Developer (Angular)</h3>
                <p className="experience__company">ESportsField | Jul 2016 – May 2017</p>
                <p>
                    ESportsField is a platform for managing and automating esports tournaments, enabling seamless organization of matches and efficient competition management.
                </p>
                <ul>
                    <li>Developed the application frontend using AngularJS, focusing on a user experience for tournament participants.</li>
                    <li>Implemented media widgets to display game highlights and match data dynamically.</li>
                    <li>Designed and developed tournament grids for visualizing match progress and schedules.</li>
                </ul>
            </div>

            <div className="experience__item">
                <h3>Web Developer</h3>
                <p className="experience__company">Ahead-Gaming | Jan 2013 – Jul 2014</p>
                <p>
                    Ahead-Gaming was a startup project for a Ukrainian cyber sports organization, aimed at establishing an online presence and supporting community activities.
                </p>
                <ul>
                    <li>Co-founded the organization and developed its website from scratch using Joomla CMS and PHP.</li>
                    <li>Built functionality to host large-scale tournaments with over 10,000 teams.</li>
                    <li>Ensured scalability and flexibility for future updates while maintaining a user-friendly experience.</li>
                </ul>
            </div>
        </div>
    </section>
);

export default Experience;
