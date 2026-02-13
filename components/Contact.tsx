import React from 'react';

export const Contact: React.FC = () => {
    return (
        <section id="contact" className="bg-light">
            <div className="container">
                <h2 className="section-title">CONTACT</h2>

                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    marginTop: '3rem'
                }}>
                    <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: '600',
                        marginBottom: '1rem',
                        textAlign: 'center'
                    }}>
                        Get In Touch
                    </h3>
                    <p style={{
                        fontSize: '1rem',
                        color: 'var(--color-text-gray)',
                        marginBottom: '3rem',
                        textAlign: 'center',
                        lineHeight: '1.8'
                    }}>
                        Whether you have a question, a project proposal, or just want to connect,
                        feel free to reach out. I'm always open to discussing new opportunities and collaborations.
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '2rem'
                    }}>
                        {/* Email */}
                        <div className="card" style={{
                            textAlign: 'center',
                            padding: '2.5rem'
                        }}>
                            <div style={{
                                fontSize: '2.5rem',
                                marginBottom: '1rem'
                            }}>
                                ✉️
                            </div>
                            <h4 style={{
                                fontSize: '0.875rem',
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                marginBottom: '0.75rem',
                                color: 'var(--color-text-gray)'
                            }}>
                                Email Me At
                            </h4>
                            <a
                                href="mailto:fakhareiqbal3534@gmail.com"
                                style={{
                                    fontSize: '1rem',
                                    color: 'var(--color-text-dark)',
                                    fontWeight: '600'
                                }}
                            >
                                fakhareiqbal3534@gmail.com
                            </a>
                        </div>

                        {/* Phone */}
                        <div className="card" style={{
                            textAlign: 'center',
                            padding: '2.5rem'
                        }}>
                            <div style={{
                                fontSize: '2.5rem',
                                marginBottom: '1rem'
                            }}>
                                📱
                            </div>
                            <h4 style={{
                                fontSize: '0.875rem',
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                marginBottom: '0.75rem',
                                color: 'var(--color-text-gray)'
                            }}>
                                Call Me At
                            </h4>
                            <a
                                href="tel:+923059643544"
                                style={{
                                    fontSize: '1rem',
                                    color: 'var(--color-text-dark)',
                                    fontWeight: '600'
                                }}
                            >
                                +92 305 964 3544
                            </a>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div style={{
                        marginTop: '3rem',
                        textAlign: 'center'
                    }}>
                        <h4 style={{
                            fontSize: '0.875rem',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            marginBottom: '1.5rem',
                            color: 'var(--color-text-gray)',
                            letterSpacing: '1px'
                        }}>
                            Connect With Me
                        </h4>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '1.5rem'
                        }}>
                            <a
                                href="https://linkedin.com/in/muhammad-fakhar3534"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    backgroundColor: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'transform 0.3s ease',
                                    cursor: 'pointer',
                                    overflow: 'hidden',
                                    border: '2px solid var(--color-border)',
                                    padding: '10px'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <img
                                    src="https://tse4.mm.bing.net/th/id/OIP.svgoUT8hREgpphnOVj1NTgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
                                    alt="LinkedIn"
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                />
                            </a>
                            <a
                                href="https://github.com/fakhar-iqbal"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    backgroundColor: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'transform 0.3s ease',
                                    cursor: 'pointer',
                                    overflow: 'hidden',
                                    border: '2px solid var(--color-border)',
                                    padding: '5px'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <img
                                    src="https://tse4.mm.bing.net/th/id/OIP.NGIDdVP6vw9ue_D-mrEVFQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
                                    alt="GitHub"
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          #contact .container > div > div:nth-child(3) {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }

          #contact .card {
            padding: 1.5rem !important;
          }

          #contact h3 {
            font-size: 1.25rem !important;
          }

          #contact p {
            font-size: 0.875rem !important;
            margin-bottom: 2rem !important;
          }

          #contact a {
            font-size: 0.875rem !important;
            word-break: break-all;
          }
        }
      `}</style>
        </section>
    );
};
