import React, { useState, useEffect } from 'react';

export const DarkModeToggle: React.FC = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check local storage for theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDark(true);
            document.body.classList.add('dark-mode');
        }
    }, []);

    const toggleDarkMode = () => {
        setIsDark(!isDark);
        if (!isDark) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <>
            <button
                className="dark-mode-toggle"
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
                title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
                <span className="toggle-icon">
                    {isDark ? '☀️' : '🌙'}
                </span>
            </button>

            <style>{`
        .dark-mode-toggle {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 999;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: var(--color-bg-black);
          border: 3px solid var(--color-primary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .dark-mode-toggle:hover {
          transform: scale(1.1) rotate(15deg);
          box-shadow: 0 6px 20px rgba(253, 185, 19, 0.4);
        }

        .dark-mode-toggle:active {
          transform: scale(0.95) rotate(15deg);
        }

        .toggle-icon {
          font-size: 1.5rem;
          transition: transform 0.3s ease;
        }

        .dark-mode-toggle:hover .toggle-icon {
          transform: rotate(-15deg);
        }

        body.dark-mode .dark-mode-toggle {
          background-color: var(--color-primary);
          border-color: var(--color-bg-black);
        }

        @media (max-width: 768px) {
          .dark-mode-toggle {
            width: 50px;
            height: 50px;
            bottom: 1.5rem;
            right: 1.5rem;
          }

          .toggle-icon {
            font-size: 1.25rem;
          }
        }
      `}</style>
        </>
    );
};
