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
    "A full-stack videography portfolio and media management platform designed to showcase cinematic work with dynamic, cloud-powered performance. Built with React, Supabase, and Node.js, it features secure authentication, automated thumbnail generation, categorized media storage, and responsive gallery views. The system leverages Supabase Storage for asset handling, custom API routes for image processing, and Netlify/Render for seamless frontend–backend deployment. Includes admin tools for uploading, backfilling, and managing hero sections directly through the database.",
  image: "/photoAssets/Projects/Videography/videography-hero.avif",
  technologies: [
    "React",
    "Vite",
    "Node.js",
    "Express",
    "Supabase",
    "PostgreSQL",
    "Netlify",
    "Render",
    "Sharp",
    
  ],
  liveUrl: "https://dfsvision.com/",
  githubUrl: "https://github.com/JoshuaJeyaranjan/DSP-.git",
  backendUrl: "https://github.com/JoshuaJeyaranjan/thumbnail-service.git",
  featured: true,
},
{
  id: 3,
  title: "Photography Portfolio",
  description:
    "A full-stack photography platform that serves as both a personal portfolio and a dynamic content management system. Built with React and Node.js, the app integrates Supabase for real-time data handling, user authentication, and storage management. It features automated image optimization, responsive grid-based gallery layouts, lazy loading, and an intuitive admin dashboard for uploading and categorizing photos. Deployed with Netlify (frontend) and Render (backend), the project leverages Docker for environment consistency and Knex for database migrations. The design emphasizes speed, scalability, and seamless visual presentation across devices.",
  image: "/photoAssets/Projects/Photography/photography-hero.avif",
  technologies: [
    "React",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Docker",
    "Render",
    "Netlify",
    "Vite",
    "SCSS",
    "Planet Scale",
    'Stripe',
  ],
  liveUrl: "https://www.joshuajeyphotography.com/",
  githubUrl: "https://github.com/JoshuaJeyaranjan/Photography2025",
  backendUrl: "https://github.com/JoshuaJeyaranjan/Photography2025Server.git",
  featured: true,
},
{
  id: 4,
  title: "Toronto Shelter Data",
  description:
    "Full-stack open data intelligence platform that aggregates and analyzes Toronto’s live shelter capacity data from CKAN. Features a Node.js data ingestion pipeline with real-time synchronization, automated deduplication, and geospatial processing. The React-based front end provides interactive visualizations, occupancy analytics, and live updates powered by PostgreSQL and Supabase. The system is designed for scalability and reproducibility, with containerized services and CI/CD deployment across Netlify and Render.",
  image: "/photoAssets/Projects/Shelters/shelters.avif",
  technologies: [
    "React",
    "Node.js",
    "Express",
    "PostgreSQL",
    "CKAN API",
    "Axios",
    "Knex",
    "Render",
    "Netlify",
    "Leaflet.js",
  ],
  liveUrl: "https://find-shelter-toronto.netlify.app/",
  githubUrl: "https://github.com/JoshuaJeyaranjan/shelter-client.git",
  backendUrl: "https://github.com/JoshuaJeyaranjan/shelter-server.git",
  featured: true,
},
{
  id: 2,
  title: "Auto-body Shop Website",
  description:
    "Modern, high-performance business website for DreamWorx Auto Body, featuring dynamic service sections, integrated contact forms via EmailJS, responsive design, Google Maps API integration, and custom animations built with React and Sass. The site emphasizes user accessibility, SEO optimization, and brand identity through fluid visuals and interactive UI elements, developed with a Vite-powered React stack for speed and scalability.",
  image: "/photoAssets/Projects/Autobody/autobody-hero.avif",
  technologies: [
    "React",
    "Vite",
    "Sass",
    "EmailJS",
    "React Router",
    "Google Maps API",
    "Netlify",
  ],
  liveUrl: "https://dreamworxautobody.com/",
  githubUrl: "https://github.com/JoshuaJeyaranjan/dreamworx-client.git",
  backendUrl: null,
  featured: false,
},

{
  id: 5,
  title: "Instrument Tuner",
  description:
    "A full-featured, real-time instrument tuner built with React and the Web Audio API. The app performs precise frequency analysis, note detection, and visual feedback using custom DSP logic and dynamic SVG rendering. It supports multiple instruments, tunings, and modes — including auto-detect and manual tuning — with a responsive, modern UI designed for both desktop and mobile. The project demonstrates advanced use of audio processing, state management via React Context, and real-time UI synchronization between the signal analyzer and visual components.",
  image: "/photoAssets/Projects/Tuner/tuner.avif",
  technologies: [
    "React",
    "Vite",
    "Tone.js",
    "Web Audio API",
    "Sass",
    "Netlify",
    "React Context",
    "Custom Hooks",
    "SVG Animation",
  ],
  liveUrl: "https://tuner-deluxe.netlify.app/",
  githubUrl: "https://github.com/JoshuaJeyaranjan/tuner.git",
  backendUrl: null,
  featured: false,
},
{
  id: 6,
  title: "Online Resume",
  description:
    "Interactive, single-page online resume designed to showcase personal branding, professional experience, and portfolio highlights through a clean and modern UI. Built with React and Vite for fast load performance, it features smooth Framer Motion animations, responsive Sass styling, and a modular component architecture optimized for maintainability. Deployed on Netlify, the site emphasizes accessibility, cross-device consistency, and pixel-perfect design execution.",
  image: "/photoAssets/Projects/Marketing/marketing.avif",
  technologies: [
    "React",
    "Vite",
    "Sass",
    "Netlify",
    "React Router",
    "EmailJS"
  ],
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