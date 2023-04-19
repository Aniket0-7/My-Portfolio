import React from "react";
import Intro from "./components/intro/Intro";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import "./App.css"

import { Routes, Route, BrowserRouter } from "react-router-dom";

import Projects from "./components/Projects/Projects";

const App = () => {

    return (<>
    <div className="app">
        <Navbar/>
        <div className="sections">
        <Intro  />
        <About/>
        <Projects/>
        <Contact />
        </div>
    </div>
        
    </>
    )

}

export default App;