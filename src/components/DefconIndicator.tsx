const DefconIndicator = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col items-end">
        <span className="text-xs text-muted-foreground tracking-widest">THREAT LEVEL</span>
        <span className="text-xs text-muted-foreground tracking-widest" dir="rtl">مستوى التهديد</span>
      </div>
      <div className="flex items-center gap-2 border border-border px-4 py-2 bg-secondary">
        <div className="w-3 h-3 rounded-full bg-bureau-red animate-defcon-pulse glow-red" />
        <span className="font-display text-xl tracking-widest text-bureau-red">
          DEFCON: 4
        </span>
      </div>
    </div>
  );
};

export default DefconIndicator;
