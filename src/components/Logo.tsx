import React from 'react';

export function Logo({ className = "w-48" }: { className?: string }) {
  return (
    <img 
      src="/logo.png" 
      alt="SOLO Plumbing & Heating" 
      className={`object-contain ${className}`}
    />
  );
}
