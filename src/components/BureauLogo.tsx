const BureauLogo = () => {
  return (
    <div className="flex items-center gap-3">
      {/* Geometric logo: sharp triangle inside a circle */}
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-foreground"
      >
        {/* Outer circle */}
        <circle
          cx="24"
          cy="24"
          r="22"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        {/* Inner sharp triangle pointing up */}
        <polygon
          points="24,10 38,36 10,36"
          fill="currentColor"
        />
        {/* Inner inverted triangle for the eye effect */}
        <polygon
          points="24,18 32,32 16,32"
          fill="hsl(var(--background))"
        />
        {/* Central dot */}
        <circle cx="24" cy="27" r="3" fill="currentColor" />
      </svg>
      
      <div className="flex flex-col">
        <span className="font-display text-lg tracking-[0.2em] leading-tight">
          THE CENTRAL DIRECTORATE
        </span>
        <span className="font-display text-sm tracking-[0.15em] text-muted-foreground leading-tight" dir="rtl">
          المديرية المركزية
        </span>
      </div>
    </div>
  );
};

export default BureauLogo;
