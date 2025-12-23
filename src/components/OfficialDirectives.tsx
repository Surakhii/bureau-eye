const OfficialDirectives = () => {
  const directives = [
    {
      code: "DIR-2847",
      title: "MANDATORY CURFEW EXTENSION",
      titleAr: "تمديد حظر التجول الإلزامي",
      description: "All citizens must remain indoors between 21:00 and 06:00. Violators will be detained.",
      status: "ACTIVE",
      date: "2024.12.15",
    },
    {
      code: "DIR-2843",
      title: "COMMUNICATION RESTRICTIONS",
      titleAr: "قيود الاتصالات",
      description: "Unauthorized encrypted communications are prohibited. All messages subject to review.",
      status: "ACTIVE",
      date: "2024.12.10",
    },
    {
      code: "DIR-2839",
      title: "ASSEMBLY PROHIBITION",
      titleAr: "حظر التجمعات",
      description: "Gatherings of more than 3 citizens require pre-authorization from sector command.",
      status: "ACTIVE",
      date: "2024.12.01",
    },
    {
      code: "DIR-2835",
      title: "MANDATORY IDENTIFICATION",
      titleAr: "الهوية الإلزامية",
      description: "Citizens must carry identification at all times. Failure to present ID upon request is punishable.",
      status: "ACTIVE",
      date: "2024.11.20",
    },
  ];

  return (
    <section className="py-20 border-t border-border bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] text-muted-foreground mb-2">
            MANDATORY COMPLIANCE REQUIRED
          </p>
          <h2 className="font-display text-2xl md:text-3xl tracking-[0.25em]">
            OFFICIAL DIRECTIVES
          </h2>
          <p className="font-display text-lg tracking-[0.15em] text-muted-foreground mt-1" dir="rtl">
            التوجيهات الرسمية
          </p>
        </div>

        {/* Directives list */}
        <div className="max-w-4xl mx-auto space-y-4">
          {directives.map((directive, index) => (
            <div
              key={index}
              className="border border-border bg-card p-6 hover:border-foreground transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs tracking-widest text-muted-foreground">
                      {directive.code}
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-bureau-red/20 text-bureau-red border border-bureau-red/30 tracking-widest">
                      {directive.status}
                    </span>
                  </div>
                  <h3 className="font-display text-lg tracking-[0.15em] mb-1">
                    {directive.title}
                  </h3>
                  <p className="font-display text-sm tracking-widest text-muted-foreground" dir="rtl">
                    {directive.titleAr}
                  </p>
                  <p className="font-mono text-sm text-muted-foreground mt-3 leading-relaxed">
                    {directive.description}
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-xs tracking-widest text-muted-foreground">
                    {directive.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Warning */}
        <div className="text-center mt-10">
          <p className="text-xs tracking-[0.2em] text-muted-foreground">
            IGNORANCE OF DIRECTIVES IS NOT A VALID DEFENSE
          </p>
          <p className="text-xs tracking-widest text-muted-foreground/70 mt-1" dir="rtl">
            الجهل بالتوجيهات ليس عذراً مقبولاً
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfficialDirectives;
