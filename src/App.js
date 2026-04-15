import React, { useState, useEffect, useRef } from 'react';

const Portfolio = () => {
  const [isDark, setIsDark] = useState(true);
  const [visibleSections, setVisibleSections] = useState({});

  useEffect (() => {

  },[]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }));
        }
      });
    }, observerOptions);

    document.querySelectorAll('[data-scroll]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`${isDark ? 'dark' : 'light'}`}>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');

        :root {
          --primary: #0a0e27;
          --secondary: #1a1f3a;
          --accent: #00d4ff;
          --text-primary: #ffffff;
          --text-secondary: #a0aec0;
          --border: #2d3748;
        }

        .light {
          --primary: #ffffff;
          --secondary: #f7fafc;
          --accent: #0066ff;
          --text-primary: #0a0e27;
          --text-secondary: #4a5568;
          --border: #e2e8f0;
        }

        .dark {
          --primary: #0a0e27;
          --secondary: #1a1f3a;
          --accent: #00d4ff;
          --text-primary: #ffffff;
          --text-secondary: #a0aec0;
          --border: #2d3748;
        }

        body {
          background: var(--primary);
          color: var(--text-primary);
          font-family: 'DM Sans', sans-serif;
          line-height: 1.6;
          transition: background 0.3s, color 0.3s;
        }

        /* Navbar */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 70px;
          background: rgba(10, 14, 39, 0.7);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 2rem;
          z-index: 1000;
          transition: all 0.3s;
        }

        .light .navbar {
          background: rgba(255, 255, 255, 0.7);
        }

        .navbar-brand {
          font-size: 1.5rem;
          font-weight: 700;
          font-family: 'Sora', sans-serif;
          background: linear-gradient(135deg, var(--accent), #0099ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
          list-style: none;
        }

        .nav-link {
          color: var(--text-secondary);
          cursor: pointer;
          transition: color 0.3s;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .nav-link:hover {
          color: var(--accent);
        }

        .theme-toggle {
          width: 50px;
          height: 28px;
          background: var(--secondary);
          border: 1px solid var(--border);
          border-radius: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 2px;
          transition: all 0.3s;
        }

        .theme-toggle:hover {
          border-color: var(--accent);
        }

        .toggle-circle {
          width: 24px;
          height: 24px;
          background: var(--accent);
          border-radius: 50%;
          transition: transform 0.3s;
        }

        .dark .toggle-circle {
          transform: translateX(22px);
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .navbar {
            padding: 0 1rem;
          }
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          margin-top: 70px;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, var(--accent) 0%, transparent 70%);
          opacity: 0.1;
          border-radius: 50%;
          top: -200px;
          right: -200px;
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(30px); }
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          max-width: 1200px;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .hero-text h1 {
          font-size: clamp(2.5rem, 8vw, 4rem);
          font-family: 'Sora', sans-serif;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, var(--accent), #0099ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-text p {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          max-width: 500px;
        }

        .cta-button {
          display: inline-block;
          padding: 12px 32px;
          background: var(--accent);
          color: var(--primary);
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 1rem;
          font-family: 'DM Sans', sans-serif;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
        }

        .hero-image {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-wrapper {
          width: 300px;
          height: 300px;
          border-radius: 20px;
          overflow: hidden;
          border: 2px solid var(--border);
          background: var(--secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          animation: slideIn 0.8s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .image-wrapper {
            width: 250px;
            height: 250px;
          }

          .hero-text h1 {
            font-size: 2rem;
          }
        }

        /* About Section */
        .about {
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
          position: relative;
          display: inline-block;
          width: 100%;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 4px;
          background: var(--accent);
          border-radius: 2px;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .about-text p {
          font-size: 1.05rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }

        .about-highlights {
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
          background: var(--secondary);
          border-radius: 8px;
          border-left: 3px solid var(--accent);
        }

        .highlight-icon {
          font-size: 1.5rem;
        }

        .highlight-text {
          display: flex;
          flex-direction: column;
        }

        .highlight-text strong {
          color: var(--text-primary);
          font-weight: 600;
        }

        .highlight-text span {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
          }

          .about {
            padding: 4rem 1rem;
          }
        }

        /* Skills Section */
        .skills {
          padding: 6rem 2rem;
          background: var(--secondary);
        }

        .skills-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .skill-card {
          background: var(--primary);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid var(--border);
          transition: all 0.3s;
        }

        .skill-card:hover {
          border-color: var(--accent);
          transform: translateY(-5px);
        }

        .skill-name {
          font-weight: 600;
          margin-bottom: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .skill-percentage {
          font-size: 0.9rem;
          color: var(--accent);
          font-weight: 700;
        }

        .progress-bar {
          height: 6px;
          background: var(--border);
          border-radius: 3px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent), #0099ff);
          border-radius: 3px;
          transition: width 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
          width: 0%;
        }

        @media (max-width: 768px) {
          .skills {
            padding: 4rem 1rem;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Experience Section */
        .experience {
          padding: 6rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .timeline {
          position: relative;
          padding: 2rem 0;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 100%;
          background: linear-gradient(180deg, var(--accent), transparent);
        }

        .timeline-item {
          margin-bottom: 3rem;
          width: 100%;
        }

        .timeline-item:nth-child(odd) .timeline-content {
          margin-left: 0;
          margin-right: auto;
          width: 45%;
        }

        .timeline-item:nth-child(even) .timeline-content {
          margin-left: auto;
          margin-right: 0;
          width: 45%;
        }

        .timeline-dot {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 16px;
          height: 16px;
          background: var(--accent);
          border: 3px solid var(--primary);
          border-radius: 50%;
          top: 20px;
          z-index: 10;
        }

        .timeline-content {
          background: var(--secondary);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid var(--border);
          position: relative;
          transition: all 0.3s;
        }

        .timeline-content:hover {
          border-color: var(--accent);
          box-shadow: 0 10px 30px rgba(0, 212, 255, 0.1);
        }

        .timeline-date {
          color: var(--accent);
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .timeline-title {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .timeline-company {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 1rem;
        }

        .timeline-description {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .timeline::before {
            left: 20px;
          }

          .timeline-dot {
            left: 20px;
          }

          .timeline-item:nth-child(odd) .timeline-content,
          .timeline-item:nth-child(even) .timeline-content {
            width: calc(100% - 60px);
            margin-left: 60px;
            margin-right: 0;
          }

          .experience {
            padding: 4rem 1rem;
          }
        }

        /* Projects Section */
        .projects {
          padding: 6rem 2rem;
          background: var(--secondary);
        }

        .projects-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .project-card {
          background: var(--primary);
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid var(--border);
          transition: all 0.3s;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          border-color: var(--accent);
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 212, 255, 0.15);
        }

        .project-image {
          width: 100%;
          height: 200px;
          background: linear-gradient(135deg, var(--accent), #0099ff);
          opacity: 0.2;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          overflow: hidden;
          position: relative;
        }

        .project-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent, var(--accent));
          opacity: 0;
          transition: opacity 0.3s;
        }

        .project-card:hover .project-image::after {
          opacity: 0.2;
        }

        .project-content {
          padding: 2rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .project-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .project-description {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: auto;
        }

        .tech-tag {
          display: inline-block;
          padding: 4px 12px;
          background: var(--secondary);
          border: 1px solid var(--border);
          border-radius: 20px;
          font-size: 0.8rem;
          color: var(--accent);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .projects {
            padding: 4rem 1rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Education Section */
        .education {
          padding: 6rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .education-item {
          background: var(--secondary);
          padding: 2rem;
          border-radius: 12px;
          border-left: 4px solid var(--accent);
          margin-bottom: 2rem;
          transition: all 0.3s;
        }

        .education-item:hover {
          transform: translateX(10px);
        }

        .education-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 1rem;
        }

        .education-title {
          font-size: 1.2rem;
          font-weight: 700;
        }

        .education-year {
          color: var(--accent);
          font-weight: 600;
          font-size: 0.9rem;
        }

        .education-institution {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-top: 0.5rem;
        }

        .education-details {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-top: 1rem;
        }

        @media (max-width: 768px) {
          .education {
            padding: 4rem 1rem;
          }

          .education-header {
            flex-direction: column;
            gap: 0.5rem;
          }
        }

        /* Contact Section */
        .contact {
          padding: 6rem 2rem;
          background: var(--secondary);
          text-align: center;
        }

        .contact-container {
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-text {
          color: var(--text-secondary);
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
          background: var(--primary);
          border: 1px solid var(--border);
          border-radius: 8px;
          color: var(--text-primary);
          text-decoration: none;
          transition: all 0.3s;
          font-size: 0.95rem;
        }

        .contact-link:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-input,
        .form-textarea {
          padding: 12px 16px;
          background: var(--primary);
          border: 1px solid var(--border);
          border-radius: 8px;
          color: var(--text-primary);
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          transition: border 0.3s;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--accent);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        /* Footer */
        .footer {
          padding: 3rem 2rem;
          background: var(--primary);
          border-top: 1px solid var(--border);
          text-align: center;
          color: var(--text-secondary);
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
          color: var(--text-primary);
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
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-section a:hover {
          color: var(--accent);
        }

        .footer-bottom {
          border-top: 1px solid var(--border);
          padding-top: 2rem;
          font-size: 0.9rem;
        }

        /* Scroll Reveal Animation */
        [data-scroll] {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        [data-scroll].visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .contact {
            padding: 4rem 1rem;
          }

          .footer-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">SK</div>
        <ul className="nav-links">
          <li className="nav-link" onClick={() => scrollToSection('about')}>About</li>
          <li className="nav-link" onClick={() => scrollToSection('skills')}>Skills</li>
          <li className="nav-link" onClick={() => scrollToSection('experience')}>Experience</li>
          <li className="nav-link" onClick={() => scrollToSection('projects')}>Projects</li>
          <li className="nav-link" onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
        <div
          className="theme-toggle"
          onClick={() => setIsDark(!isDark)}
          role="button"
          tabIndex={0}
        >
          <div className="toggle-circle"></div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="hero" data-scroll>
        <div className="hero-content">
          <div className="hero-text">
            <h1>Saikeerthana</h1>
            <p>Software Developer specializing in ETL, .NET, and healthcare data solutions. Crafting elegant, scalable systems that drive business impact.</p>
            <button className="cta-button" onClick={() => scrollToSection('contact')}>
              Get In Touch
            </button>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">👩‍💻</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about" data-scroll>
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div>
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
          <div>
            <div className="about-highlights">
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
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills" data-scroll>
        <div className="skills-container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-grid">
            {[
              { name: 'SSIS & ETL', percentage: 95 },
              { name: '.NET & C#', percentage: 90 },
              { name: 'SQL Server', percentage: 92 },
              { name: 'SSRS & Reporting', percentage: 88 },
              { name: 'QNXT Platform', percentage: 85 },
              { name: 'Azure Cloud', percentage: 70 },
            ].map((skill, index) => (
              <SkillCard
                key={index}
                skill={skill}
                isVisible={visibleSections[`skill-${index}`]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience" id="experience" data-scroll>
        <h2 className="section-title">Professional Experience</h2>
        <div className="timeline">
          {[
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
          ].map((exp, index) => (
            <div key={index} className="timeline-item" data-scroll>
              <div className="timeline-dot"></div>
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
      <section className="projects" id="projects" data-scroll>
        <div className="projects-container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {[
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
            ].map((project, index) => (
              <div key={index} className="project-card" data-scroll>
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
        </div>
      </section>

      {/* Education Section */}
      <section className="education" id="education" data-scroll>
        <h2 className="section-title">Education & Certifications</h2>
        <div>
          <div className="education-item" data-scroll>
            <div className="education-header">
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

          <div className="education-item" data-scroll>
            <div className="education-header">
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
      <section className="contact" id="contact" data-scroll>
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

// Skill Card Component with Animation
const SkillCard = ({ skill, isVisible }) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setProgress(skill.percentage), 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.percentage]);

  return (
    <div className="skill-card" data-scroll>
      <div className="skill-name">
        <span>{skill.name}</span>
        <span className="skill-percentage">{skill.percentage}%</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Portfolio;
