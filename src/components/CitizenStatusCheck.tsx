import { useState } from "react";

const CitizenStatusCheck = () => {
  const [citizenId, setCitizenId] = useState("");
  const [isFlagged, setIsFlagged] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);

  const handleVerify = () => {
    setHasChecked(true);
    setIsFlagged(true);
  };

  return (
    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-6 max-w-xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl tracking-[0.25em] mb-2">
            CITIZEN STATUS CHECK
          </h2>
          <p className="font-display text-lg tracking-[0.15em] text-muted-foreground" dir="rtl">
            فحص حالة المواطن
          </p>
        </div>

        {/* Form container */}
        <div className="border border-border bg-card p-8">
          <div className="space-y-6">
            {/* Label */}
            <div className="flex justify-between items-center">
              <label className="text-sm tracking-widest text-muted-foreground uppercase">
                Enter Citizen ID
              </label>
              <span className="text-sm tracking-widest text-muted-foreground" dir="rtl">
                أدخل رقم المواطن
              </span>
            </div>

            {/* Input field */}
            <input
              type="text"
              value={citizenId}
              onChange={(e) => {
                setCitizenId(e.target.value);
                if (hasChecked) {
                  setHasChecked(false);
                  setIsFlagged(false);
                }
              }}
              placeholder="XX-XXXX-XXXX-XXXX"
              className={`
                w-full bg-input border-2 px-4 py-4 
                font-mono text-lg tracking-widest
                placeholder:text-muted-foreground/50
                focus:outline-none focus:ring-0
                transition-colors duration-200
                ${isFlagged 
                  ? 'border-bureau-red animate-border-flash text-bureau-red' 
                  : 'border-border focus:border-foreground'
                }
              `}
            />

            {/* Verify button */}
            <button
              onClick={handleVerify}
              className="
                w-full bg-foreground text-background 
                font-display text-lg tracking-[0.2em] 
                py-4 
                hover:bg-muted-foreground 
                transition-colors duration-200
                uppercase
              "
            >
              Verify / تحقق
            </button>

            {/* Status message */}
            {hasChecked && isFlagged && (
              <div className="border-2 border-bureau-red bg-bureau-red/10 p-6 animate-text-flash">
                <div className="flex items-start gap-4">
                  {/* Warning icon */}
                  <div className="flex-shrink-0">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-bureau-red"
                    >
                      <path
                        d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  
                  {/* Message content */}
                  <div className="flex-1 space-y-2">
                    <p className="font-display text-lg tracking-widest text-bureau-red uppercase">
                      STATUS: FLAGGED FOR REVIEW
                    </p>
                    <p className="font-display text-base tracking-widest text-bureau-red" dir="rtl">
                      الحالة: تم التعليم للمراجعة
                    </p>
                    <div className="h-px bg-bureau-red/30 my-3" />
                    <p className="font-mono text-sm text-bureau-red/90 tracking-wider">
                      REMAIN AT YOUR LOCATION. DIRECTORATE PERSONNEL HAVE BEEN NOTIFIED.
                    </p>
                    <p className="font-mono text-sm text-bureau-red/90 tracking-wider" dir="rtl">
                      ابق في موقعك. تم إخطار أفراد المديرية.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer warning */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground tracking-widest">
            ALL QUERIES ARE LOGGED AND MONITORED
          </p>
          <p className="text-xs text-muted-foreground tracking-widest mt-1" dir="rtl">
            يتم تسجيل ومراقبة جميع الاستعلامات
          </p>
        </div>
      </div>
    </section>
  );
};

export default CitizenStatusCheck;
