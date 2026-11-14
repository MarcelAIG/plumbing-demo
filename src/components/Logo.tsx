export function Logo({ className = "w-48" }: { className?: string }) {
  return (
    <img
      src="/client-assets/references/handyman-logo-reference.png"
      alt="Handyman Larnaca and Limassol District — Κουτσοδούλια περιοχή Λάρνακας και Λεμεσού"
      className={`object-contain ${className}`}
    />
  );
}
