import React from 'react';
import VideoPlayer from '../components/VideoPlayer';

const Projects: React.FC = () => (
  <div className="content-container">
    <ul>
      <li>
        <a href="https://github.com/amyrneto" target="_blank" rel="noopener noreferrer">
          My GitHub Profile
        </a>
      </li>
    </ul>
    <h1>Projects</h1>
    <p>
      I invite you to explore some of my featured work below, 
      as well as my GitHub profile, where you'll find a growing 
      collection of projects that reflect my commitment to continuous 
      learning, hands-on experience, and the use of modern technologies. 
      From production-ready applications to research-driven prototypes, 
      my portfolio highlights both technical depth and a passion for innovation.
    </p>

    <h2>Portfolio Showcase Website</h2>
    <p>
      This very website was built using React and TypeScript, 
      with a focus on clean code, modular architecture, and responsive design. 
      It serves as both a personal project and a demonstration of my frontend 
      development skills. The source code is open for review, and I 
      continue to update this site as I learn new technologies or develop 
      additional features.
    </p>
    <ul>
      <li>
        <a href="https://github.com/amyrneto/amyrneto-showcase" target="_blank" rel="noopener noreferrer">
          Source Code (GitHub)
        </a>
      </li>
    </ul>

    <h2>Doctorate Research: Computer Graphics & Crowd Simulation</h2>
    <p>
      My doctoral research focused on computer graphics and the simulation 
      of crowd dynamics, resulting in novel techniques for visualizing and 
      analyzing large groups in virtual environments. This work led to several 
      published articles and conference presentations, as well as video demonstrations. 
      My research combined advanced programming, mathematical modeling, 
      and the use of C#, C++, and Python to achieve high-performance, visually 
      compelling results.
    </p>
    <p>
      This video demonstrates agents navigating a shared 
      environment while avoiding collisions using the BioCrowds 
      algorithm, which models movement based on competition for space. 
      Additionally, you’ll see a contagion of emotions visualized as 
      agents change colors, illustrating how emotional states can 
      spread dynamically through the group.
    </p>
    <ul>
      <li>
        <a href="https://link.springer.com/chapter/10.1007/978-3-319-67401-8_7" target="_blank" rel="noopener noreferrer">
          Giving Emotional Contagion Ability to Virtual Agents in Crowds
        </a>
      </li>
    </ul>
    <VideoPlayer 
      url="https://www.youtube.com/watch?v=krYQbaf1Nyc" 
      title="Crowd Simulation Research Demonstration"
    />

    {/* <h2>Market-Relevant Mini Projects</h2>
    <p>
      I actively develop and share small projects to explore new frameworks, 
      libraries, and programming paradigms. These hands-on experiments help me 
      stay current with market trends and demonstrate my practical 
      skills in C#, .NET, React, and beyond. This section is regularly updated 
      as I continue to grow my expertise.
    </p> */}
    {/* Add links to individual mini projects here as you build them */}
  </div>
);

export default Projects;