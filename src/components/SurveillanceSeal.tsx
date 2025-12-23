interface SurveillanceSealProps {
  imageUrl?: string;
}

const SurveillanceSeal = ({ imageUrl }: SurveillanceSealProps) => {
  return (
    <section className="relative py-16 flex flex-col items-center justify-center">
      {/* Decorative lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Main seal container */}
      <div className="relative">
        {/* Outer glow ring */}
        <div className="absolute inset-0 -m-8 border border-muted opacity-30" />
        <div className="absolute inset-0 -m-16 border border-muted opacity-20" />
        
        {/* Image container */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border-2 border-foreground glow-subtle flex items-center justify-center bg-secondary">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Eye of the State - Bureau Seal"
              className="w-full h-full object-contain p-4"
            />
          ) : (
            /* Placeholder surveillance eye */
            <svg
              viewBox="0 0 200 200"
              className="w-3/4 h-3/4 text-foreground"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer geometric frame */}
              <polygon
                points="100,10 190,100 100,190 10,100"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              {/* Inner circle */}
              <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="2" fill="none" />
              {/* Eye shape */}
              <ellipse cx="100" cy="100" rx="35" ry="20" stroke="currentColor" strokeWidth="2" fill="none" />
              {/* Pupil */}
              <circle cx="100" cy="100" r="12" fill="currentColor" />
              {/* Iris detail */}
              <circle cx="100" cy="100" r="8" fill="hsl(var(--background))" />
              <circle cx="100" cy="100" r="4" fill="currentColor" />
              {/* Radiating lines */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <line
                  key={angle}
                  x1="100"
                  y1="100"
                  x2={100 + 70 * Math.cos((angle * Math.PI) / 180)}
                  y2={100 + 70 * Math.sin((angle * Math.PI) / 180)}
                  stroke="currentColor"
                  strokeWidth="1"
                  opacity="0.3"
                />
              ))}
            </svg>
          )}
        </div>
      </div>

      {/* Caption */}
      <div className="mt-12 text-center">
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-[0.3em] mb-2">
          EYE OF THE STATE
        </h1>
        <p className="font-display text-xl md:text-2xl tracking-[0.2em] text-muted-foreground" dir="rtl">
          عين الدولة
        </p>
      </div>

      {/* Decorative lines */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default SurveillanceSeal;
