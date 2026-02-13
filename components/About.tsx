import React from 'react';
import picImage from '../resume/pic.png';

export const About: React.FC = () => {
  return (
    <section id="about" className="bg-light">
      <div className="container">
        <h2 className="section-title">
          ABOUT <span className="highlight">ME</span>
        </h2>

        <div className="about-grid">
          {/* Left Side - Profile Image */}
          <div className="about-image-container">
            <div className="about-image-wrapper">
              <img
                src={picImage}
                alt="Muhammad Fakhar"
                className="about-image"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="about-content">
            <h3 className="about-greeting">
              I'm <span className="text-primary">Muhammad Fakhar</span>,
            </h3>
            <p className="about-title">
              Full Stack AI/ML Engineer | AI Solutions Architect | Cloud ML | MLOps | Shipping AI-Powered Apps | Jack of All Trades
            </p>
            <p className="about-text">
              I am an AI/ML Engineer with hands-on experience in developing predictive models,
              intelligent chatbots, and comprehensive machine learning solutions. My expertise
              spans full-stack development, where I build production-grade applications that
              integrate sophisticated AI capabilities.
            </p>
            <p className="about-text">
              I am proficient in implementing MLOps practices, ensuring robust CI/CD pipelines
              and efficient cloud deployments on platforms like AWS. With a strong foundation
              in modern software engineering, I specialize in Generative AI and Agentic AI systems,
              crafting solutions that solve complex real-world problems.
            </p>

            {/* Stats */}
            <div className="about-stats">
              <div className="stat-box">
                <span className="stat-number">3+</span>
                <span className="stat-label">YEARS EXPERIENCE</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">15+</span>
                <span className="stat-label">PROJECTS DONE</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">10+</span>
                <span className="stat-label">HAPPY CLIENTS</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">500+</span>
                <span className="stat-label">CODE COMMITS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 4rem;
          margin-top: 3rem;
          align-items: start;
        }

        .about-image-wrapper {
          width: 100%;
          border-radius: 50%;
          overflow: hidden;
          border: 8px solid var(--color-primary);
          aspect-ratio: 1/1;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .about-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .about-greeting {
          font-size: 1.75rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .about-title {
          font-size: 1rem;
          color: var(--color-text-gray);
          margin-bottom: 1.5rem;
        }

        .about-text {
          font-size: 0.938rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          color: var(--color-text-gray);
        }

        .stat-box:hover {
          background: white;
        }

        .stat-box:hover .stat-number,
        .stat-box:hover .stat-label {
          color: black;
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-top: 2.5rem;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .about-image-container {
            display: none;
          }

          .about-content {
            text-align: center;
          }

          .about-stats {
            gap: 1rem;
          }
        }

        @media (max-width: 576px) {
          .about-stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
