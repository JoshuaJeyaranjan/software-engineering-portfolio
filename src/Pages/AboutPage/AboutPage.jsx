import React from 'react'
import './AboutPage.scss'
import Nav from '../../Components/Nav/Nav'
import Footer from '../../Components/Footer/Footer'
import Banner from '../../Components/Banner/Banner'
function AboutPage () {
  return (
    <div className='about-page'>
      <Nav />

      <Banner
        title='About Me'
        subtitle='Passionate about creating digital solutions that make a difference'
      />

      <section className='about-content'>
        <div className='container'>
          <div className='about-grid'>
            <div className='about-text'>
              <h2>My Story</h2>
              <p>
                I'm a passionate software engineer with a love for creating
                innovative digital solutions. With a strong foundation in both
                frontend and backend development, I enjoy tackling complex
                problems and turning ideas into reality through code.
              </p>
              <p>
                My journey in software development began with curiosity about
                how websites work, and it has evolved into a career focused on
                building scalable, user-friendly applications that make a
                positive impact on people's lives.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community through blog posts and mentoring.
              </p>
            </div>

            <div className='about-image'>
              <div className='about-image__placeholder'></div>
            </div>
          </div>
        </div>
      </section>

      <section className='experience'>
        <div className='container'>
          <h2 className='section-title'>Experience & Education</h2>
          <div className='timeline'>
            <div className='timeline-item'>
              <div className='timeline-marker'></div>
              <div className='timeline-content'>
                <h3> FullStack Software Engineer</h3>
                <h4>Freelance • 2024 - Present</h4>
                <p>
                  Developed and maintained multiple full-stack web applications using
                  React, Node.js, and PostgreSQL. Led a team of 3 developers and
                  improved application performance by 40%.
                </p>
              </div>
            </div>
            <div className='timeline-item'>
              <div className='timeline-marker'></div>
              <div className='timeline-content'>
                <h3>Teaching Assistant </h3>
                <h4>BrainStation • 2024</h4>
                <p>
                  Assisted in teaching full-stack development concepts,
                  providing personalized guidance to students during hands-on
                  coding sessions. Conducted code reviews and provided
                  constructive feedback on student projects, helping to improve
                  code quality, efficiency, and adherence to best practices.
                </p>
              </div>
            </div>
            <div className='timeline-item'>
              <div className='timeline-marker'></div>
              <div className='timeline-content'>
                <h3>Software Engineering Bootcamp</h3>
                <h4>BrainStation • 2023</h4>
                <p>
                  Graduated from BrainStation’s intensive Software Engineering
                  Bootcamp, covering full-stack development with JavaScript,
                  React, Node.js, and SQL/NoSQL databases. Developed and
                  deployed end-to-end applications in team-based projects,
                  applying agile workflows and modern industry practices.
                </p>
              </div>
            </div>

            <div className='timeline-item'>
              <div className='timeline-marker'></div>
              <div className='timeline-content'>
                <h3>Web Development Certification</h3>
                <h4>BrainStation • 2023</h4>
                <p>
                  Completed BrainStation’s Web Development Certification,
                  gaining hands-on experience with HTML, CSS, and responsive
                  design fundamentals. Built and deployed polished static
                  websites that emphasized clean code, accessibility, and
                  professional presentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='values'>
        <div className='container'>
          <h2 className='section-title'>What Drives Me</h2>
          <div className='values-grid'>
            <div className='value-card'>
              <div className='value-icon'>🚀</div>
              <h3>Innovation</h3>
              <p>
                I love exploring new technologies and finding creative solutions
                to complex problems.
              </p>
            </div>

            <div className='value-card'>
              <div className='value-icon'>🤝</div>
              <h3>Collaboration</h3>
              <p>
                I believe the best solutions come from working together and
                sharing knowledge.
              </p>
            </div>

            <div className='value-card'>
              <div className='value-icon'>📚</div>
              <h3>Learning</h3>
              <p>
                Continuous learning is essential in tech. I'm always exploring
                new frameworks and methodologies.
              </p>
            </div>

            <div className='value-card'>
              <div className='value-icon'>💡</div>
              <h3>Problem Solving</h3>
              <p>
                I enjoy breaking down complex problems into manageable pieces
                and finding elegant solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default AboutPage
