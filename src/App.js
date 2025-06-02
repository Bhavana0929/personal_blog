import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="app-background">
      <Navbar />
      <div className="container">
        <About />
        <Expertise />
        <Skills />
        <Experience />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
