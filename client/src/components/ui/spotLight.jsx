import React from "react";

export function Spotlight({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 opacity-30 ${className}`}
      aria-hidden="true"
    >
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-purple-500 blur-[120px] rounded-full mix-blend-lighten animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-pink-500 blur-[100px] rounded-full mix-blend-lighten animate-pulse" />
    </div>
  );
}
