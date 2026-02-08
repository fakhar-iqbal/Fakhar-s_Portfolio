import React, { useEffect, useRef } from 'react';

interface Point {
    x: number;
    y: number;
    age: number;
}

export const CursorTrail: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pointsRef = useRef<Point[]>([]);
    const requestRef = useRef<number>();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size to full window
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        // Track mouse movement
        const handleMouseMove = (e: MouseEvent) => {
            pointsRef.current.push({
                x: e.clientX,
                y: e.clientY,
                age: 0
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Animation loop
        const animate = () => {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw points
            // Filter out points that are too old (faded out)
            pointsRef.current = pointsRef.current.filter(p => p.age < 25);

            if (pointsRef.current.length > 1) {
                ctx.beginPath();
                ctx.moveTo(pointsRef.current[0].x, pointsRef.current[0].y);

                for (let i = 1; i < pointsRef.current.length; i++) {
                    const point = pointsRef.current[i];
                    const prevPoint = pointsRef.current[i - 1];

                    // Quadratic bezier curve for smoother lines
                    const cx = (point.x + prevPoint.x) / 2;
                    const cy = (point.y + prevPoint.y) / 2;

                    ctx.quadraticCurveTo(prevPoint.x, prevPoint.y, cx, cy);

                    point.age += 1;
                }

                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
                // Yellow color matching the theme (#FDB913) with fade effect
                // We'll use a gradient or just change opacity based on age, but simple stroke for now
                // To make it fade "at one inch" (which translates to time/distance), we use opacity

                // Actually to make it look like a fading tail, we need to draw segments with different opacities
                // Rerendering the path for each segment is expensive, so let's try a different approach
                // Draw the whole path with a gradient or shadow?
                // Let's draw segments
            }

            // Drawing segments approach for fading tail
            for (let i = 1; i < pointsRef.current.length; i++) {
                const point = pointsRef.current[i];
                const prevPoint = pointsRef.current[i - 1];

                ctx.beginPath();
                ctx.moveTo(prevPoint.x, prevPoint.y);
                ctx.lineTo(point.x, point.y);

                // Calculate opacity based on age (0 to 25)
                // Newer points (age 0) are opaque, older points are transparent
                const opacity = 1 - (point.age / 25);

                ctx.strokeStyle = `rgba(253, 185, 19, ${opacity})`;
                ctx.lineWidth = 3 * opacity; // Line also gets thinner
                ctx.lineCap = 'round';
                ctx.stroke();

                point.age += 1;
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                zIndex: 9999,
                width: '100%',
                height: '100%'
            }}
        />
    );
};
