"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ParticleSystem = ({ mousePosition }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const colors = [
      "#FF6B6B",
      "#4ECDC4",
      "#45B7D1",
      "#FFA07A",
      "#98D8C8",
      "#FFD700",
      "#FF69B4",
    ];
    const newParticles = [];

    for (let i = 0; i < 100; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 8 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        velocity: {
          x: (Math.random() - 0.5) * 2,
          y: (Math.random() - 0.5) * 2,
        },
      });
    }

    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const animateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          let newX = particle.x + particle.velocity.x;
          let newY = particle.y + particle.velocity.y;

          // Bounce off the edges
          if (newX < 0 || newX > window.innerWidth) {
            particle.velocity.x *= -1;
          }
          if (newY < 0 || newY > window.innerHeight) {
            particle.velocity.y *= -1;
          }

          // Attract to mouse
          const dx = mousePosition.x - particle.x;
          const dy = mousePosition.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            const angle = Math.atan2(dy, dx);
            const force = (200 - distance) / 200;
            particle.velocity.x += Math.cos(angle) * force * 0.2;
            particle.velocity.y += Math.sin(angle) * force * 0.2;
          }

          // Apply some friction
          particle.velocity.x *= 0.99;
          particle.velocity.y *= 0.99;

          return {
            ...particle,
            x: newX,
            y: newY,
          };
        })
      );
    };

    const animationFrame = requestAnimationFrame(animateParticles);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [mousePosition]);

  return (
    <div className="absolute inset-0 z-10">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
          }}
          animate={{
            x: particle.x,
            y: particle.y,
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default ParticleSystem;
