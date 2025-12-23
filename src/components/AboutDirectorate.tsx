const AboutDirectorate = () => {
  return (
    <section className="py-20 border-t border-border bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] text-muted-foreground mb-2">
              KNOW YOUR PROTECTORS
            </p>
            <h2 className="font-display text-2xl md:text-3xl tracking-[0.25em]">
              ABOUT THE DIRECTORATE
            </h2>
            <p className="font-display text-lg tracking-[0.15em] text-muted-foreground mt-1" dir="rtl">
              عن المديرية
            </p>
          </div>

          {/* Content grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Mission */}
            <div className="border border-border bg-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 border border-foreground flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-foreground">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="12" r="4" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-lg tracking-[0.15em]">OUR MISSION</h3>
                  <p className="text-xs tracking-widest text-muted-foreground" dir="rtl">مهمتنا</p>
                </div>
              </div>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                The Central Directorate exists to maintain order, ensure compliance, and protect the state from internal threats. Through constant vigilance and unwavering dedication, we guarantee the security of all compliant citizens.
              </p>
            </div>

            {/* Authority */}
            <div className="border border-border bg-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 border border-foreground flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-foreground">
                    <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" stroke="currentColor" strokeWidth="2" fill="none" />
                    <line x1="12" y1="2" x2="12" y2="22" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-lg tracking-[0.15em]">OUR AUTHORITY</h3>
                  <p className="text-xs tracking-widest text-muted-foreground" dir="rtl">سلطتنا</p>
                </div>
              </div>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                By decree of the Supreme Council, the Directorate holds absolute authority over surveillance, detention, and enforcement. All state security personnel operate under our direct command.
              </p>
            </div>

            {/* Divisions */}
            <div className="border border-border bg-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 border border-foreground flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-foreground">
                    <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                    <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                    <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                    <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-lg tracking-[0.15em]">DIVISIONS</h3>
                  <p className="text-xs tracking-widest text-muted-foreground" dir="rtl">الأقسام</p>
                </div>
              </div>
              <ul className="font-mono text-sm text-muted-foreground space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-foreground" />
                  Bureau of Citizen Monitoring
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-foreground" />
                  Department of Compliance
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-foreground" />
                  Office of Public Order
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-foreground" />
                  Section 7: Special Operations
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="border border-border bg-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 border border-foreground flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-foreground">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-lg tracking-[0.15em]">CONTACT</h3>
                  <p className="text-xs tracking-widest text-muted-foreground" dir="rtl">اتصل بنا</p>
                </div>
              </div>
              <div className="font-mono text-sm text-muted-foreground space-y-2">
                <p>EMERGENCY LINE: 100</p>
                <p>TIP LINE: 100-REPORT</p>
                <p>SECTOR OFFICES: SEE LOCAL POSTING</p>
                <p className="text-bureau-red mt-4 text-xs">
                  ALL CALLS ARE RECORDED AND TRACED
                </p>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-16 text-center border-t border-b border-border py-12">
            <blockquote className="font-display text-xl md:text-2xl tracking-[0.2em] text-muted-foreground italic">
              "SECURITY THROUGH VIGILANCE. ORDER THROUGH CONTROL."
            </blockquote>
            <p className="font-display text-lg tracking-widest text-muted-foreground/70 mt-4" dir="rtl">
              "الأمن من خلال اليقظة. النظام من خلال السيطرة."
            </p>
            <p className="font-mono text-xs tracking-widest text-muted-foreground mt-6">
              — THE SUPREME DIRECTOR, YEAR 47
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDirectorate;
