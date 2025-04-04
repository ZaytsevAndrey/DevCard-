import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contacts/Contacts";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";

const App = () => (
    <>
        <Navbar />
        <Header />
        <Contact />
        <Experience />
        <Education />
        <Skills />
        <About />
    </>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
