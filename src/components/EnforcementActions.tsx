const EnforcementActions = () => {
  const actions = [
    {
      time: "02:47",
      sector: "SECTOR 7-G",
      action: "CURFEW VIOLATION - 3 DETAINED",
      actionAr: "انتهاك حظر التجول - 3 معتقلين",
    },
    {
      time: "01:32",
      sector: "SECTOR 4-A",
      action: "UNAUTHORIZED ASSEMBLY - DISPERSED",
      actionAr: "تجمع غير مصرح به - تم التفريق",
    },
    {
      time: "00:58",
      sector: "SECTOR 12-C",
      action: "CONTRABAND SEIZURE - 1 DETAINED",
      actionAr: "مصادرة ممنوعات - 1 معتقل",
    },
    {
      time: "23:15",
      sector: "SECTOR 2-F",
      action: "SEDITIOUS MATERIALS - UNDER INVESTIGATION",
      actionAr: "مواد تحريضية - قيد التحقيق",
    },
    {
      time: "22:41",
      sector: "SECTOR 9-B",
      action: "IDENTITY VIOLATION - 2 DETAINED",
      actionAr: "انتهاك الهوية - 2 معتقلين",
    },
  ];

  return (
    <section className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] text-muted-foreground mb-2">
            LAST 24 HOURS
          </p>
          <h2 className="font-display text-2xl md:text-3xl tracking-[0.25em]">
            RECENT ENFORCEMENT ACTIONS
          </h2>
          <p className="font-display text-lg tracking-[0.15em] text-muted-foreground mt-1" dir="rtl">
            إجراءات التنفيذ الأخيرة
          </p>
        </div>

        {/* Actions list */}
        <div className="max-w-4xl mx-auto">
          <div className="border border-border bg-card">
            {/* Header */}
            <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-border bg-secondary/50 text-xs tracking-widest text-muted-foreground">
              <div className="col-span-2">TIME</div>
              <div className="col-span-3">SECTOR</div>
              <div className="col-span-7">ACTION</div>
            </div>

            {/* Rows */}
            {actions.map((action, index) => (
              <div
                key={index}
                className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-border last:border-b-0 hover:bg-secondary/30 transition-colors"
              >
                <div className="col-span-2 font-mono text-sm text-bureau-red">
                  {action.time}
                </div>
                <div className="col-span-3 font-mono text-sm text-muted-foreground">
                  {action.sector}
                </div>
                <div className="col-span-7">
                  <p className="font-mono text-sm">{action.action}</p>
                  <p className="font-mono text-xs text-muted-foreground mt-1" dir="rtl">
                    {action.actionAr}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-4 text-xs tracking-widest text-muted-foreground">
            <span>DISPLAYING 5 OF 847 ACTIONS</span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-bureau-red animate-defcon-pulse" />
              UPDATING LIVE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnforcementActions;
