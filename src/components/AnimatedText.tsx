
import React, { useState, useEffect } from 'react';

interface AnimatedTextProps {
  phrases: string[];
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ phrases, className = '' }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Adding characters
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.substring(0, currentText.length + 1));
        } else {
          // Start deleting after pause
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Removing characters
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          // Move to next phrase
          setIsDeleting(false);
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentPhraseIndex, isDeleting, phrases]);

  return (
    <span className={`inline-block ${className}`}>
      {currentText}
      <span className="animate-pulse-slow">|</span>
    </span>
  );
};

export default AnimatedText;
