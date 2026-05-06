"use client";

import { useEffect, useState } from "react";

export default function TypingText({
  text,
  speed = 130,
}: {
  text: string;
  speed?: number;
}) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i++;

      if (i > text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <p className="text-cyan-300 mt-2">
      {displayed}
      <span className="animate-pulse">|</span>
    </p>
  );
}