// "use client";

// import { useEffect, useState } from "react";

// export default function CursorGlow() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const move = (e: MouseEvent) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//       setVisible(true);
//     };

//     const leave = () => setVisible(false);

//     window.addEventListener("mousemove", move);
//     window.addEventListener("mouseleave", leave);

//     return () => {
//       window.removeEventListener("mousemove", move);
//       window.removeEventListener("mouseleave", leave);
//     };
//   }, []);

//   return (
//     <div
//       className="pointer-events-none fixed inset-0 z-[9999]"
//       style={{ mixBlendMode: "screen" }}
//     >
//       <div
//         className="absolute w-[400px] h-[400px] rounded-full blur-3xl transition-opacity duration-300"
//         style={{
//           left: position.x - 200,
//           top: position.y - 200,
//           opacity: visible ? 0.25 : 0,
//           background:
//             "radial-gradient(circle, #96e8ff 0%, rgba(150,232,255,0.1) 40%, transparent 70%)",
//         }}
//       />
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="cursor-glow"
      style={{ left: pos.x, top: pos.y }}
    />
  );
}