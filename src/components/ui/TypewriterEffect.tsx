"use client";

import { useEffect, useState } from "react";

export default function TypewriterEffect({
  words,
  typingSpeed = 0.08,
  pauseMs = 2000,
}: {
  words: string[];
  typingSpeed?: number;
  pauseMs?: number;
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting && displayed === currentWord) {
      const pause = setTimeout(() => setIsDeleting(true), pauseMs);
      return () => clearTimeout(pause);
    }

    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setDisplayed(
          isDeleting
            ? currentWord.substring(0, displayed.length - 1)
            : currentWord.substring(0, displayed.length + 1)
        );
      },
      isDeleting ? typingSpeed * 500 : typingSpeed * 1000
    );

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words, typingSpeed, pauseMs]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
      {displayed}
      <span className="animate-pulse text-indigo-400">|</span>
    </span>
  );
}
