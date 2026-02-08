import React from 'react';

interface Education {
    degree: string;
    institution: string;
    period: string;
    description: string;
}

interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
}

const educationData: Education[] = [
    {
        degree: 'Bachelors in Computer Science',
        institution: 'COMSATS University Islamabad',
        period: '2021 - 2025',
        description: 'Focused on AI/ML, software engineering, and data structures. Completed projects in deep learning and NLP.'
    },
    {
        degree: 'Intermediate',
        institution: 'Pakistan Air Force College Sargodha',
        period: '2018 - 2020',
        description: 'Pre-engineering with focus on mathematics and physics fundamentals.'
    }
];

const experienceData: Experience[] = [
    {
        title: 'Junior AI/ML Engineer',
        company: 'Orixity Solutions, Islamabad',
        period: 'Jan 2024 - Jan 2026',
        description: 'Engaged in end-to-end ML projects, from data collection to model deployment. Implemented MLOps practices for continuous integration and delivery of machine learning models.'
    },
    {
        title: 'AI Solutions Expert',
        company: 'FirstExist Solutions, Botswana',
        period: 'Feb 2023 - Jan 2024',
        description: 'Developed machine learning solutions for mining machinery. Built predictive models to estimate maintenance schedules and equipment lifespans.'
    }
];

export const Resume: React.FC = () => {
    return (
        <section id="resume" className="bg-lighter">
            <div className="container">
                <h2 className="section-title">RESUME</h2>
                <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-text-gray)',
                    marginBottom: '3rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}>
                    MY EDUCATIONAL & PROFESSIONAL BACKGROUND
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem'
                }}>
                    {/* Education Column */}
                    <div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginBottom: '2rem'
                        }}>
                            <span style={{
                                fontSize: '1.5rem'
                            }}>🎓</span>
                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: '700',
                                textTransform: 'uppercase'
                            }}>
                                EDUCATION
                            </h3>
                        </div>

                        {educationData.map((edu, index) => (
                            <div key={index} className="timeline-item" style={{ marginBottom: '2rem' }}>
                                <span className="timeline-date">{edu.period}</span>
                                <h4 style={{
                                    fontSize: '1.125rem',
                                    fontWeight: '700',
                                    marginBottom: '0.5rem',
                                    marginTop: '0.75rem'
                                }}>
                                    {edu.degree}
                                </h4>
                                <p style={{
                                    fontSize: '0.875rem',
                                    color: 'var(--color-text-gray)',
                                    marginBottom: '0.5rem'
                                }}>
                                    {edu.institution}
                                </p>
                                <p style={{
                                    fontSize: '0.875rem',
                                    color: 'var(--color-text-gray)',
                                    lineHeight: '1.6',
                                    margin: 0
                                }}>
                                    {edu.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Experience Column */}
                    <div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginBottom: '2rem'
                        }}>
                            <span style={{
                                fontSize: '1.5rem'
                            }}>💼</span>
                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: '700',
                                textTransform: 'uppercase'
                            }}>
                                EXPERIENCE
                            </h3>
                        </div>

                        {experienceData.map((exp, index) => (
                            <div key={index} className="timeline-item" style={{ marginBottom: '2rem' }}>
                                <span className="timeline-date">{exp.period}</span>
                                <h4 style={{
                                    fontSize: '1.125rem',
                                    fontWeight: '700',
                                    marginBottom: '0.5rem',
                                    marginTop: '0.75rem'
                                }}>
                                    {exp.title}
                                </h4>
                                <p style={{
                                    fontSize: '0.875rem',
                                    color: 'var(--color-text-gray)',
                                    marginBottom: '0.5rem'
                                }}>
                                    {exp.company}
                                </p>
                                <p style={{
                                    fontSize: '0.875rem',
                                    color: 'var(--color-text-gray)',
                                    lineHeight: '1.6',
                                    margin: 0
                                }}>
                                    {exp.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 968px) {
          #resume .container > div:nth-child(3) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
};
