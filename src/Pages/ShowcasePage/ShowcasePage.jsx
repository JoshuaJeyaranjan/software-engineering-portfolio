import React, { useState } from "react";
import "./ShowcasePage.scss";
import Banner from "../../Components/Banner/Banner";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";

// ------------------------------------
// PROJECT DATA
// ------------------------------------
export const projects = [
  {
    id: 1,
    title: "Videography Portfolio",
    description:
      "Full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, admin dashboard, and real-time inventory management.",
    image: "/photoAssets/Projects/Videography/videography-hero.avif",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "Express",
      "Netlify",
      "Render",
      "Sass",
    ],
    liveUrl: "https://demetriose.netlify.app/",
    githubUrl: "https://github.com/JoshuaJeyaranjan/DSP-.git",
    backendUrl: "https://github.com/JoshuaJeyaranjan/thumbnail-service.git",
    featured: true,
  },
  {
    id: 2,
    title: "Auto-body Shop Website",
    description:
      "Collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and project tracking capabilities.",
    image: "/photoAssets/Projects/Autobody/autobody-hero.avif",
    technologies: ["Vite", "React", "Sass", "EmailJS", "React Router"],
    liveUrl: "https://dreamworxautobody.com/",
    githubUrl: "https://github.com/JoshuaJeyaranjan/dreamworx-client.git",
    backendUrl: null,
    featured: false,
  },
  {
    id: 4,
    title: "Toronto Shelter Data",
    description:
      "Data visualization dashboard with real-time data pipelines, ML-based insights, and interactive analytics for Toronto's shelter data ecosystem.",
    image: "/photoAssets/Projects/Shelters/shelters.avif",
    technologies: [
      "React",
      "Node.js",
      "Render",
      "Netlify",
      "Docker",
      "Knex",
      "PlanetScale",
    ],
    liveUrl: "https://find-shelter-toronto.netlify.app/",
    githubUrl: "https://github.com/JoshuaJeyaranjan/shelter-client.git",
    backendUrl: "https://github.com/JoshuaJeyaranjan/shelter-server.git",
    featured: true,
  },
  {
    id: 3,
    title: "Photography Portfolio",
    description:
      "Full-stack photography platform with CMS integration, optimized image delivery, and dynamic gallery management using Supabase and React.",
    image: "/photoAssets/Projects/Photography/photography-hero.avif",
    technologies: [
      "React",
      "Node.js",
      "Supabase",
      "Render",
      "Netlify",
      "Docker",
      "Knex",
    ],
    liveUrl: "https://www.joshuajeyphotography.com/",
    githubUrl: "https://github.com/JoshuaJeyaranjan/Photography2025",
    backendUrl: "https://github.com/JoshuaJeyaranjan/Photography2025Server.git",
    featured: true,
  },
  {
    id: 5,
    title: "Instrument Tuner",
    description:
      "Audio processing app that provides real-time pitch detection and frequency visualization for multiple instruments, built with Web Audio API and React.",
    image: "/photoAssets/Projects/Tuner/tuner.avif",
    technologies: ["React", "Vite", "Tone.js", "Sass", "Netlify"],
    liveUrl: "https://tuner-deluxe.netlify.app/",
    githubUrl: "https://github.com/JoshuaJeyaranjan/tuner.git",
    backendUrl: null,
    featured: false,
  },
  {
    id: 6,
    title: "Online Resume",
    description:
      "A sleek, single-page digital resume showcasing personal branding, responsive design, and dynamic animations for professional presentation.",
    image: "/photoAssets/Projects/Marketing/marketing.avif",
    technologies: ["React", "Vite", "Sass", "Framer Motion", "Netlify"],
    liveUrl: "https://daniel-marketing.netlify.app/",
    githubUrl: "https://github.com/JoshuaJeyaranjan/daniel-marketing.git",
    backendUrl: null,
    featured: false,
  },
];

// ------------------------------------
// REUSABLE PROJECT CARD COMPONENT
// ------------------------------------
const ProjectCard = ({ project }) => {
  const isFullStack = !!project.backendUrl;

  return (
    <div
      className={`project-card ${
        project.featured ? "project-card--featured" : ""
      }`}
    >
      <div className="project-card__image">
        <div className="project-image-placeholder">
          <img
            className="project-card__image"
            src={project.image}
            alt={project.title}
          />
        </div>
        {project.featured && (
          <div className="project-card__badge">Featured</div>
        )}
      </div>

      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>

        <p className="project-card__stack">
          {isFullStack ? "Full Stack Project" : "Frontend Project"}
        </p>

        <p className="project-card__description">{project.description}</p>

        <div className="project-card__technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-card__links">
          <a
            href={project.liveUrl}
            className="project-link project-link--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>

          <a
            href={project.githubUrl}
            className="project-link project-link--secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Code
          </a>

          {isFullStack && (
            <a
              href={project.backendUrl}
              className="project-link project-link--secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Backend Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// ------------------------------------
// MAIN SHOWCASE PAGE COMPONENT
// ------------------------------------
export const ShowcasePage = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  // Handle filtering logic
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filteredProjects = projects.filter((project) => {
    switch (activeFilter) {
      case "Featured":
        return project.featured;
      case "Frontend":
        return !project.backendUrl;
      case "Full-Stack":
        return !!project.backendUrl;
      default:
        return true; // All Projects
    }
  });

  return (
    <div className="showcase-page">
      <Nav />
      <Banner
        title="My Projects"
        subtitle="A collection of my work and side projects"
      />

      <section className="projects-showcase">
        <div className="container">
          <div className="projects-filter">
            {["All Projects", "Featured", "Frontend", "Full-Stack"].map(
              (filter) => (
                <button
                  key={filter}
                  className={`filter-btn ${
                    activeFilter === filter ? "filter-btn--active" : ""
                  }`}
                  onClick={() => handleFilterClick(filter)}
                >
                  {filter}
                </button>
              )
            )}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};