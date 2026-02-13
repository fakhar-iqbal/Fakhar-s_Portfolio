import React from 'react';
import picImage from '../resume/pic.png';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-lighter">
      <div className="container">
        <div className="hero-grid">
          {/* Header - Greeting & Name */}
          <div className="hero-header">
            <p className="hero-greeting">
              HI THERE!
            </p>
            <h1 className="hero-name">
              I'M <span className="text-primary">MUHAMMAD FAKHAR</span>
            </h1>
          </div>

          {/* Image Container */}
          <div className="hero-image-container">
            <div className="blob-wrapper">
              <div className="blob-bg" />
              <div className="blob-image-container">
                <img
                  src={picImage}
                  alt="Muhammad Fakhar"
                  className="blob-image"
                />
              </div>
            </div>
          </div>

          {/* Info - Title, Description, Actions */}
          <div className="hero-info">
            <p className="hero-title">
              Full Stack AI/ML Engineer | AI Solutions Architect | Software Engineer | MLOps & Cloud ML
            </p>
            <p className="hero-description">
              I build AI that actually works.
              I'm the person who figures out the "impossible" stuff, whether it's teaching computers to think smarter or building something from zero.
              I love talking to people, trying new things, and making tech that matters.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                HIRE ME
              </a>
              <a
                href="./resume/Fakhar_SE_AI_Engineering.pdf"
                download
                className="btn btn-cv"
              >
                DOWNLOAD CV
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          grid-template-areas: 
            "header image"
            "info image";
          gap: 2rem 4rem;
          align-items: center;
        }

        .hero-header {
          grid-area: header;
        }

        .hero-info {
          grid-area: info;
          align-self: start;
        }

        .hero-image-container {
          grid-area: image;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-greeting {
          font-size: 1.25rem;
          font-weight: 500;
          margin-bottom: 1rem;
          color: var(--color-text-gray);
        }

        .hero-name {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .hero-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: var(--color-primary);
          line-height: 1.4;
        }

        .hero-description {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 2.5rem;
          color: var(--color-text-gray);
          max-width: 550px;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn-cv {
          background-color: transparent;
          border: 2px solid var(--color-primary);
          color: var(--color-text-dark);
        }

        .btn-cv:hover {
          background-color: var(--color-primary);
        }

        .blob-wrapper {
          position: relative;
          width: 100%;
          max-width: 450px;
          aspect-ratio: 1/1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .blob-bg {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #FFB74D 0%, #FF9800 100%);
          animation: blobAnimation 8s linear infinite;
          filter: blur(10px);
          opacity: 0.8;
        }

        .blob-image-container {
          position: relative;
          width: 90%;
          height: 90%;
          overflow: hidden;
          animation: blobAnimation 8s linear infinite;
          border: 4px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          background: #ffffff;
        }

        .blob-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.1);
        }

        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr;
            grid-template-areas: 
              "header"
              "image"
              "info";
            gap: 2.5rem;
            text-align: center;
          }

          .hero-info {
            align-self: center;
          }

          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-actions {
            justify-content: center;
          }

          .blob-wrapper {
            max-width: 300px;
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .hero-name {
            font-size: 2.8rem;
          }

          .hero-title {
            font-size: 1.1rem;
          }

          .hero-description {
            font-size: 1rem;
          }
        }
      `}</style>
    </section >
  );
};
