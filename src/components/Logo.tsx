import React from 'react';

export function Logo({ className = "w-48" }: { className?: string }) {
  return (
    <img 
      src="/logo.png" 
      alt="George Handyman Services — Paphos" 
      className={`object-contain ${className}`}
    />
  );
}
