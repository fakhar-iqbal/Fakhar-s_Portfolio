import React, { useState, useEffect } from 'react';

interface SidebarProps {
  activeSection?: string;
}

export const Sidebar: React.FC<SidebarProps> = () => {
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { id: 'home', label: 'HOME', icon: '🏠' },
    { id: 'about', label: 'ABOUT ME', icon: '👤' },
    { id: 'resume', label: 'RESUME', icon: '📄' },
    { id: 'portfolio', label: 'PORTFOLIO', icon: '💼' },
    { id: 'contact', label: 'CONTACT', icon: '✉️' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.id);
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
    handleScroll(); // Call once on mount

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
      {/* Desktop Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-content">
          {/* Profile Section */}
          <div className="sidebar-profile">
            <div className="profile-image-wrapper">
              <img
                src="/resume/pic.png"
                alt="Muhammad Fakhar"
                className="profile-image"
              />
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="sidebar-nav">
            <ul>
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className={activeSection === item.id ? 'active' : ''}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>


        </div>
      </aside>

      {/* Mobile Menu Toggle */}
      <button className="mobile-menu-toggle">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <style>{`
        .sidebar {
          position: fixed;
          left: 0;
          top: 0;
          width: var(--sidebar-width);
          height: 100vh;
          background-color: var(--color-primary);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease;
        }

        .sidebar-content {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 2rem 0;
        }

        .sidebar-profile {
          padding: 1rem 1.5rem 2rem;
          text-align: center;
        }

        .profile-image-wrapper {
          width: 120px;
          height: 120px;
          margin: 0 auto;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .sidebar-nav {
          flex: 1;
          padding: 1rem 0;
        }

        .sidebar-nav ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .sidebar-nav li {
          margin: 0;
        }

        .sidebar-nav a {
          display: block;
          padding: 1rem 2rem;
          color: #2D2D2D;
          font-weight: 600;
          font-size: 0.875rem;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          position: relative;
          transition: all 0.3s ease;
        }

        .sidebar-nav a::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 2px;
          background-color: #2D2D2D;
          transition: width 0.3s ease;
        }

        .sidebar-nav a:hover,
        .sidebar-nav a.active {
          background-color: rgba(0, 0, 0, 0.1);
          padding-left: 2.5rem;
        }

        .sidebar-nav a.active::before {
          width: 4px;
          height: 100%;
          top: 0;
          transform: none;
        }



        .mobile-menu-toggle {
          display: none;
          position: fixed;
          top: 1.5rem;
          left: 1.5rem;
          z-index: 1001;
          background-color: var(--color-primary);
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 8px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .mobile-menu-toggle span {
          width: 24px;
          height: 2px;
          background-color: #2D2D2D;
          transition: all 0.3s ease;
        }

        @media (max-width: 768px) {
          .sidebar {
            transform: translateX(-100%);
          }

          .sidebar.open {
            transform: translateX(0);
          }

          .mobile-menu-toggle {
            display: flex;
          }
        }
      `}</style>
    </>
  );
};
