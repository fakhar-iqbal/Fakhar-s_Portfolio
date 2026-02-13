import React, { useEffect, useRef, useState } from 'react';

export const MagneticCursor: React.FC = () => {
    const cursorOutlineRef = useRef<HTMLDivElement>(null);
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const cursorOutline = cursorOutlineRef.current;
        const cursorDot = cursorDotRef.current;

        if (!cursorOutline || !cursorDot) return;

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let outlineX = window.innerWidth / 2;
        let outlineY = window.innerHeight / 2;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Instant movement for the inner dot
            cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        };

        const animate = () => {
            // Smooth interpolation for the outline (chasing effect)
            outlineX += (mouseX - outlineX) * 0.15;
            outlineY += (mouseY - outlineY) * 0.15;

            cursorOutline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0)`;

            requestAnimationFrame(animate);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('clickable') ||
                window.getComputedStyle(target).cursor === 'pointer'
            ) {
                setIsHovering(true);
            }
        };

        const handleMouseOut = () => {
            setIsHovering(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mouseout', handleMouseOut);
        const animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mouseout', handleMouseOut);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <>
            <style>{`
        body {
          cursor: none;
        }
        
        a, button, [role="button"] {
          cursor: none;
        }

        .cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 8px;
          height: 8px;
          background-color: var(--cursor-color);
          border-radius: 50%;
          pointer-events: none;
          z-index: 10000;
          margin-left: -4px;
          margin-top: -4px;
          transition: transform 0.1s ease-out;
        }

        .cursor-outline {
          position: fixed;
          top: 0;
          left: 0;
          width: 40px;
          height: 40px;
          border: 3px solid var(--cursor-color);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          margin-left: -20px;
          margin-top: -20px;
          transition: width 0.3s ease-out, height 0.3s ease-out, margin 0.3s ease-out, opacity 0.3s ease-out;
          opacity: 0.7;
        }

        .cursor-outline.hovering {
          width: 60px;
          height: 60px;
          margin-left: -30px;
          margin-top: -30px;
          opacity: 0.9;
          background-color: rgba(0, 0, 128, 0.05);
        }

        @media (max-width: 768px) {
          .cursor-dot, .cursor-outline {
            display: none;
          }
          body, a, button {
            cursor: auto;
          }
        }
      `}</style>

            <div ref={cursorDotRef} className="cursor-dot" />
            <div
                ref={cursorOutlineRef}
                className={`cursor-outline ${isHovering ? 'hovering' : ''}`}
            />
        </>
    );
};
