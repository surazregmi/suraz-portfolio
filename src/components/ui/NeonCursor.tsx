import { useEffect, useRef, useState } from "react";

const NeonCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const burstRef = useRef<HTMLDivElement>(null);

  // Cursor Position Tracker
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Hover Detection on Interactive Elements
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (["A", "BUTTON"].includes(target.tagName)) {
        setIsHoveringInteractive(true);
      } else {
        setIsHoveringInteractive(false);
      }
    };
    window.addEventListener("mouseover", handleMouseOver);
    return () => window.removeEventListener("mouseover", handleMouseOver);
  }, []);

  // Click Pulse Burst Animation
  useEffect(() => {
    const handleClick = () => {
      if (burstRef.current) {
        burstRef.current.classList.remove("animate-burst");
        void burstRef.current.offsetWidth; // Trigger reflow
        burstRef.current.classList.add("animate-burst");
      }
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        {/* Inner Neon Dot */}
        <div
          className={`w-4 h-4 rounded-full ${
            isHoveringInteractive ? "bg-pink-400" : "bg-cyan-400"
          }`}
        />
        {/* Outer Glow Layer */}
        <div
          className={`absolute inset-0 rounded-full blur-2xl opacity-80 ${
            isHoveringInteractive ? "bg-pink-400/60" : "bg-cyan-400/60"
          }`}
        />
        {/* Outer Ring Pulse */}
        <div
          className={`absolute inset-0 rounded-full blur-3xl opacity-50 ${
            isHoveringInteractive ? "bg-pink-400/40" : "bg-cyan-400/40"
          } animate-pulse`}
        />
        {/* Click Burst Effect */}
        <div
          ref={burstRef}
          className="absolute inset-0 rounded-full border-2 border-cyan-400 opacity-0 pointer-events-none"
        />
      </div>

      {/* Particle Sparks (Optional Tiny dots emitting) */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-40"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        <div className="w-24 h-24 rounded-full opacity-10 blur-3xl bg-gradient-to-br from-cyan-400 via-cyan-300 to-transparent animate-spin-slow" />
      </div>
    </>
  );
};

export default NeonCursor;
