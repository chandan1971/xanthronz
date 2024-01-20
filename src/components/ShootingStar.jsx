// ShootingStarsBackground.jsx

import React, { useEffect } from 'react';
import './ShootingStarsBackground.css';

const ShootingStarsBackground = () => {
  useEffect(() => {
    const createShootingStar = () => {
      const star = document.createElement('div');
      star.className = 'star';
      document.querySelector('.shooting-stars-container').appendChild(star);

      const duration = Math.random() * 2 + 1; // Random duration between 1 to 3 seconds
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;

      star.style.left = `${startX}px`;
      star.style.top = `${startY}px`;
      star.style.animation = `shootingStar ${duration}s linear infinite`;

      // Remove the shooting star after the animation ends
      star.addEventListener('animationend', () => {
        star.remove();
      });
    };

    // Create shooting stars continuously
    const createShootingStarInterval = setInterval(() => {
      createShootingStar();
    }, 200); // Interval between creating shooting stars (adjust as needed)

    // Clean up the interval when the component unmounts
    return () => clearInterval(createShootingStarInterval);
  }, []); // Run this effect only once when the component mounts

  return <div className="shooting-stars-container"></div>;
};

export default ShootingStarsBackground;
