import React, { useState, useEffect } from 'react';

export const FloatingActionBar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const actions = [
    { id: 'home', icon: '🏠', label: 'Home' },
    { id: 'about', icon: '👤', label: 'About' },
    { id: 'resume', icon: '📄', label: 'Resume' },
    { id: 'portfolio', icon: '💼', label: 'Portfolio' },
    { id: 'contact', icon: '✉️', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = actions.map(action => action.id);
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="floating-action-bar">
        {actions.map((action, index) => (
          <button
            key={action.id}
            onClick={() => scrollToSection(action.id)}
            className={`action-btn ${activeSection === action.id ? 'active' : ''}`}
            data-label={action.label}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span className="action-icon">{action.icon}</span>
            <span className="action-label">{action.label}</span>
          </button>
        ))}
      </div>

      <style>{`
        .floating-action-bar {
          position: fixed;
          right: 2rem;
          top: 50%;
          transform: translateY(-50%);
          z-index: 999;
          display: flex;
          flex-direction: column;
          align-items: flex-end; /* Align to the right */
          gap: 1rem;
          animation: slideInRight 0.6s ease-out;
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateY(-50%) translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateY(-50%) translateX(0);
          }
        }

        .action-btn {
          width: 50px;
          height: 50px;
          border-radius: 25px; /* Circle */
          background-color: var(--color-primary);
          border: none;
          cursor: pointer;
          display: flex;
          flex-direction: row-reverse; /* Icon on right, text expands to left */
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 4px 12px rgba(253, 185, 19, 0.3);
          position: relative;
          padding: 0;
          overflow: hidden;
        }

        .action-label {
          max-width: 0;
          opacity: 0;
          white-space: nowrap;
          font-weight: 600;
          font-size: 0.875rem;
          color: var(--color-text-dark);
          transition: all 0.4s ease;
          pointer-events: none;
          padding: 0;
        }

        .action-btn:hover {
          width: 140px; /* Expand horizontally */
          padding: 0 1.25rem;
          justify-content: space-between;
          box-shadow: 0 6px 20px rgba(253, 185, 19, 0.4);
        }

        .action-btn:hover .action-label {
          max-width: 100px;
          opacity: 1;
          padding-left: 0.5rem;
        }

        .action-btn.active {
          background-color: var(--color-secondary);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }

        .action-btn.active .action-label {
          color: white;
        }

        .action-btn.active .action-icon {
          transform: scale(1.1);
        }

        .action-btn:active {
          transform: scale(0.95);
        }

        .action-icon {
          width: 50px; /* Keep icon area consistent */
          height: 50px;
          flex-shrink: 0;
          font-size: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
          transition: transform 0.3s ease;
        }

        @media (max-width: 768px) {
          .floating-action-bar {
            right: 1rem;
            gap: 0.75rem;
          }

          .action-btn {
            width: 45px;
            height: 45px;
          }

          .action-icon {
            width: 45px;
            height: 45px;
            font-size: 1.1rem;
          }

          .action-btn:hover {
            width: 45px; /* Disable expansion on mobile for simplicity, or adjust */
          }
        }

        @media (max-width: 480px) {
          .floating-action-bar {
            display: none;
          }
        }
      `}</style>
    </>
  );
};
