const STAR = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";

/** Five CSS stars. Decorative; always pair with a text rating. */
export function Stars({ className = "", size = "1em" }: { className?: string; size?: string }) {
  return (
    <span aria-hidden="true" className={`inline-flex gap-[0.12em] ${className}`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className="block bg-current" style={{ width: size, height: size, clipPath: STAR }} />
      ))}
    </span>
  );
}
