import React from 'react';
import picImage from '../resume/pic.png';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-lighter">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Left Side - Text Content */}
          <div>
            <p style={{
              fontSize: '1.25rem',
              fontWeight: '500',
              marginBottom: '1rem',
              color: 'var(--color-text-gray)'
            }}>
              HI THERE!
            </p>
            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: '800',
              marginBottom: '1rem',
              lineHeight: '1.1'
            }}>
              I'M{' '}
              <span className="text-primary">MUHAMMAD FAKHAR</span>
            </h1>
            <p style={{
              fontSize: '1.5rem',
              fontWeight: '400',
              marginBottom: '2rem',
              color: 'var(--color-text-gray)'
            }}>
              Full Stack AI/ML Engineer
            </p>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: '1.5',
              marginBottom: '2.5rem',
              color: 'var(--color-text-gray)',
              maxWidth: '500px'
            }}>
              I build AI that actually works.
              I'm the person who figures out the "impossible" stuff, whether it's teaching computers to think smarter or building something from zero.<br></br>
              I love talking to people, trying new things, and making tech that matters.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              <a href="#contact" className="btn btn-primary">
                HIRE ME
              </a>
              <a
                href="./resume/Fakhar_SE_AI_Engineering.pdf"
                download
                className="btn btn-primary"
                style={{
                  backgroundColor: 'transparent',
                  border: '2px solid var(--color-primary)',
                  color: 'var(--color-text-dark)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                DOWNLOAD CV
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {/* Profile Image with Blob Shape and Gradient */}
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '450px',
              aspectRatio: '1/1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Background Blob with Gradient */}
              <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #FFB74D 0%, #FF9800 100%)',
                animation: 'blobAnimation 8s linear infinite',
                filter: 'blur(10px)',
                opacity: '0.8'
              }} />

              {/* Profile Image Container with Blob Shape */}
              <div style={{
                position: 'relative',
                width: '90%',
                height: '90%',
                overflow: 'hidden',
                animation: 'blobAnimation 8s linear infinite',
                border: '4px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                background: '#ffffff'
              }}>
                <img
                  src={picImage}
                  alt="Muhammad Fakhar"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'scale(1.1)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #home .container > div {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          
          #home h1 {
            font-size: 2.5rem !important;
          }
          
          #home div[style*="width: 400px"] {
            width: 300px !important;
            height: 300px !important;
            margin: 0 auto;
          }
        }
      `}</style>
    </section >
  );
};
