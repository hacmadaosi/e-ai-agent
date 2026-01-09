"use client";
import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
}

export default function TypingText({ text, speed = 100 }: TypingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(i => i >= text.length ? i : i + 1);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{text.substring(0, index)}</span>;
}