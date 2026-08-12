import React from "react";

interface HeadingPillProps {
  text: string;
  className?: string;
}

export function HeadingPill({ text, className = "" }: HeadingPillProps) {
  return (
    <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-label uppercase tracking-wider text-brand-default border border-brand-default/30 bg-[#f4f8ff] mb-6 ${className}`}>
      {text}
    </span>
  );
}
