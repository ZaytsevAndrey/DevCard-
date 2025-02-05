import React from "react";
import { FaEnvelope, FaLinkedin, FaTelegram, FaPhone, FaDownload } from "react-icons/fa";
import "./Contacts.scss";

const Contacts = () => (
    <section id="contacts">
        <div className="contacts container">
            <h2>Contact Me</h2>
            <div className="contacts__list">
                <div
                    className="contacts__item"
                    onClick={() => window.location.href = "mailto:adryathic@gmail.com"}
                >
                    <FaEnvelope className="contacts__icon" />
                    <span className="contacts__label">Email:</span>
                    <a href="mailto:adryathic@gmail.com">adryathic@gmail.com</a>
                </div>
                <div
                    className="contacts__item"
                    onClick={() => window.open("https://linkedin.com/in/zaitsev-andrii", "_blank")}
                >
                    <FaLinkedin className="contacts__icon" />
                    <span className="contacts__label">LinkedIn:</span>
                    <a
                        href="https://linkedin.com/in/zaitsev-andrii"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        linkedin.com/in/zaitsev-andrii
                    </a>
                </div>
                <div
                    className="contacts__item"
                    onClick={() => window.open("https://t.me/adryathic", "_blank")}
                >
                    <FaTelegram className="contacts__icon" />
                    <span className="contacts__label">Telegram:</span>
                    <a href="https://t.me/adryathic" target="_blank" rel="noopener noreferrer">
                        @adryathic
                    </a>
                </div>
                <div
                    className="contacts__item"
                    onClick={() => window.location.href = "tel:+380997814218"}
                >
                    <FaPhone className="contacts__icon" />
                    <span className="contacts__label">Phone:</span>
                    <a href="tel:+380997814218">+38 099 781 42 18</a>
                </div>
            </div>
            <a
                href="/Andrii_Zaitsev_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="contacts__resume-btn"
            >
                <FaDownload className="contacts__resume-icon" /> Download CV
            </a>
        </div>
    </section>
);

export default Contacts;
