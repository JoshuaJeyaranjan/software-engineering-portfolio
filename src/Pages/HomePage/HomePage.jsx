import React from "react";
import "./HomePage.scss";
import Nav from "../../Components/Nav/Nav";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import { projects } from "../ShowcasePage/ShowcasePage";

const featuredProjects = projects.filter((project) => project.featured);


function HomePage() {
  return (
    <div className="homepage">
      <Nav />
      <Banner
        title="Joshua Jeyaranjan"
        subtitle="Software Engineer & Full-Stack Developer"
      />

      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">Building Digital Solutions</h1>
          <p className="hero__description">
            Passionate software engineer with expertise in modern web
            technologies, creating scalable applications and solving complex
            problems through code.
          </p>
          <div className="hero__buttons">
            <a href="#projects" className="btn btn--primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn--secondary">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="hero__image">
          <div className="hero__placeholder">
           
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section__title">Skills & Technologies</h2>
          <div className="skills__grid">
            <div className="skill__category">
              <h3>Frontend</h3>
              <div className="skill__tags">
                <span className="skill__tag">React</span>
                <span className="skill__tag">JavaScript</span>          
                <span className="skill__tag">HTML5</span>
                <span className="skill__tag">CSS3</span>
               <span className="skill__tag">Sass</span>                
                <span className="skill__tag">Tailwind</span>
                
 
              </div>
            </div>
            <div className="skill__category">
              <h3>Backend</h3>
              <div className="skill__tags">
                <span className="skill__tag">Node.js</span>
                <span className="skill__tag">Axios</span>
                <span className="skill__tag">Express</span>
                <span className="skill__tag">MySQL</span>
                <span className="skill__tag">PostgreSQL</span>
                <span className="skill__tag">MongoDB</span>
                <span className="skill__tag">REST APIs</span>
              </div>
            </div>
            <div className="skill__category">
              <h3>Tools & DevOps</h3>
              <div className="skill__tags">
                <span className="skill__tag">Git</span>
                <span className="skill__tag">Docker</span>
                <span className="skill__tag">AWS</span>                
                <span className="skill__tag">Netlify</span>
                <span className="skill__tag">Jest</span>
                <span className="skill__tag">Webpack</span>
                <span className="skill__tag">Vite</span>
                <span className="skill__tag">Supabase</span>
                <span className="skill__tag">Render</span>
                <span className="skill__tag">Planet Scale</span>
                <span className="skill__tag">Stripe</span>
                <span className="skill__tag">Google Maps Api</span>
                <span className="skill__tag">Cloudinary</span>
                <span className="skill__tag">Heroku</span>
              </div>
            </div>
          </div>
        </div>
      </section>

<section id="projects" className="projects">
  <div className="container">
    <h2 className="section__title">Featured Projects</h2>
    <div className="projects__grid">
      {featuredProjects.map((project) => (
        <div key={project.id} className="project__card">
          <div className="project__image">
            <img className="project__image" src={project.image}></img>
          </div>
          <div className="project__content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project__tech">
              {project.technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
            <div className="project__links">
              <a href={project.liveUrl} className="project__link" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a href={project.githubUrl} className="project__link" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section__title">Let's Connect</h2>
          <div className="contact__content">
            <div className="contact__info">
              <p>Ready to work together or have a question about my work?</p>
              <div className="contact__links">
                <a
                  href="https://www.linkedin.com/in/joshuajeyaranjan/"
                  className="contact__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                           <img
                      className="contact-method__image"
                      src="/photoAssets/linkedin1.svg"
                    ></img> LinkedIn
                </a>
                <a
                  href="https://github.com/JoshuaJeyaranjan"
                  className="contact__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                      <img
                      className="contact-method__image"
                      src="/photoAssets/github.svg"
                    ></img> GitHub
                </a>
                <a
                  href="mailto:joshuajeyaranjan@gmail.com"
                  className="contact__link"
                >
                      <img
                      className="contact-method__image"
                      src="/photoAssets/email1.svg"
                    ></img> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default HomePage;
