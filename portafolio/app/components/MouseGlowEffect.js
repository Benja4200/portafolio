"use client";

import { useEffect, useState } from "react";

export default function MouseGlowEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isOverElement, setIsOverElement] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Verificar si el mouse está sobre un elemento con glow-hover
      const element = document.elementFromPoint(e.clientX, e.clientY);
      const isOver = element?.closest(".glow-hover") !== null;
      setIsOverElement(isOver);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={`glow-effect ${isOverElement ? "glow-active" : "glow-hidden"}`}
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
      }}
    />
  );
}
