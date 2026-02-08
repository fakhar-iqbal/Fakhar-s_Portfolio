import React from 'react';

interface Testimonial {
    name: string;
    role: string;
    company: string;
    text: string;
    avatar: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        name: 'Sarah Johnson',
        role: 'CTO',
        company: 'TechStart Inc',
        text: 'Muhammad provided outstanding AI solutions for our platform. His attention to detail and creative problem-solving brought our vision to life perfectly.',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        rating: 5
    },
    {
        name: 'Ahmed Khan',
        role: 'Product Manager',
        company: 'DataFlow Systems',
        text: 'Working with Muhammad was a great experience. The ML models he developed significantly improved our prediction accuracy and system performance.',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        rating: 5
    },
    {
        name: 'Lisa Chen',
        role: 'Engineering Lead',
        company: 'Cloudinnovate',
        text: 'Incredible work ethic and fantastic results. The MLOps infrastructure Muhammad built has been running flawlessly in production for months.',
        avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
        rating: 5
    },
    {
        name: 'David Martinez',
        role: 'Founder',
        company: 'AI Solutions Co',
        text: 'Muhammad is a true professional. He understood our requirements immediately and delivered high-quality solutions that exceeded expectations.',
        avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
        rating: 5
    }
];

export const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="bg-light">
            <div className="container">
                <h2 className="section-title">TESTIMONIALS</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '2rem',
                    marginTop: '3rem'
                }}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="testimonial-rating">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <span key={i}>⭐</span>
                                ))}
                            </div>
                            <p className="testimonial-text">
                                "{testimonial.text}"
                            </p>
                            <div className="testimonial-author">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="testimonial-avatar"
                                />
                                <div className="testimonial-info">
                                    <h4>{testimonial.name}</h4>
                                    <p>{testimonial.role}, {testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Dots */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    marginTop: '3rem'
                }}>
                    <span style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-primary)',
                        display: 'inline-block'
                    }}></span>
                    <span style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-border)',
                        display: 'inline-block'
                    }}></span>
                    <span style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-border)',
                        display: 'inline-block'
                    }}></span>
                </div>
            </div>

            <style>{`
        @media (max-width: 968px) {
          #testimonials .container > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
};
