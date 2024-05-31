import React from 'react';
import '../assets/styles/AboutMe.css';

function AboutMe() {
  return (
    <section className="about-me">
      <img src="../assets/imgs/profilepicture.png" alt="Developer" />
      <h2>About Me</h2>
      <p>
        Hello! I am a passionate web developer with a knack for creating dynamic and responsive web applications. With a strong foundation in front-end technologies and a keen eye for design, I strive to deliver seamless user experiences.
      </p>
      <p>
        I graduated with a degree in Computer Science and have since worked on various projects ranging from small business websites to large-scale web applications. My skills include HTML, CSS, JavaScript, React, and more.
      </p>
      <p>
        Beyond coding, I enjoy learning about the latest trends in technology, contributing to open-source projects, and continuously improving my skillset. In my free time, you can find me exploring new places, reading tech blogs, or working on a side project.
      </p>
    </section>
  );
}

export default AboutMe;
