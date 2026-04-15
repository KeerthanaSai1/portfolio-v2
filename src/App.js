import React, { useState } from 'react';

const Portfolio = () => {
  const [isDark, setIsDark] = useState(true);

  // Mock data for projects
  const projects = [
    {
      title: '.NET 8 Migration Suite',
      description: 'Successfully migrated 8+ applications from ASP.NET to .NET 8 including MVC, APIs, and WCF services with zero downtime.',
      icon: '🚀',
      tech: ['.NET 8', 'C#', 'ASP.NET MVC', 'APIs'],
    },
    {
      title: 'SSIS/SSRS Modernization',
      description: 'Executed seamless migration of SSIS and SSRS applications from SQL Server 2017 to 2019, improving ETL performance by 30%.',
      icon: '📊',
      tech: ['SSIS', 'SSRS', 'SQL Server', 'ETL'],
    },
    {
      title: 'QNXT Platform Upgrade',
      description: 'Led QNXT application upgrade to version 5.9 R4 with optimized stored procedures and AI-powered legacy code modernization.',
      icon: '⚙️',
      tech: ['QNXT', 'T-SQL', 'GitHub Copilot', 'MCP'],
    },
    {
      title: 'Healthcare Data Integration',
      description: 'Designed SSIS packages for HMSA document transformation and loading into Documentum with automated Tidal job scheduling.',
      icon: '🏥',
      tech: ['SSIS', 'Documentum', 'Tidal', 'HIPAA'],
    },
    {
      title: 'Performance Optimization',
      description: 'Optimized SQL queries and stored procedures achieving 40% improvement in execution time across healthcare systems.',
      icon: '⚡',
      tech: ['SQL Server', 'T-SQL', 'Indexing', 'Query Optimization'],
    },
    {
      title: 'Data Security & Masking',
      description: 'Implemented HIPAA-compliant data masking techniques protecting PHI across healthcare applications and databases.',
      icon: '🔒',
      tech: ['Data Masking', 'HIPAA', 'Security', 'SQL'],
    },
  ];

  // Mock data for experience
  const experience = [
    {
      date: 'Jul 2025 – Present',
      title: 'Software Engineer',
      company: 'Infinite Computer Solutions',
      description: 'Led .NET 8 migration for 8+ applications, executed SSIS/SSRS migration from SQL Server 2017 to 2019, and spearheaded QNXT platform upgrades with AI integration using GitHub Copilot.',
    },
    {
      date: 'Nov 2022 – Jul 2025',
      title: 'Associate Software Engineer',
      company: 'Infinite Computer Solutions',
      description: 'Designed and deployed 15+ SSIS packages for ETL workflows, optimized SQL queries achieving 40% performance improvement, and implemented HIPAA-compliant data masking solutions.',
    },
  ];

  // Mock data for skills
  const skills = [
    { name: 'SSIS & ETL', percentage: 95 },
    { name: '.NET & C#', percentage: 90 },
    { name: 'SQL Server', percentage: 92 },
    { name: 'SSRS & Reporting', percentage: 88 },
    { name: 'QNXT Platform', percentage: 85 },
    { name: 'Azure Cloud', percentage: 70 },
  ];

  return (
    <div style={{
      background: isDark ? '#0a0e27' : '#ffffff',
      color: isDark ? '#ffffff' : '#000000',
      fontFamily: "'DM Sans', sans-serif",
      minHeight: '100vh',
      padding: '0',
      margin: '0',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'DM Sans', sans-serif;
        }
        
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 70px;
          background: rgba(10, 14, 39, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid #2d3748;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 2rem;
          z-index: 1000;
        }
        
        .light .navbar {
          background: rgba(255, 255, 255, 0.95);
        }
        
        .navbar-brand {
          font-size: 1.5rem;
          font-weight: 700;
          font-family: 'Sora', sans-serif;
          color: #00d4ff;
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
          list-style: none;
        }
        
        .nav-link {
          color: ${isDark ? '#a0aec0' : '#4a5568'};
          cursor: pointer;
          transition: color 0.3s;
          font-size: 0.95rem;
          font-weight: 500;
        }
        
        .nav-link:hover {
          color: #00d4ff;
        }
        
        .theme-toggle {
          width: 50px;
          height: 28px;
          background: ${isDark ? '#1a1f3a' : '#f7fafc'};
          border: 1px solid ${isDark ? '#2d3748' : '#e2e8f0'};
          border-radius: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 2px;
          transition: all 0.3s;
        }
        
        .theme-toggle:hover {
          border-color: #00d4ff;
        }
        
        .toggle-circle {
          width: 24px;
          height: 24px;
          background: #00d4ff;
          border-radius: 50%;
          transition: transform 0.3s;
        }
        
        .dark .toggle-circle {
          transform: translateX(22px);
        }
        
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          margin-top: 70px;
          background: ${isDark ? '#0a0e27' : '#ffffff'};
        }
        
        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          max-width: 1200px;
          width: 100%;
        }
        
        .hero-text h1 {
          font-size: 3.5rem;
          font-family: 'Sora', sans-serif;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #ffffff;
        }
        
        .hero-text p {
          font-size: 1.1rem;
          color: #b0b8c8;
          margin-bottom: 2rem;
          max-width: 500px;
          line-height: 1.8;
        }
        
        .cta-button {
          padding: 12px 32px;
          background: #00d4ff;
          color: #0a0e27;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-size: 1rem;
        }
        
        .hero-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .image-wrapper {
          width: 300px;
          height: 300px;
          border-radius: 20px;
          border: 2px solid ${isDark ? '#2d3748' : '#e2e8f0'};
          background: ${isDark ? '#1a1f3a' : '#f7fafc'};
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
        }
        
        .section {
          padding: 6rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-family: 'Sora', sans-serif;
          font-weight: 700;
          margin-bottom: 3rem;
          text-align: center;
          color: ${isDark ? '#ffffff' : '#000000'};
        }
        
        .section-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        
        .section-text p {
          font-size: 1.05rem;
          color: ${isDark ? '#a0aec0' : '#4a5568'};
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }
        
        .section-highlights {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 2rem;
        }
        
        .highlight {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: ${isDark ? '#1a1f3a' : '#f7fafc'};
          border-radius: 8px;
          border-left: 3px solid #00d4ff;
        }
        
        .highlight-icon {
          font-size: 1.5rem;
        }
        
        .highlight-text {
          display: flex;
          flex-direction: column;
        }
        
        .highlight-text strong {
          color: ${isDark ? '#ffffff' : '#000000'};
          font-weight: 600;
        }
        
        .highlight-text span {
          font-size: 0.9rem;
          color: ${isDark ? '#a0aec0' : '#4a5568'};
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        
        .skill-card {
          background: ${isDark ? '#1a1f3a' : '#f7fafc'};
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid ${isDark ? '#2d3748' : '#e2e8f0'};
        }
        
        .skill-name {
          font-weight: 600;
          margin-bottom: 1rem;
          color: ${isDark ? '#ffffff' : '#000000'};
        }
        
        .progress-bar {
          height: 6px;
          background: ${isDark ? '#2d3748' : '#e2e8f0'};
          border-radius: 3px;
          overflow: hidden;
        }
        
        .progress-fill {
          height: 100%;
          background: #00d4ff;
          border-radius: 3px;
          width: 0%;
        }
        
        .timeline {
          position: relative;
          padding: 2rem 0;
        }
        
        .timeline-item {
          margin-bottom: 3rem;
        }
        
        .timeline-content {
          background: ${isDark ? '#1a1f3a' : '#f7fafc'};
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid ${isDark ? '#2d3748' : '#e2e8f0'};
        }
        
        .timeline-date {
          color: #00d4ff;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }
        
        .timeline-title {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: ${isDark ? '#ffffff' : '#000000'};
        }
        
        .timeline-company {
          color: ${isDark ? '#a0aec0' : '#4a5568'};
          font-size: 0.95rem;
          margin-bottom: 1rem;
        }
        
        .timeline-description {
          color: ${isDark ? '#a0aec0' : '#4a5568'};
          font-size: 0.95rem;
          line-height: 1.6;
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        
        .project-card {
          background: ${isDark ? '#1a1f3a' : '#f7fafc'};
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid ${isDark ? '#2d3748' : '#e2e8f0'};
        }
        
        .project-image {
          width: 100%;
          height: 200px;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(0, 153, 255, 0.2));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
        }
        
        .project-content {
          padding: 2rem;
        }
        
        .project-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: ${isDark ? '#ffffff' : '#000000'};
        }
        
        .project-description {
          color: ${isDark ? '#a0aec0' : '#4a5568'};
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
        }
        
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .tech-tag {
          display: inline-block;
          padding: 4px 12px;
          background: ${isDark ? '#0a0e27' : '#ffffff'};
          border: 1px solid ${isDark ? '#2d3748' : '#e2e8f0'};
          border-radius: 20px;
          font-size: 0.8rem;
          color: #00d4ff;
          font-weight: 500;
        }
        
        .education-item {
          background: ${isDark ? '#1a1f3a' : '#f7fafc'};
          padding: 2rem;
          border-radius: 12px;
          border-left: 4px solid #00d4ff;
          margin-bottom: 2rem;
        }
        
        .education-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: ${isDark ? '#ffffff' : '#000000'};
        }
        
        .education-year {
          color: #00d4ff;
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        .education-institution {
          color: ${isDark ? '#a0aec0' : '#4a5568'};
          font-size: 0.95rem;
          margin-top: 0.5rem;
        }
        
        .education-details {
          color: ${isDark ? '#a0aec0' : '#4a5568'};
          font-size: 0.9rem;
          margin-top: 1rem;
        }
        
        .contact {
          padding: 6rem 2rem;
          background: ${isDark ? '#1a1f3a' : '#f7fafc'};
          text-align: center;
        }
        
        .contact-container {
          max-width: 600px;
          margin: 0 auto;
        }
        
        .contact-text {
          color: ${isDark ? '#a0aec0' : '#4a5568'};
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }
        
        .contact-links {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }
        
        .contact-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 10px 20px;
          background: ${isDark ? '#0a0e27' : '#ffffff'};
          border: 1px solid ${isDark ? '#2d3748' : '#e2e8f0'};
          border-radius: 8px;
          color: ${isDark ? '#ffffff' : '#000000'};
          text-decoration: none;
          transition: all 0.3s;
          font-size: 0.95rem;
        }
        
        .contact-link:hover {
          border-color: #00d4ff;
          color: #00d4ff;
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .form-input,
        .form-textarea {
          padding: 12px 16px;
          background: ${isDark ? '#0a0e27' : '#ffffff'};
          border: 1px solid ${isDark ? '#2d3748' : '#e2e8f0'};
          border-radius: 8px;
          color: ${isDark ? '#ffffff' : '#000000'};
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
        }
        
        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }
        
        .footer {
          padding: 3rem 2rem;
          background: ${isDark ? '#0a0e27' : '#ffffff'};
          border-top: 1px solid ${isDark ? '#2d3748' : '#e2e8f0'};
          text-align: center;
          color: ${isDark ? '#a0aec0' : '#4a5568'};
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .footer-section h4 {
          color: ${isDark ? '#ffffff' : '#000000'};
          margin-bottom: 1rem;
          font-weight: 600;
        }
        
        .footer-section ul {
          list-style: none;
        }
        
        .footer-section ul li {
          margin-bottom: 0.5rem;
        }
        
        .footer-section a {
          color: ${isDark ? '#a0aec0' : '#4a5568'};
          text-decoration: none;
          transition: color 0.3s;
        }
        
        .footer-section a:hover {
          color: #00d4ff;
        }
        
        .footer-bottom {
          border-top: 1px solid ${isDark ? '#2d3748' : '#e2e8f0'};
          padding-top: 2rem;
          font-size: 0.9rem;
        }
      `}</style>

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">SK</div>
        <ul className="nav-links">
          <li className="nav-link" onClick={() => {
            document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
          }}>About</li>
          <li className="nav-link" onClick={() => {
            document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
          }}>Skills</li>
          <li className="nav-link" onClick={() => {
            document.getElementById('experience').scrollIntoView({ behavior: 'smooth' });
          }}>Experience</li>
          <li className="nav-link" onClick={() => {
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
          }}>Projects</li>
          <li className="nav-link" onClick={() => {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
          }}>Contact</li>
        </ul>
        <div className="theme-toggle" onClick={() => setIsDark(!isDark)}>
          <div className="toggle-circle"></div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Saikeerthana</h1>
            <p>Software Developer specializing in ETL, .NET, and healthcare data solutions. Crafting elegant, scalable systems that drive business impact.</p>
            <button className="cta-button" onClick={() => {
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}>
              Get In Touch
            </button>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">👩‍💻</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section" id="about">
        <h2 className="section-title">About Me</h2>
        <div className="section-content">
          <div className="section-text">
            <p>
              I'm a Software Developer with 3.6 years of hands-on experience in designing and optimizing ETL pipelines, data integration solutions, and enterprise applications in the healthcare domain.
            </p>
            <p>
              My expertise spans SSIS, SSRS, .NET 8, SQL Server, and QNXT platforms. I'm passionate about writing clean, efficient code and solving complex data challenges. I've been recognized as "Best Performer" by HMSA client and awarded "Performer of the Month" twice.
            </p>
            <p>
              Currently expanding my cloud capabilities with Azure, I'm committed to continuous learning and delivering high-impact solutions that drive business value.
            </p>
          </div>
          <div className="section-highlights">
            <div className="highlight">
              <div className="highlight-icon">🎯</div>
              <div className="highlight-text">
                <strong>3.6 Years Experience</strong>
                <span>Software Development & ETL</span>
              </div>
            </div>
            <div className="highlight">
              <div className="highlight-icon">🏆</div>
              <div className="highlight-text">
                <strong>Best Performer</strong>
                <span>HMSA Client Recognition</span>
              </div>
            </div>
            <div className="highlight">
              <div className="highlight-icon">☁️</div>
              <div className="highlight-text">
                <strong>Azure Certified</strong>
                <span>AZ-900 Fundamentals</span>
              </div>
            </div>
            <div className="highlight">
              <div className="highlight-icon">💡</div>
              <div className="highlight-text">
                <strong>Healthcare Specialist</strong>
                <span>HIPAA Compliance & Data Security</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section" id="skills">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-name">
                <span>{skill.name}</span>
                <span style={{ color: '#00d4ff', fontWeight: 600 }}>{skill.percentage}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="section" id="experience">
        <h2 className="section-title">Professional Experience</h2>
        <div className="timeline">
          {experience.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-date">{exp.date}</div>
                <div className="timeline-title">{exp.title}</div>
                <div className="timeline-company">{exp.company}</div>
                <div className="timeline-description">{exp.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="section" id="projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">{project.icon}</div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="section" id="education">
        <h2 className="section-title">Education & Certifications</h2>
        <div>
          <div className="education-item">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <div>
                <div className="education-title">Bachelor of Technology (B.Tech)</div>
                <div className="education-institution">Sri Mittapalli Institute of Technology for Women</div>
              </div>
              <div className="education-year">2018 - 2022</div>
            </div>
            <div className="education-details">
              Computer Science | CGPA: 8.0
            </div>
          </div>

          <div className="education-item">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <div>
                <div className="education-title">Microsoft Certified: Azure Fundamentals</div>
                <div className="education-institution">Microsoft Learn</div>
              </div>
              <div className="education-year">2025</div>
            </div>
            <div className="education-details">
              AZ-900 Certification
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="contact-container">
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-text">
            Have a project in mind or want to collaborate? I'd love to hear from you. Reach out and let's create something amazing together.
          </p>
          <div className="contact-links">
            <a href="mailto:saikeerthanajampani@gmail.com" className="contact-link">
              📧 Email
            </a>
            <a href="https://www.linkedin.com/in/saikeerthana-jampani-178092222/" target="_blank" rel="noopener noreferrer" className="contact-link">
              💼 LinkedIn
            </a>
            <a href="tel:+918247535709" className="contact-link">
              📱 Call
            </a>
          </div>
          <form className="contact-form" onSubmit={(e) => {
            e.preventDefault();
            alert('Thank you for reaching out! I will get back to you soon.');
          }}>
            <input
              type="text"
              className="form-input"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              className="form-input"
              placeholder="Your Email"
              required
            />
            <textarea
              className="form-textarea"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="cta-button">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Saikeerthana</h4>
            <p>Software Developer | ETL Specialist | Healthcare Data Solutions</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:saikeerthanajampani@gmail.com">Email</a></li>
              <li><a href="tel:+918247535709">Phone</a></li>
              <li><a href="https://www.linkedin.com/in/saikeerthana-jampani-178092222/">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Saikeerthana. Designed & Built with React. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;