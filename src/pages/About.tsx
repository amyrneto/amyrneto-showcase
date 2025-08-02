import React from 'react';

const About: React.FC = () => (
  <div className="content-container">
  <ul>
    <li>
      <a href="https://www.linkedin.com/in/amyrneto" target="_blank" rel="noopener noreferrer">
        Connect with me on LinkedIn
      </a>
    </li>
    <li>
      <a href="https://www.dropbox.com/scl/fi/k3b6feskcpg2gx7m08ioz/amyr_resume_dev.pdf?rlkey=qx8jw5ld0vuq18ln7w90yt2i8&st=2jzm589t&dl=1" target="_blank" rel="noopener noreferrer">
        Download my Resume (PDF)
      </a>
    </li>
  </ul>
    <h1>About Me</h1>
    <p>
      { `As an experienced software developer with a strong background in C# 
      and the .NET ecosystem, I have contributed to diverse projects ranging 
      from enterprise management systems to advanced biometric solutions. 
      My technical expertise spans .NET Core, .NET Framework, Blazor, Entity Framework, 
      and related tools, complemented by solid experience in SQL databases and modern 
      development practices such as SOLID principles and Domain-Driven Design. 
      I am passionate about building high-quality, maintainable software and have a 
      keen interest in leveraging technology to solve real-world problems.

      Throughout my career, I have demonstrated effective leadership and team management 
      skills—guiding multidisciplinary teams, fostering collaboration, and ensuring the 
      successful delivery of complex projects. My approach emphasizes creativity, clear 
      communication, and continuous learning. Feel free to download my full résumé or connect 
      with me on LinkedIn using the links above.` }
    </p>
  </div>
);

export default About;