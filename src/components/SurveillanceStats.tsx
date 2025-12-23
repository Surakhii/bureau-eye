const SurveillanceStats = () => {
  const stats = [
    { value: "14.7M", label: "CITIZENS MONITORED", labelAr: "مواطن تحت المراقبة" },
    { value: "99.7%", label: "COMPLIANCE RATE", labelAr: "معدل الامتثال" },
    { value: "847", label: "DETENTIONS TODAY", labelAr: "الاعتقالات اليوم" },
    { value: "∞", label: "SURVEILLANCE NODES", labelAr: "نقاط المراقبة" },
  ];

  return (
    <section className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] text-muted-foreground mb-2">
            REAL-TIME NETWORK STATUS
          </p>
          <h2 className="font-display text-2xl md:text-3xl tracking-[0.25em]">
            SURVEILLANCE METRICS
          </h2>
          <p className="font-display text-lg tracking-[0.15em] text-muted-foreground mt-1" dir="rtl">
            مقاييس المراقبة
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="border border-border bg-card p-6 md:p-8 text-center group hover:border-foreground transition-colors duration-300"
            >
              <div className="font-display text-3xl md:text-4xl lg:text-5xl tracking-wider mb-3 group-hover:text-bureau-red transition-colors">
                {stat.value}
              </div>
              <div className="text-xs tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </div>
              <div className="text-xs tracking-widest text-muted-foreground/70 mt-1" dir="rtl">
                {stat.labelAr}
              </div>
            </div>
          ))}
        </div>

        {/* Live indicator */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <div className="w-2 h-2 rounded-full bg-bureau-red animate-defcon-pulse" />
          <span className="text-xs tracking-[0.3em] text-muted-foreground">
            LIVE DATA FEED ACTIVE
          </span>
        </div>
      </div>
    </section>
  );
};

export default SurveillanceStats;
