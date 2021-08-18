import React, { useState } from 'react';
import "./app.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./components/Projects";
import { projectsData } from "./data/projectsData";
import Contact from "./components/Contact";
import Dropdown from "./components/Dropdown";

function App() 
{
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () =>
  {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Router>
        <Header toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route exact path="/">
            <Home />
            <About />
            <Projects slides={projectsData} />
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects slides={projectsData}/>
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
