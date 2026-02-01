'use client';

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Segment = {
  text: string;
  className?: string;
};

type Line = {
  segments: Segment[];
};

interface TypingAnimationProps {
  lines: Line[];
  typingSpeed?: number;   // ms per char
  startDelay?: number;    // ms before start
  cursorBlinkAfter?: number; // ms to keep cursor after finish
  className?: string;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  lines,
  typingSpeed = 50,
  startDelay = 500,
  cursorBlinkAfter = 2000,
  className,
}) => {
  const [typed, setTyped] = useState<string[][]>(
    lines.map(line => line.segments.map(() => ""))
  );
  const [showCursor, setShowCursor] = useState(true);
  const [active, setActive] = useState({ line: 0, segment: 0, char: 0 });

  useEffect(() => {
    const startTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setActive(prev => {
          const { line, segment, char } = prev;
          const currentSegment = lines[line]?.segments[segment];
          if (!currentSegment) return prev;

          const nextCharIndex = char + 1;
          const doneWithSegment = nextCharIndex > currentSegment.text.length;

          setTyped(prevTyped => {
            const copy = prevTyped.map(arr => [...arr]);
            copy[line][segment] = currentSegment.text.slice(0, Math.min(nextCharIndex, currentSegment.text.length));
            return copy;
          });

          if (!doneWithSegment) {
            return { line, segment, char: nextCharIndex };
          }

          // Move to next segment
          const hasNextSegment = segment + 1 < lines[line].segments.length;
          if (hasNextSegment) {
            return { line, segment: segment + 1, char: 0 };
          }

          // Move to next line
          const hasNextLine = line + 1 < lines.length;
          if (hasNextLine) {
            return { line: line + 1, segment: 0, char: 0 };
          }

          // Finished all typing
          clearInterval(interval);
          setTimeout(() => setShowCursor(false), cursorBlinkAfter);
          return prev;
        });
      }, typingSpeed);

      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [lines, typingSpeed, startDelay, cursorBlinkAfter]);

  return (
    <div className={cn("space-y-1", className)}>
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="block">
          {line.segments.map((seg, segIndex) => (
            <span key={segIndex} className={seg.className}>
              {typed[lineIndex][segIndex]}
            </span>
          ))}
          {showCursor &&
            active.line === lineIndex &&
            active.segment === line.segments.length - 1 && (
              <span className="inline-block w-[3px] h-[0.9em] bg-brand-600 align-baseline ml-1 animate-cursor-blink relative top-1" />
            )}
        </div>
      ))}
    </div>
  );
};
export default TypingAnimation;