import React, { useState } from 'react';
import picImage from '../media/goldmines.png';
import picImage2 from '../media/aipoweredfoodapp.png';
import picImage3 from '../media/saudialawbot.png';
import picImage4 from '../media/jobagent.png';
import picImage5 from '../media/securechattingapp.png';
import picImage6 from '../media/ecommerce.jpg';

interface Project {
  title: string;
  category: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
}

const projects: Project[] = [
  {
    title: 'Gold Mines Machine Age Prediction',
    category: 'AI/ML',
    image: picImage,
    shortDescription: 'Predictive analytics for mining equipment',
    fullDescription: 'Estimated age of gold mining machines by integrating multiple industrial datasets. Cleaning large volumes of raw sensor data involved extensive preprocessing and feature engineering.',
    technologies: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Data Preprocessing'],
    features: [
      'Integrated multiple industrial sensor datasets',
      'Advanced data cleaning and preprocessing',
      'Predictive model with 92% accuracy',
      'Maintenance schedule optimization'
    ]
  },
  {
    title: 'AI-Powered Food Ordering App',
    category: 'Full Stack',
    image: picImage2,
    shortDescription: 'Flutter app with RAG chatbot',
    fullDescription: 'Flutter application with integrated realtime RAG chatbot. Features route-based ordering system and dynamic embedding update mechanism for live menu changes.',
    technologies: ['Flutter', 'RAG', 'Vector Embeddings', 'FastAPI', 'MongoDB'],
    features: [
      'Real-time AI chatbot for order assistance',
      'Dynamic menu embedding updates',
      'Route-based ordering system',
      'Cross-platform mobile application'
    ]
  },
  {
    title: 'Saudi Law RAG Chatbot',
    category: 'AI/ML',
    image: picImage3,
    shortDescription: 'Arabic voice-enabled legal chatbot',
    fullDescription: 'Arabic voice-enabled chatbot answering questions about Saudi Arabian laws. Hybrid search system retrieves relevant legal documents with high accuracy.',
    technologies: ['NLP', 'Voice AI', 'PyTorch', 'RAG', 'Arabic Language Processing'],
    features: [
      'Voice-enabled interface in Arabic',
      'Hybrid search for legal documents',
      'High-accuracy document retrieval',
      'Real-time legal query responses'
    ]
  },
  {
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    image: picImage6,
    shortDescription: 'React & Go microservices platform',
    fullDescription: 'Scalable platform with React frontend and Go backend. Microservices architecture, secure role-based access, and real-time inventory updates.',
    technologies: ['React', 'Go', 'Microservices', 'PostgreSQL', 'Docker'],
    features: [
      'Microservices architecture',
      'Role-based access control',
      'Real-time inventory management',
      'Scalable cloud deployment'
    ]
  },
  {
    title: 'Secure Chatting App',
    category: 'AI/ML',
    image: picImage5,
    shortDescription: 'LSTM-based spam filtering',
    fullDescription: 'Context-aware spam & vulgar content filtering using LSTM-based deep learning models. Reduces false negatives significantly in spam classification.',
    technologies: ['LSTM', 'Deep Learning', 'TensorFlow', 'NLP', 'Python'],
    features: [
      'Context-aware spam detection',
      'LSTM neural network model',
      'Vulgar content filtering',
      '95% accuracy in classification'
    ]
  },
  {
    title: 'Autonomous Job Application Agent',
    category: 'AI/ML',
    image: picImage4,
    shortDescription: 'n8n automation for job applications',
    fullDescription: 'Built a dual-pipeline automation agent in n8n that discovers job openings, extracts HR contact information, and sends personalized application emails with AI-generated cover letters. Integrated LinkedIn scraping and Jooble.pk API for job discovery, implemented email extraction logic achieving above 90% contact discovery rate, and utilized Gemini for role-specific cover letter generation.',
    technologies: ['n8n', 'LinkedIn API', 'Jooble API', 'Gemini AI', 'SMTP', 'Web Scraping'],
    features: [
      'Dual-pipeline automation for job discovery',
      '90%+ contact discovery rate',
      'AI-generated personalized cover letters',
      '50+ daily automated applications',
      'LinkedIn and Jooble.pk integration',
      'Custom SMTP and error handling'
    ]
  }
];

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="portfolio" className="bg-lighter">
        <div className="container">
          <h2 className="section-title">PORTFOLIO</h2>
          <p style={{
            fontSize: '0.875rem',
            color: 'var(--color-text-gray)',
            marginBottom: '3rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            textAlign: 'center'
          }}>
            MY RECENT PROJECTS
          </p>

          {/* Portfolio Grid */}
          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="project-overlay"></div>
                </div>
                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.shortDescription}</p>
                  <button
                    className="btn-view-details"
                    onClick={() => setSelectedProject(project)}
                  >
                    VIEW DETAILS
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              ✕
            </button>

            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>

              <div className="modal-info">
                <span className="modal-category">{selectedProject.category}</span>
                <h2 className="modal-title">{selectedProject.title}</h2>
                <p className="modal-description">{selectedProject.fullDescription}</p>

                <div className="modal-section">
                  <h4>Key Features</h4>
                  <ul className="modal-features">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .project-card {
          background: var(--color-bg-white);
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid var(--color-border);
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }

        .project-image {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-image img {
          transform: scale(1.05);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.3));
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-category {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--color-primary);
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: var(--color-text-dark);
        }

        .project-description {
          font-size: 0.875rem;
          color: var(--color-text-gray);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .btn-view-details {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background-color: var(--color-primary);
          color: var(--color-text-dark);
          font-size: 0.813rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-view-details:hover {
          background-color: white;
          color: #000000;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 2rem;
          overflow-y: auto;
        }

        .modal-content {
          background: var(--color-bg-white);
          border-radius: 12px;
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--color-primary);
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: background-color 0.3s ease;
        }

        .modal-close:hover {
          background-color: var(--color-secondary);
          color: white;
        }

        .modal-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }

        .modal-image {
          position: relative;
          padding: 2rem;
          background-color: #f5f5f5;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-image img {
          width: 100%;
          height: 100%;
          max-height: 500px;
          object-fit: contain;
          border-radius: 8px;
        }

        .modal-info {
          display: flex;
          flex-direction: column;
          background-color: white;
          padding: 2.5rem;
        }

        .modal-category {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--color-primary);
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
        }

        .modal-title {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--color-text-dark);
        }

        .modal-description {
          font-size: 1rem;
          color: var(--color-text-gray);
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .modal-section {
          margin-bottom: 1.5rem;
        }

        .modal-section h4 {
          font-size: 1rem;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 1rem;
          color: var(--color-text-dark);
        }

        .modal-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .modal-tag {
          padding: 0.5rem 1rem;
          background-color: var(--color-bg-light);
          color: var(--color-text-dark);
          font-size: 0.813rem;
          font-weight: 500;
          border-radius: 4px;
          border: 1px solid var(--color-border);
        }

        .modal-features {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .modal-features li {
          padding: 0.75rem 0;
          border-bottom: 1px solid var(--color-border);
          font-size: 0.875rem;
          color: var(--color-text-gray);
          position: relative;
          padding-left: 1.5rem;
        }

        .modal-features li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--color-primary);
          font-weight: 700;
        }

        .modal-features li:last-child {
          border-bottom: none;
        }

        @media (max-width: 968px) {
          #portfolio .portfolio-grid {
            grid-template-columns: 1fr !important;
          }

          .modal-body {
            grid-template-columns: 1fr !important;
          }

          .modal-content {
            margin: 1rem;
            max-height: 85vh;
          }

          .modal-image {
            padding: 1rem;
          }

          .modal-info {
            padding: 1.5rem;
          }

          .modal-title {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          #portfolio {
            padding: 60px 20px;
          }

          .project-content {
            padding: 1.25rem;
          }

          .modal-overlay {
            padding: 1rem;
          }
        }
      `}</style>
    </>
  );
};
