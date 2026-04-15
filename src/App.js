import React, { useState } from 'react';

const Portfolio = () => {
  const [isDark, setIsDark] = useState(true);

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
      `}</style>

      {/* Navbar */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '70px',
        background: isDark ? 'rgba(10, 14, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 2rem',
        zIndex: 1000,
        borderBottom: `1px solid ${isDark ? '#2d3748' : '#e2e8f0'}`,
      }}>
        <div style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#00d4ff',
        }}>SK</div>

        <div style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none',
        }}>
          <a href="#about" style={{ color: isDark ? '#a0aec0' : '#4a5568', textDecoration: 'none', cursor: 'pointer' }}>About</a>
          <a href="#skills" style={{ color: isDark ? '#a0aec0' : '#4a5568', textDecoration: 'none', cursor: 'pointer' }}>Skills</a>
          <a href="#experience" style={{ color: isDark ? '#a0aec0' : '#4a5568', textDecoration: 'none', cursor: 'pointer' }}>Experience</a>
          <a href="#projects" style={{ color: isDark ? '#a0aec0' : '#4a5568', textDecoration: 'none', cursor: 'pointer' }}>Projects</a>
          <a href="#contact" style={{ color: isDark ? '#a0aec0' : '#4a5568', textDecoration: 'none', cursor: 'pointer' }}>Contact</a>
        </div>

        <button onClick={() => setIsDark(!isDark)} style={{
          width: '50px',
          height: '28px',
          background: isDark ? '#1a1f3a' : '#f7fafc',
          border: `1px solid ${isDark ? '#2d3748' : '#e2e8f0'}`,
          borderRadius: '14px',
          cursor: 'pointer',
        }}>
          {isDark ? '🌙' : '☀️'}
        </button>
      </nav>

      {/* Hero Section */}
      <section id="hero" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        marginTop: '70px',
      }}>
        <div style={{
          maxWidth: '1200px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }}>
          <div>
            <h1 style={{
              fontSize: '3.5rem',
              fontFamily: "'Sora', sans-serif",
              fontWeight: 700,
              marginBottom: '1.5rem',
              color: '#ffffff',
            }}>Saikeerthana</h1>
            <p style={{
              fontSize: '1.1rem',
              color: '#b0b8c8',
              marginBottom: '2rem',
              lineHeight: '1.8',
              maxWidth: '500px',
            }}>
              Software Developer specializing in ETL, .NET, and healthcare data solutions. Crafting elegant, scalable systems that drive business impact.
            </p>
            <button style={{
              padding: '12px 32px',
              background: '#00d4ff',
              color: '#0a0e27',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '1rem',
            }}>
              Get In Touch
            </button>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <div style={{
              width: '300px',
              height: '300px',
              borderRadius: '20px',
              border: `2px solid ${isDark ? '#2d3748' : '#e2e8f0'}`,
              background: isDark ? '#1a1f3a' : '#f7fafc',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4rem',
            }}>👩‍💻</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{
        padding: '6rem 2rem',
        background: isDark ? '#0a0e27' : '#ffffff',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontFamily: "'Sora', sans-serif",
            fontWeight: 700,
            marginBottom: '3rem',
            textAlign: 'center',
          }}>About Me</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
          }}>
            <div>
              <p style={{ marginBottom: '1.5rem', color: isDark ? '#a0aec0' : '#4a5568' }}>
                I'm a Software Developer with 3.6 years of hands-on experience in designing and optimizing ETL pipelines, data integration solutions, and enterprise applications in the healthcare domain.
              </p>
              <p style={{ marginBottom: '1.5rem', color: isDark ? '#a0aec0' : '#4a5568' }}>
                My expertise spans SSIS, SSRS, .NET 8, SQL Server, and QNXT platforms. I'm passionate about writing clean, efficient code and solving complex data challenges.
              </p>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
              <div style={{
                padding: '1rem',
                background: isDark ? '#1a1f3a' : '#f7fafc',
                borderRadius: '8px',
                borderLeft: '3px solid #00d4ff',
              }}>
                <strong style={{ color: '#00d4ff' }}>3.6 Years Experience</strong>
                <p style={{ fontSize: '0.9rem', color: isDark ? '#a0aec0' : '#4a5568' }}>Software Development & ETL</p>
              </div>
              <div style={{
                padding: '1rem',
                background: isDark ? '#1a1f3a' : '#f7fafc',
                borderRadius: '8px',
                borderLeft: '3px solid #00d4ff',
              }}>
                <strong style={{ color: '#00d4ff' }}>Best Performer</strong>
                <p style={{ fontSize: '0.9rem', color: isDark ? '#a0aec0' : '#4a5568' }}>HMSA Client Recognition</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{
        padding: '6rem 2rem',
        background: isDark ? '#1a1f3a' : '#f7fafc',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontFamily: "'Sora', sans-serif",
            fontWeight: 700,
            marginBottom: '3rem',
            textAlign: 'center',
          }}>Skills & Expertise</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}>
            {['SSIS & ETL', '.NET & C#', 'SQL Server', 'SSRS', 'QNXT', 'Azure'].map((skill, i) => (
              <div key={i} style={{
                padding: '2rem',
                background: isDark ? '#0a0e27' : '#ffffff',
                borderRadius: '12px',
                border: `1px solid ${isDark ? '#2d3748' : '#e2e8f0'}`,
              }}>
                <div style={{ marginBottom: '1rem', fontWeight: 600 }}>{skill}</div>
                <div style={{
                  height: '6px',
                  background: isDark ? '#2d3748' : '#e2e8f0',
                  borderRadius: '3px',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    height: '100%',
                    background: '#00d4ff',
                    width: '85%',
                  }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{
        padding: '6rem 2rem',
        background: isDark ? '#0a0e27' : '#ffffff',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontFamily: "'Sora', sans-serif",
            fontWeight: 700,
            marginBottom: '3rem',
            textAlign: 'center',
          }}>Experience</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{
              padding: '2rem',
              background: isDark ? '#1a1f3a' : '#f7fafc',
              borderRadius: '12px',
              borderLeft: '4px solid #00d4ff',
            }}>
              <div style={{ color: '#00d4ff', fontWeight: 600, marginBottom: '0.5rem' }}>Jul 2025 – Present</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Software Engineer</div>
              <div style={{ color: isDark ? '#a0aec0' : '#4a5568', marginBottom: '1rem' }}>Infinite Computer Solutions</div>
              <div style={{ color: isDark ? '#a0aec0' : '#4a5568' }}>Led .NET 8 migration for 8+ applications, executed SSIS/SSRS migration from SQL Server 2017 to 2019.</div>
            </div>
            <div style={{
              padding: '2rem',
              background: isDark ? '#1a1f3a' : '#f7fafc',
              borderRadius: '12px',
              borderLeft: '4px solid #00d4ff',
            }}>
              <div style={{ color: '#00d4ff', fontWeight: 600, marginBottom: '0.5rem' }}>Nov 2022 – Jul 2025</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Associate Software Engineer</div>
              <div style={{ color: isDark ? '#a0aec0' : '#4a5568', marginBottom: '1rem' }}>Infinite Computer Solutions</div>
              <div style={{ color: isDark ? '#a0aec0' : '#4a5568' }}>Designed and deployed 15+ SSIS packages for ETL workflows, optimized SQL queries achieving 40% performance improvement.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '6rem 2rem',
        background: isDark ? '#1a1f3a' : '#f7fafc',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontFamily: "'Sora', sans-serif",
            fontWeight: 700,
            marginBottom: '2rem',
          }}>Let's Connect</h2>
          <p style={{
            color: isDark ? '#a0aec0' : '#4a5568',
            marginBottom: '2rem',
          }}>Have a project in mind? Reach out and let's create something amazing together.</p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <a href="mailto:saikeerthanajampani@gmail.com" style={{
              padding: '10px 20px',
              background: isDark ? '#0a0e27' : '#ffffff',
              border: `1px solid ${isDark ? '#2d3748' : '#e2e8f0'}`,
              borderRadius: '8px',
              color: isDark ? '#ffffff' : '#000000',
              textDecoration: 'none',
              cursor: 'pointer',
            }}>
              📧 Email
            </a>
            <a href="https://www.linkedin.com/in/saikeerthana-jampani-178092222/" target="_blank" rel="noopener noreferrer" style={{
              padding: '10px 20px',
              background: isDark ? '#0a0e27' : '#ffffff',
              border: `1px solid ${isDark ? '#2d3748' : '#e2e8f0'}`,
              borderRadius: '8px',
              color: isDark ? '#ffffff' : '#000000',
              textDecoration: 'none',
              cursor: 'pointer',
            }}>
              💼 LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '3rem 2rem',
        background: isDark ? '#0a0e27' : '#ffffff',
        borderTop: `1px solid ${isDark ? '#2d3748' : '#e2e8f0'}`,
        textAlign: 'center',
        color: isDark ? '#a0aec0' : '#4a5568',
      }}>
        <p>&copy; 2025 Saikeerthana. Designed & Built with React.</p>
      </footer>
    </div>
  );
};

export default Portfolio;