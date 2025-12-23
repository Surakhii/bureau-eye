import { useState } from "react";

const ReportCitizen = () => {
  const [formData, setFormData] = useState({
    suspectId: "",
    location: "",
    violation: "",
    details: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const violations = [
    "SELECT VIOLATION TYPE",
    "UNAUTHORIZED ASSEMBLY",
    "CURFEW VIOLATION",
    "SEDITIOUS SPEECH",
    "UNREGISTERED COMMUNICATION",
    "POSSESSION OF CONTRABAND",
    "FAILURE TO COMPLY",
    "SUSPICIOUS BEHAVIOR",
    "OTHER",
  ];

  return (
    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-6 max-w-2xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] text-muted-foreground mb-2">
            CIVIC DUTY REPORTING SYSTEM
          </p>
          <h2 className="font-display text-2xl md:text-3xl tracking-[0.25em]">
            REPORT A CITIZEN
          </h2>
          <p className="font-display text-lg tracking-[0.15em] text-muted-foreground mt-1" dir="rtl">
            الإبلاغ عن مواطن
          </p>
        </div>

        {/* Form */}
        <div className="border border-border bg-card p-8">
          {!isSubmitted ? (
            <div className="space-y-6">
              {/* Suspect ID */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-xs tracking-widest text-muted-foreground uppercase">
                    Suspect Citizen ID
                  </label>
                  <span className="text-xs tracking-widest text-muted-foreground" dir="rtl">
                    رقم المشتبه به
                  </span>
                </div>
                <input
                  type="text"
                  value={formData.suspectId}
                  onChange={(e) => setFormData({ ...formData, suspectId: e.target.value })}
                  placeholder="XX-XXXX-XXXX-XXXX"
                  className="w-full bg-input border-2 border-border px-4 py-3 font-mono text-sm tracking-widest placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                />
              </div>

              {/* Location */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-xs tracking-widest text-muted-foreground uppercase">
                    Location of Incident
                  </label>
                  <span className="text-xs tracking-widest text-muted-foreground" dir="rtl">
                    موقع الحادثة
                  </span>
                </div>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Sector / Block / Unit"
                  className="w-full bg-input border-2 border-border px-4 py-3 font-mono text-sm tracking-widest placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                />
              </div>

              {/* Violation type */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-xs tracking-widest text-muted-foreground uppercase">
                    Violation Type
                  </label>
                  <span className="text-xs tracking-widest text-muted-foreground" dir="rtl">
                    نوع المخالفة
                  </span>
                </div>
                <select
                  value={formData.violation}
                  onChange={(e) => setFormData({ ...formData, violation: e.target.value })}
                  className="w-full bg-input border-2 border-border px-4 py-3 font-mono text-sm tracking-widest text-foreground focus:outline-none focus:border-foreground transition-colors appearance-none cursor-pointer"
                >
                  {violations.map((v, i) => (
                    <option key={i} value={v} disabled={i === 0}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>

              {/* Details */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-xs tracking-widest text-muted-foreground uppercase">
                    Additional Details
                  </label>
                  <span className="text-xs tracking-widest text-muted-foreground" dir="rtl">
                    تفاصيل إضافية
                  </span>
                </div>
                <textarea
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Describe observed behavior..."
                  rows={4}
                  className="w-full bg-input border-2 border-border px-4 py-3 font-mono text-sm tracking-widest placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                className="w-full bg-bureau-red text-foreground font-display text-lg tracking-[0.2em] py-4 hover:bg-bureau-red/80 transition-colors duration-200 uppercase"
              >
                Submit Report / إرسال البلاغ
              </button>

              <p className="text-xs text-center text-muted-foreground tracking-widest">
                FALSE REPORTS WILL RESULT IN IMMEDIATE DETENTION
              </p>
            </div>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 mx-auto border-2 border-foreground flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-foreground">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
                </svg>
              </div>
              <h3 className="font-display text-xl tracking-[0.2em]">
                REPORT RECEIVED
              </h3>
              <p className="font-display text-lg tracking-widest text-muted-foreground" dir="rtl">
                تم استلام البلاغ
              </p>
              <div className="h-px bg-border my-6" />
              <p className="font-mono text-sm text-muted-foreground">
                CASE NUMBER: {Math.random().toString(36).substring(2, 10).toUpperCase()}
              </p>
              <p className="font-mono text-sm text-muted-foreground">
                YOUR COOPERATION IS NOTED IN YOUR FILE.
              </p>
              <p className="font-mono text-sm text-muted-foreground" dir="rtl">
                تعاونك مسجل في ملفك.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReportCitizen;
