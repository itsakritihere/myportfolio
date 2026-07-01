import React from 'react';

const Project = (props) => {
  const techIcons = {
    sass: 'fab fa-sass',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    vue: 'fab fa-vuejs',
    d3: 'far fa-chart-bar',
    node: 'fab fa-node'
  };

  const link = props.link || 'http://';
  const techList = props.tech ? props.tech.split(' ') : [];

  return (
    <div className="project">
      <a
        className="project-link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="project-image"
          src={props.img}
          alt={`Screenshot of ${props.title}`}
        />
      </a>

      <div className="project-details">
        <div className="project-tile">
          <p className="icons">
            {techList.map((t) => (
              <i className={techIcons[t]} key={t}></i>
            ))}
          </p>
          {props.title}
        </div>

        {props.children}
      </div>
    </div>
  );
};

export default Project;