import React, { useEffect, useRef, useState } from 'react';

export const MagneticCursor: React.FC = () => {
    const kiteRef = useRef<HTMLDivElement>(null);
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<SVGPathElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const kite = kiteRef.current;
        const cursorDot = cursorDotRef.current;
        const line = lineRef.current;

        if (!kite || !cursorDot || !line) return;

        // Movement variables
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let kiteX = window.innerWidth / 2;
        let kiteY = window.innerHeight / 2;
        let dotX = window.innerWidth / 2;
        let dotY = window.innerHeight / 2;

        // Smooth factor (lower = more drag/lag)
        const speed = 0.05;
        const offsetDist = 106; // Standard diagonal distance (approx 3cm-4cm)

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Instant movement for the inner dot
            dotX = e.clientX;
            dotY = e.clientY;
            cursorDot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
        };

        const animate = () => {
            // Dynamic Offsets based on window position
            // Flip horizontal offset if near the right edge
            const horizontalThreshold = window.innerWidth * 0.7;
            const currentRestingOffsetX = dotX > horizontalThreshold ? -offsetDist : offsetDist;

            // Flip vertical offset if near the top edge
            const verticalThreshold = window.innerHeight * 0.3;
            // The request says "top most ... get to left side" but usually we want it below if at top
            // "when cursor is on top most... kite should get to left side" 
            // Ok, let's follow the user's specific logic:
            // "far right or top most ... kite should get to left side"
            // "far left side ... kite should be on right side"

            let targetRestingOffsetX = offsetDist;
            if (dotX > window.innerWidth * 0.6 || dotY < window.innerHeight * 0.4) {
                targetRestingOffsetX = -offsetDist;
            } else if (dotX < window.innerWidth * 0.4) {
                targetRestingOffsetX = offsetDist;
            }

            const targetX = dotX + targetRestingOffsetX;
            const targetY = dotY - offsetDist;

            // Linear interpolation for kite movement towards target
            const prevKiteX = kiteX;
            kiteX += (targetX - kiteX) * speed;
            kiteY += (targetY - kiteY) * speed;

            // Calculate dx/dy relative to the ACTUAL dot for tilt and string
            const dx = dotX - kiteX;
            const dy = dotY - kiteY;

            // Calculate Tilt based on horizontal distance from cursor (tension simulation)
            // Using distance instead of velocity makes the tilt much more visible and stable
            const tiltSensitivity = 0.5;
            let targetTilt = dx * tiltSensitivity;

            // Limit tilt to 45 degrees
            const maxTilt = 30;
            targetTilt = Math.max(-maxTilt, Math.min(maxTilt, targetTilt));

            // Apply transform - Translation + Rotation (Tilt)
            kite.style.transform = `translate3d(${kiteX}px, ${kiteY}px, 0) rotate(${targetTilt}deg)`;

            // Update String (Curved Path)
            if (lineRef.current) {
                const kiteCenterX = kiteX;
                const kiteCenterY = kiteY;

                // Calculate midpoint with a more pronounced "sag" (simulating gravity and air resistance)
                // The sag should be proportional to distance to look natural
                const sagFactor = 0.15;
                const midX = (dotX + kiteCenterX) / 2;
                const midY = (dotY + kiteCenterY) / 2 + Math.abs(dx) * sagFactor + 20;

                lineRef.current.setAttribute('d', `M ${dotX},${dotY} Q ${midX},${midY} ${kiteCenterX},${kiteCenterY}`);
            }

            requestAnimationFrame(animate);
        };

        // Add event listeners for hover effect
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

        .kite-cursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 50px;
          height: 70px;
          pointer-events: none;
          z-index: 9999;
          margin-left: -25px;
          margin-top: -35px;
          filter: drop-shadow(0 8px 16px rgba(0,0,0,0.15));
          will-change: transform;
        }

        /* Hover State: Kite gets bigger */
        .kite-cursor.hovering {
          filter: drop-shadow(0 0 15px rgba(253, 185, 19, 0.6));
          transform: scale(1.1);
        }

        .cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 8px;
          height: 8px;
          background-color: var(--color-primary);
          border-radius: 50%;
          pointer-events: none;
          z-index: 10000;
          margin-left: -4px;
          margin-top: -4px;
          box-shadow: 0 0 4px rgba(0,0,0,0.3);
        }
        
        .cursor-string-svg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 9998;
        }

        @media (match-pointer: coarse) {
          .kite-cursor, .cursor-dot, .cursor-string-svg {
            display: none;
          }
          body, a, button {
            cursor: auto;
          }
        }
      `}</style>

            {/* String is now part of the main loop logic via ref */}
            <svg className="cursor-string-svg">
                <path
                    ref={lineRef}
                    id="cursor-string"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                    opacity="0.5"
                    strokeDasharray="3 3"
                />
            </svg>

            <div
                ref={kiteRef}
                className={`kite-cursor ${isHovering ? 'hovering' : ''}`}
            >
                <svg viewBox="0 0 50 70" width="100%" height="100%" style={{ overflow: 'visible' }}>
                    <defs>
                        <linearGradient id="kiteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#FDB913" />
                            <stop offset="100%" stopColor="#FF8C00" />
                        </linearGradient>
                        <linearGradient id="kiteSheen" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                        </linearGradient>
                    </defs>

                    {/* 3 Colorful Tails */}
                    <path d="M25,65 C25,75 35,80 25,95 C15,110 25,115 25,125" fill="none" stroke="#FF4D4D" strokeWidth="2" strokeLinecap="round" />
                    <path d="M25,65 C15,75 5,80 15,95 C25,110 15,115 15,125" fill="none" stroke="#4DFF4D" strokeWidth="2" strokeLinecap="round" />
                    <path d="M25,65 C35,75 45,80 35,95 C25,110 35,115 35,125" fill="none" stroke="#4D4DFF" strokeWidth="2" strokeLinecap="round" />

                    {/* Kite Body */}
                    <path d="M25,0 L50,25 L25,65 L0,25 Z" fill="url(#kiteGradient)" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />

                    {/* Skeleton */}
                    <path d="M25,0 L25,65" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
                    <path d="M0,25 L50,25" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />

                    <path d="M25,0 L25,25 L0,25 Z" fill="url(#kiteSheen)" />
                </svg>
            </div>
            <div ref={cursorDotRef} className="cursor-dot" />
        </>
    );
};
