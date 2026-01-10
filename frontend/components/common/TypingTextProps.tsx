"use client";
import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function TypingText({ text, speed = 100, className }: TypingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(i => i >= text.length ? i : i + 1);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span className={className}>{text.substring(0, index)}</span>;
}