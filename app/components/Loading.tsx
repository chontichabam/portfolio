// "use client";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// export default function Loading() {
//   const [isReady, setIsReady] = useState(false);
//   const [minTimePassed, setMinTimePassed] = useState(false);

//   useEffect(() => {
//     // ✅ 1. รอโหลดจริง (images / assets)
//     const handleLoad = () => setIsReady(true);

//     if (document.readyState === "complete") {
//       setIsReady(true);
//     } else {
//       window.addEventListener("load", handleLoad);
//     }

//     // ✅ 2. minimum time (กันกระพริบ)
//     const minTimer = setTimeout(() => {
//       setMinTimePassed(true);
//     }, 1200);

//     // ✅ 3. maximum fallback (กันค้าง)
//     const maxTimer = setTimeout(() => {
//       setIsReady(true);
//       setMinTimePassed(true);
//     }, 4000);

//     return () => {
//       window.removeEventListener("load", handleLoad);
//       clearTimeout(minTimer);
//       clearTimeout(maxTimer);
//     };
//   }, []);

//   const show = !(isReady && minTimePassed);

//   if (!show) return null;

//   return (
//     <motion.div
//       className="fixed inset-0 bg-black flex items-center justify-center z-[9999]"
//       initial={{ opacity: 1 }}
//       animate={{ opacity: 0 }}
//       transition={{
//         duration: 0.7,
//         ease: [0.4, 0, 0.2, 1],
//       }}
//     >
//       <motion.h1
//         className="text-white text-3xl md:text-4xl font-semibold tracking-wide"
//         initial={{ opacity: 0, scale: 0.95, filter: "blur(6px)" }}
//         animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
//         transition={{ duration: 0.8 }}
//       >
//         Chonthicha
//         <span className="text-[#96e8ff] drop-shadow-[0_0_10px_#96e8ff]">
//           .dev
//         </span>
//       </motion.h1>
//     </motion.div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let minDone = false;
    let pageLoaded = false;

    const check = () => {
      if (minDone && pageLoaded) {
        setTimeout(() => setLoading(false), 300);
      }
    };

    // page loaded
    if (document.readyState === "complete") {
      pageLoaded = true;
      check();
    } else {
      window.addEventListener("load", () => {
        pageLoaded = true;
        check();
      });
    }

    // minimum time (smooth UX)
    const minTimer = setTimeout(() => {
      minDone = true;
      check();
    }, 1200);

    // fallback safety
    const maxTimer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => {
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 bg-black flex items-center justify-center z-[9999]"
          
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(12px)",
          }}
          transition={{
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <motion.h1
            className="text-white text-3xl md:text-4xl font-semibold tracking-wide"
            
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.9,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            Chonthicha
            <span className="text-[#96e8ff] drop-shadow-[0_0_12px_#96e8ff]">
              .dev
            </span>
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}