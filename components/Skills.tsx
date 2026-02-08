import React from 'react';

interface SkillCategory {
    title: string;
    skills: string[];
}

const skillCategories: SkillCategory[] = [
    {
        title: 'Core AI/ML',
        skills: ['Data Preprocessing', 'Statistical Modeling', 'Model Development & Evaluation', 'Deep Learning', 'Computer Vision', 'NLP', 'LLM Finetuning', 'OCR', 'RAG', 'Prompt Engineering']
    },
    {
        title: 'Agentic AI & Automation',
        skills: ['Agentic AI', 'Multi-Agent Systems', 'LangGraph', 'Agent Orchestration', 'Pipeline Design']
    },
    {
        title: 'MLOps & DevOps',
        skills: ['Docker', 'AWS (S3, EC2, SageMaker, Lambda)', 'Terraform', 'Jenkins', 'DVC', 'MLflow', 'Git', 'Version Control']
    },
    {
        title: 'Frameworks & Libraries',
        skills: ['PyTorch', 'Scikit-Learn', 'TensorFlow', 'NumPy', 'Pandas', 'SciPy', 'Matplotlib', 'Seaborn', 'NestJS', 'React']
    },
    {
        title: 'Mobile & Web',
        skills: ['React', 'Flutter', 'JavaScript', 'RESTful API', 'Node.js', 'FastAPI', 'Flask', 'PostgreSQL', 'MongoDB']
    }
];

export const Skills: React.FC = () => {
    return (
        <section id="skills" className="bg-lighter">
            <div className="container">
                <h2 className="section-title">
                    <span className="highlight">TECHNICAL</span> SKILLS
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    marginTop: '3rem'
                }}>
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="card"
                            style={{
                                padding: '0',
                                border: '2px solid var(--color-border)',
                                transition: 'all 0.3s ease',
                                overflow: 'hidden'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.borderColor = 'var(--color-primary)';
                                e.currentTarget.style.transform = 'translateY(-5px)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.borderColor = 'var(--color-border)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            {/* Yellow Header */}
                            <div style={{
                                backgroundColor: 'var(--color-primary)',
                                padding: '1.25rem 1.5rem',
                                borderBottom: '2px solid var(--color-border)'
                            }}>
                                <h3 style={{
                                    fontSize: '1.125rem',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    margin: 0,
                                    color: 'var(--color-text-dark)',
                                    letterSpacing: '1px'
                                }}>
                                    {category.title}
                                </h3>
                            </div>

                            {/* Skills Content */}
                            <div style={{ padding: '1.5rem' }}>
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '0.75rem'
                                }}>
                                    {category.skills.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            style={{
                                                padding: '0.5rem 1rem',
                                                backgroundColor: 'var(--color-bg-light)',
                                                color: 'var(--color-text-dark)',
                                                fontSize: '0.813rem',
                                                fontWeight: '500',
                                                borderRadius: '4px',
                                                border: '1px solid var(--color-border)',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseOver={(e) => {
                                                e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                                                e.currentTarget.style.borderColor = 'var(--color-primary)';
                                                e.currentTarget.style.transform = 'scale(1.05)';
                                            }}
                                            onMouseOut={(e) => {
                                                e.currentTarget.style.backgroundColor = 'var(--color-bg-light)';
                                                e.currentTarget.style.borderColor = 'var(--color-border)';
                                                e.currentTarget.style.transform = 'scale(1)';
                                            }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          #skills > .container > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
};
