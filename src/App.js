import React from "react";

import bizPic from "../../beelarr/src/assets/biz.jpg";
import partyPic from "../../beelarr/src/assets/party.jpg";
import "./App.css";

import { Left } from "./groups/Left";
import { Right } from "./groups/Right";

const date = new Date()

class App extends React.Component {
  state = {
    image: bizPic,
    wrapper: null,
    spin: null,
  };

  hover = () =>
    this.setState({
      image: partyPic,
      wrapper: "wrapper",
      spin: "spinIt",
      swell: "swellIt",
    });
  out = () =>
    this.setState({ image: bizPic, wrapper: null, spin: null, swell: null });

  render() {
    return (
      <div className={this.state.wrapper}>
        <div className="App">
          <img
            onMouseEnter={this.hover}
            onMouseOut={this.out}
            src={this.state.image}
            className="App-logo"
            id={this.state.spin}
            alt="profile pic"
          />
          <h1 className="App-title" id={this.state.swell}>
            Bryon Larrance
          </h1>
          <p>JavaScript | TypeScript | Next.js | CMS Integrations</p>
          <p> Jest | Cypress | React Testing Library</p>
          <Left />
          <Right />
          <hr className="h1" />
          <p className="projects">Projects</p>
          <div className="github-projects">
            <a
              className="project-links pl-right"
              href="https://github.com/beelarr/life_log"
            >
              <p>Life&nbsp;Log</p>
            </a>
            <a
              className="project-links pl-right"
              href="http://beelarr-weather-simulator.surge.sh/"
            >
              <p>React&nbsp;360</p>
            </a>
            <a
              className="project-links"
              href="https://never-lost.herokuapp.com"
            >
              <p>NEVERLOST</p>
            </a>
          </div>
          <p className="even-more-links">Even more links</p>
          <div className="github-projects">
            <a className="project-links pl-right" href="mailto:bryonl@me.com">
              <p>Email</p>
            </a>
            <a
              className="project-links pl-right"
              href="https://www.dropbox.com/s/lx3qximp9r5e03j/Bryon%20Larrance%20Resume%20615-306-1144.pdf?dl=0"
            >
              <p>Resume</p>
            </a>
            <a
              className="project-links pl-right"
              href="https://twitter.com/_beelarr_"
            >
              <p>Twitter</p>
            </a>
            <a className="project-links" href="https://linkedin.com/in/beelarr">
              <p>LinkedIn</p>
            </a>
          </div>
          <hr className="hr-2" />
          <small>?? {date.getFullYear()} Bryon Larrance</small>
        </div>
      </div>
    );
  }
}

export default App;
