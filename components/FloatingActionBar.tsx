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
      <div className="floating-action-bar-container">
        <div className="floating-action-bar">
          {actions.map((action, index) => (
            <button
              key={action.id}
              onClick={() => scrollToSection(action.id)}
              className={`action-btn ${activeSection === action.id ? 'active' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="action-icon">{action.icon}</span>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .floating-action-bar-container {
          position: fixed;
          right: 2rem;
          top: 50%;
          transform: translateY(-50%);
          z-index: 999;
          background-color: var(--color-primary);
          padding: 0.75rem;
          border-radius: 40px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
          animation: slideInRight 0.6s ease-out;
        }

        .floating-action-bar {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
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
          width: 44px;
          height: 44px;
          border-radius: 22px;
          background-color: transparent;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          padding: 0;
        }

        .action-btn:hover {
          background-color: rgba(0, 0, 0, 0.1);
          transform: scale(1.1);
        }

        .action-btn.active {
          background-color: rgba(0, 0, 0, 0.2);
          transform: scale(1.1);
        }

        .action-icon {
          width: 44px;
          height: 44px;
          flex-shrink: 0;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
          color: #000000;
        }

        @media (max-width: 768px) {
          .floating-action-bar-container {
            right: 1.5rem;
            padding: 0.5rem;
          }

          .action-btn {
            width: 40px;
            height: 40px;
          }

          .action-icon {
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }
        }
        @media (max-width: 480px) {
          .floating-action-bar-container {
            display: none;
          }
        }
      `}</style>
    </>
  );
};
