import React from 'react';
import picImage from '../resume/pic.png';

export const About: React.FC = () => {
    return (
        <section id="about" className="bg-light">
            <div className="container">
                <h2 className="section-title">
                    ABOUT <span className="highlight">ME</span>
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '300px 1fr',
                    gap: '4rem',
                    marginTop: '3rem'
                }}>
                    {/* Left Side - Profile Image */}
                    <div>
                        <div style={{
                            width: '100%',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: '8px solid var(--color-primary)',
                            aspectRatio: '1/1'
                        }}>
                            <img
                                src={picImage}
                                alt="Muhammad Fakhar"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div>
                        <h3 style={{
                            fontSize: '1.75rem',
                            marginBottom: '1rem',
                            fontWeight: '600'
                        }}>
                            I'm <span className="text-primary">Muhammad Fakhar</span>,
                        </h3>
                        <p style={{
                            fontSize: '1.25rem',
                            color: 'var(--color-text-gray)',
                            marginBottom: '1.5rem'
                        }}>
                            Full Stack AI/ML Engineer
                        </p>
                        <p style={{
                            fontSize: '0.9rem',
                            lineHeight: '1.8',
                            marginBottom: '1.5rem',
                            color: 'var(--color-text-gray)'
                        }}>
                            I am an AI/ML Engineer with hands-on experience in developing predictive models,
                            intelligent chatbots, and comprehensive machine learning solutions. My expertise
                            spans full-stack development, where I build production-grade applications that
                            integrate sophisticated AI capabilities.
                        </p>
                        <p style={{
                            fontSize: '0.9rem',
                            lineHeight: '1.8',
                            marginBottom: '2rem',
                            color: 'var(--color-text-gray)'
                        }}>
                            I am proficient in implementing MLOps practices, ensuring robust CI/CD pipelines
                            and efficient cloud deployments on platforms like AWS. With a strong foundation
                            in modern software engineering, I specialize in Generative AI and Agentic AI systems,
                            crafting solutions that solve complex real-world problems.
                        </p>

                        {/* Stats */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '1.5rem'
                        }}>
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
        @media (max-width: 968px) {
          #about .container > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
          
          #about .stat-box {
            padding: 1.5rem !important;
          }
        }
      `}</style>
        </section>
    );
};
