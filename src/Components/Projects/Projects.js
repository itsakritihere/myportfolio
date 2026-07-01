import React from 'react';
import Project from './Project';
import './Projects.css';
import Diary from './Images/diary.png';
import Ai from './Images/ai.png';
import Home from './Images/home.png';
import pp from './Images/pp.png';
import aiopti from './Images/aiopti.png';
import minty from './Images/image.png';
import mintu from './Images/potty.png';

const Projects = props => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">My Works</h3>
          <p className="separator" />
          
        </div>
        <div className="projects-wrapper">
            <Project
  title="OptiSystemAiPrediction"
  img={aiopti}
>
  <small>
    "Python",
  "Google Colab",
  "TensorFlow",
  "scikit-fuzzy",
  "PyDub",
  "FFmpeg",
  "NumPy",
  "Pandas",
  "Matplotlib",
  "Random Forest Model"
  "Machine Learning",
  "Data Analysis",
  "Wireless Signal Processing",
  "GitHub"
  </small>
  <p>
    This project uses OptiSystem to simulate an optical communication system and generate data for Q-factor and BER under different transmitter power, EDFA gain, and range. A Random Forest model is trained on this data to predict performance without re-running simulations, enabling fast estimation and optimization of system parameters.
  </p>
  <a
    href="https://github.com/itsakritihere/OptisytemAiprediction"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      marginTop: "8px",
      color: "#0366d6",
      textDecoration: "underline",
      fontWeight: "bold",
      cursor: "pointer"
    }}
  >
    GitHub
  </a>
  <a
    href="https://optisytem-aiprediction-bmbr.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      marginLeft: "220px",
      marginTop: "8px",
      color: "#3128a7",
      textDecoration: "underline",
      fontWeight: "bold",
      cursor: "pointer"
    }}
  >
    Live Demo
  </a>
</Project>
                <Project
  title="Explainable Enhanced Recurrent Neural Network and Fuzzy logics for Lie detection using voice stress analysis."
  img={Ai}
>
  <small>
    Python, TensorFlow, Keras, Librosa, scikit-fuzzy, PyDub, FFmpeg, NumPy, Pandas, Matplotlib
  </small>
  <p>
    This project presents a voice-based lie detection system that combines Enhanced Recurrent Neural Networks (ERNN) with fuzzy logic to analyze stress patterns in speech. By extracting features such as pitch variations, pauses, energy, and MFCCs, the system predicts whether a statement is truthful or deceptive.
  </p>
  <a
    href="https://github.com/itsakritihere/Lie-detector"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      marginTop: "8px",
      color: "#0366d6",
      textDecoration: "underline",
      fontWeight: "bold",
      cursor: "pointer"
    }}
  >
    GitHub
  </a>
 
</Project>

 <Project
  title="Dear Diary App"
  img={Diary}
>
  <small>
    ReactJs, Node Js, Express Js, MongoDB, Postman
  </small>
  <p>
    Dear Diary is your safe space to capture every thought, dream, and memory. Write freely, reflect deeply, and store your emotions securely.
    Whether it’s a happy day, a tough one, or just random midnight thoughts — this diary is always here to listen.
  </p>
  <a
    href="https://github.com/itsakritihere/dear-diary"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      marginTop: "8px",
    
      color: "#0366d6",
      textDecoration: "underline",
      fontWeight: "bold",
      cursor: "pointer"
    }}
  >
    GitHub
  </a><a
    href="https://dear-diary-lilac.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      marginTop: "8px",
      marginLeft: "220px",
      color: "#3128a7",
      textDecoration: "underline",
      fontWeight: "bold",
      cursor: "pointer"
    }}
  >
    Live Demo
  </a>
</Project>
<Project
            title="ShopEase"
            img={minty}
          >
            <small>
              React Javascript Vercel Bootstrap
            </small>
            <p>
              Built a E-commerce website with perfect frontend Ui design and responsivess and enabling add to card option and others.
            </p>
            <a
    href="https://github.com/itsakritihere/ShopEase"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      marginTop: "8px",
      color: "#0366d6",
      textDecoration: "underline",
      fontWeight: "bold",
      cursor: "pointer"
    }}
  >
    GitHub
  </a>
  <a
    href="https://shoppingsite-4f9v.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      marginTop: "8px",
      marginLeft: "220px",
      color: "#3128a7",
      textDecoration: "underline",
      fontWeight: "bold",
      cursor: "pointer"
    }}
  >
    Live Demo
  </a>
          </Project>
<Project
            title="Woodside Cafe"
            img={mintu}
          >
            <small>
              React Javascript Vercel Bootstrap
            </small>
            <p>
              Built a website for a commercial cafe.
            </p>
            <a
    href="https://github.com/itsakritihere/woodsidecafe"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      marginTop: "8px",
      color: "#0366d6",
      textDecoration: "underline",
      fontWeight: "bold",
      cursor: "pointer"
    }}
  >
    GitHub
  </a>
  <a
    href="https://woodsidecafe.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      marginTop: "8px",
      marginLeft: "220px",
      color: "#3128a7",
      textDecoration: "underline",
      fontWeight: "bold",
      cursor: "pointer"
    }}
  >
    Live Demo
  </a>
          </Project>
          <Project
            title="Smart Home Monitoring System"
            img={Home}
          >
            <small>
              IoT Project using Arduino, Raspberry Pi, IFTTT
            </small>
            <p>
              Designed an IoT based smart home system using sensors (gas, fire, motion, temperature) for safety and monitoring and enabled real-time alerts via IFTTT and mobile notifications; used a cloud-based dashboard for remote tracking.
            </p>
          </Project>


          <Project
            title="SheGuard, an IoT Based Women Safety Device"
            img={pp}
          >
            <small>
              Arduino, GPS, GSM Modules
            </small>
            <p>
              Engineered a wearable device for women’s safety using GPS + GSM modules for real-time location tracking and SMS alerts.
            </p>
          </Project>

        </div>
      </div>
    </section>
  );
};

export default Projects;
