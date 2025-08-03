import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import styles from './Guaipeca.module.css';
import guaipecaLogo from '../assets/Guaipeca_resized_transparent.png';

const Guaipeca: React.FC = () => (
  <div className="content-container">
    <h1>Guaipeca - My Game Development Journey</h1>
    
    {/* Floating figure that text will wrap around */}
    <figure className={styles.floatingFigure}>
      <img 
        src={guaipecaLogo} 
        alt="Guaipeca - The underdog developer spirit" 
      />
      <figcaption>
        Guaipeca: The humble spirit of the underdog developer
      </figcaption>
    </figure>
    
    <p>
      Video games have been a driving force in my life since childhood, inspiring not just 
      countless hours of play, but a deep fascination with the technology and creativity 
      behind interactive experiences. This passion was born playing a video game on an MSX during the 80s
      and evolved into a dedicated learning journey for programming and technology.
    </p>
    <p>
      By 2013, I started playing with Unity3D and C#, and found it to be a nice place to bring 
      some of my ideas into reality. Since then, I have been on a quest to learn and apply my 
      skills in game development, creating a variety of projects that showcase my growth as a 
      developer and my love for gaming. I am constantly pushing myself to master Unity, C#, and 
      the intricate art of game development. Every project represents hours of experimentation, 
      problem-solving, and the pure joy of bringing ideas to life through code and design.
    </p>
    <p>
      My game development projects are organized under the <strong>Guaipeca</strong> brand - a name 
      derived from a Southern Brazilian Portuguese term meaning "the underdog." This hobby serves as 
      an excellent platform for exploring advanced programming concepts, experimenting with new 
      technologies, and maintaining hands-on experience with C#, Unity, and software architecture 
      patterns. These projects complement my professional work by providing opportunities to practice 
      problem-solving, project management, and technical skills in a creative context.
    </p>

    <p>
      At the heart of my development process is a custom framework I'm building - a work in progress 
      that consolidates common game systems, tools, and architectural patterns I've discovered 
      through my projects. I have successfully isolated key components such as user interface 
      management, input handling, network synchronization, and game state management. Specifically, 
      in the input handling system, I developed a mapping system that connects generic GuaipecaActions 
      to Unity's new Input System. This abstraction layer provides cleaner code organization and 
      ensures that new features don't impact existing functionality. Most importantly, this framework 
      represents not just code reusability, but a growing understanding of game development 
      principles that I refine with each new challenge.
    </p>

    {/* Clear the float so subsequent content uses full width */}
    <div className={styles.clearFloat}></div>

    <h2>Galaxia Online</h2>
    <p>
      A multiplayer space exploration and combat game that pushes the boundaries of what I can 
      achieve with Unity's networking capabilities. Players pilot customizable spacecraft through 
      procedurally generated sectors, engaging in PvP combat. For now, there is only a deathmatch 
      scenario but, the environment has dynamic background, which will be used to mimic interplanetary 
      and intergalactic voyages. At that point, space wars, interfaction trading, and cooperative 
      missions will bring chaos (and lots of fun) to the <strong>Galaxia</strong>. This project has 
      taught me invaluable lessons about server architecture, real-time network synchronization, and 
      designing engaging multiplayer experiences.
    </p>
    <VideoPlayer 
      url="https://youtu.be/3SjRpKfp4UQ" 
      title="Galaxia Online - Multiplayer Space Combat"
    />
    <ul>
      <li>
        <a href="https://amyr.itch.io/galaxia-online" target="_blank" rel="noopener noreferrer">
          Download Galaxia Online (Work in progress)
        </a>
      </li>
    </ul>

    <h2>Galaxia</h2>
    <p>
      A classic top-down space shooter that serves as the narrative foundation for Galaxia Online. 
      While these games represent different genres - arcade-style shooting versus first/third-person 
      space combat - their stories are interconnected, with this game establishing the universe and 
      lore that Galaxia Online expands upon. The project focuses on engaging gameplay through 
      procedurally generated terrain and environments, challenging enemy patterns, and smooth 
      spacecraft controls. The game's standout feature is its dynamic terrain generation system, 
      which is currently undergoing a major upgrade using Python and NumPy to create more 
      sophisticated procedural landscapes with enhanced visual fidelity and gameplay mechanics. 
      This project serves as my exploration into classic game design principles while pushing 
      the boundaries of modern procedural generation techniques.
    </p>
    <VideoPlayer 
      url="https://youtu.be/vbrAlbCTRv8" 
      title="Galaxia - Single Player Space Shooter"
    />
    <ul>
      <li>
        <a href="https://amyr.itch.io/galaxia" target="_blank" rel="noopener noreferrer">
          Play Galaxia on your browser (Work in progress)
        </a>
      </li>
    </ul>

    <h2>Finger Painting</h2>
    <p>
      A digital coloring book designed for children that serves as my playground for exploring 
      advanced shader programming and GPU-based parallel computing. The game features black and 
      white contour drawings that children can paint using touch gestures, with each stroke 
      rendered through custom shaders - specialized programs that execute in parallel on the GPU 
      for optimal performance. This project represents a deep dive into graphics programming, 
      where I experiment with fragment shaders for real-time color blending, vertex manipulation 
      for brush effects, and compute shaders for efficient texture processing. Beyond creating 
      an engaging experience for young users, this game has been an invaluable learning platform 
      for understanding GPU architecture, parallel processing concepts, and the mathematical 
      foundations of computer graphics rendering.
    </p>
    <VideoPlayer 
      url="https://youtu.be/EzW_Rt9Hi_Q" 
      title="Finger Painting - Creative Mobile Experience"
    />
    {/* <ul>
      <li>
        <a href="YOUR_FINGER_PAINTING_LINK" target="_blank" rel="noopener noreferrer">
          Try Finger Painting (Web Demo)
        </a>
      </li>
    </ul> */}

    <h2>Labirinto</h2>
    <p>
      A puzzle-adventure game featuring procedurally generated mazes with dynamic lighting, 
      atmospheric sound design, and progressively challenging mechanics. This project showcases 
      my creation and implementation of a sophisticated maze generation algorithm capable of 
      creating varied difficulty levels and complex multi-sectioned mazes. The algorithm 
      intelligently places keys throughout the maze that unlock access to restricted sections, 
      while mathematically guaranteeing that every generated maze has a solvable path to 
      completion. This project has been my deep dive into procedural generation algorithms, 
      constraint-based puzzle design, and creating tension through environmental storytelling 
      and atmospheric audio.
    </p>
    <VideoPlayer 
      url="https://youtu.be/KYKWtrHr1o4" 
      title="Labirinto - Procedural Puzzle Adventure"
    />
    {/* <ul>
      <li>
        <a href="YOUR_LABYRINTH_LINK" target="_blank" rel="noopener noreferrer">
          Play Labyrinth (Beta Version)
        </a>
      </li>
    </ul> */}

    <h2>Camera Control Asset</h2>
    <p>
      A comprehensive camera management system for Unity that I've developed and refined across 
      all my projects. This asset provides smooth camera transitions, intelligent target following, 
      camera clipping avoidance, and customizable camera behaviors. Soon to be available on the Unity 
      Asset Store, it represents my commitment to sharing tools that can help other developers 
      create better gaming experiences.
    </p>
    {/* <VideoPlayer 
      url="YOUR_CAMERA_ASSET_VIDEO_URL" 
      title="Unity Camera Control Asset - Demonstration"
    />
    <ul>
      <li>
        <a href="YOUR_CAMERA_ASSET_LINK" target="_blank" rel="noopener noreferrer">
          Unity Asset Store (Coming Soon)
        </a>
      </li>
    </ul> */}

    <h2>Guaipeca Brand Philosophy</h2>
    <p>
      Each project under the Guaipeca banner represents not just a game, but a milestone in my 
      continuous learning journey. From the technical challenges of multiplayer networking to 
      the artistic expression of interactive experiences, these projects embody the humble yet 
      determined spirit of the underdog developer, always striving to create something meaningful 
      and engaging. Above all, the most important value for Guaipeca is to have fun - I believe 
      that when I genuinely enjoy the development process, that passion and enthusiasm naturally 
      translates into more engaging and enjoyable gaming experiences for players.
    </p>
  </div>
);

export default Guaipeca;