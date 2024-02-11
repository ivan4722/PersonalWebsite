import * as React from "react";
import { Tilt } from 'react-tilt'

export default function Projects() {
  const projectData = [
    {
      imageSrc: "https://cdn.glitch.global/1893ddc6-7de6-49e7-b9e1-942f712e6152/Screenshot%202023-12-16%20at%2012.29.21%20AM.png?v=1702704592730",
      title: "Probabilitle",
      description: "Like wordle, Probabilitle prompts the user with a new Probability/Combinatorics question every day.",
      technologies: "Node JS, MongoDB, ExpressJS, Mongoose, HBS, SemanticUI, Luxon, Lodash, Client SideForm Validation, HTML/CSS, Git",
      redirectUrl: "https://github.com/ivan4722/dailypuzzle"
    },
    {
      imageSrc: "https://cdn.glitch.global/b0b21e26-c8c1-4508-b1e1-5fba2701f32b/Screenshot%202024-02-11%20at%205.16.38%20PM.png?v=1707689809000",
      title: "This Website",
      description: "Personal website to showcase skills and projects.",
      technologies: "ReactJS, HTML/CSS, React-Tilt, React-Router",
      redirectUrl: "http://www.ivanxiong.com"
    },
    {
      imageSrc: "https://i.imgur.com/73E4ugO.png",
      title: "Weather API with Flask",
      description: "Using a weather API, this Python Flask application allows the user to query any city and view the weather, along with the weather for the next 3 days.",
      technologies: "Python, Flask, HTML/CSS, API",
      redirectUrl: "https://github.com/ivan4722/weatherflaskapi"
    },
    {
      imageSrc: "https://cdn.glitch.global/1893ddc6-7de6-49e7-b9e1-942f712e6152/Screenshot%202023-12-16%20at%2012.33.05%20AM.png?v=1702704805406",
      title: "RSI Trading Strategy",
      description: "Applying data analysis, I leveraged RSI as a buy/sell indicator to generate 11.32% on CVX stock in a 2-year time period.",
      technologies: "Python, MatPlotLib, numPy, Pandas, yFinance",
      redirectUrl: "https://github.com/ivan4722/Strategic-RSI-Threshold-Selection-for-Improved-Stock-Trading"
    },
    {
      imageSrc: "https://cdn.glitch.global/1893ddc6-7de6-49e7-b9e1-942f712e6152/Screenshot%202023-12-16%20at%2012.35.12%20AM.png?v=1702704928901",
      title: "Jane Street November Simulator",
      description: "Me and my friends were working on the Jane Street Puzzle for November 2023. I built this simulator to assist us.",
      technologies: "NodeJS, ExpressJS, HBS",
      redirectUrl: "https://github.com/ivan4722/janestreetnovsimulator"
    },
    {
      imageSrc: "https://cdn.glitch.global/1893ddc6-7de6-49e7-b9e1-942f712e6152/ezgif-3-317ce1ef76.gif?v=1703208039555",
      title: "WegGPT",
      description: "Tasked with an AI IT strategy for Wegmans (grocery), I utilized the ChatGPT4 API to generate healthy and sustainable shopping lists.",
      technologies: "JS, HTML/CSS, OpenAI API",
      redirectUrl: "https://github.com/ivan4722/WegGPT"
    },
    
  ];
    return (
    <div className="page">
      <h1 className="title">My Projects</h1>

      {projectData.map((project, index) => (
        <div className={`project-container ${index % 2 === 0 ? "even" : "odd"}`} key={index}>
          <div className="project">
            <Tilt className="Tilt" options={{ max: 25, scale: 1.1 }}>
              <a href={project.redirectUrl} target="_blank" rel="noopener noreferrer">
                <img src={project.imageSrc} alt={`project-${index}`} width="400px" />
              </a>
            </Tilt>
            <div>
              <h3>{project.title}</h3>
              <br></br>
              {project.description} <br></br>
              <strong>Built using: </strong>{project.technologies}
              {project.githubLink && <a className="button" href={project.githubLink} target="_blank" rel="noopener noreferrer">View Github</a>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

}
