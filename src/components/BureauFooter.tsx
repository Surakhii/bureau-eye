const BureauFooter = () => {
  return (
    <footer className="border-t border-border py-12 mt-auto">
      <div className="container mx-auto px-6">
        {/* Slogan */}
        <div className="text-center mb-8">
          <p className="font-display text-xl md:text-2xl tracking-[0.4em] text-muted-foreground">
            ORDER. SURVEILLANCE. COMPLIANCE.
          </p>
          <p className="font-display text-lg tracking-[0.2em] text-muted-foreground mt-2" dir="rtl">
            نظام. مراقبة. امتثال.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom info */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground tracking-widest">
          <div className="flex items-center gap-2">
            <span>CENTRAL DIRECTORATE</span>
            <span className="text-border">|</span>
            <span dir="rtl">المديرية المركزية</span>
          </div>
          <div className="flex items-center gap-2">
            <span>SECTOR 7 • DIVISION 4</span>
            <span className="text-border">|</span>
            <span dir="rtl">القطاع ٧ • الشعبة ٤</span>
          </div>
          <div>
            <span>AUTHORIZED ACCESS ONLY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BureauFooter;
