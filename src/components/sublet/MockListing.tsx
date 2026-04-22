import { Calendar, MapPin, DollarSign, BedDouble, CheckCircle2, Search } from "lucide-react";

export const MockListing = () => {
  return (
    <div className="relative">
      {/* Decorative offset card */}
      <div
        aria-hidden
        className="absolute -inset-4 rounded-3xl bg-cream-deep/60 -rotate-1"
      />
      <div className="relative rounded-3xl bg-surface border border-border shadow-[0_30px_80px_-30px_hsl(30_10%_12%/0.18)] p-6 md:p-7">
        {/* Filter bar */}
        <div className="flex items-center gap-2 rounded-full bg-cream/70 border border-border px-4 py-2.5">
          <Search className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Search verified CMU listings…</span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
          {[
            { icon: Calendar, label: "Move-in", value: "Aug 18" },
            { icon: DollarSign, label: "Rent", value: "≤ $1,200" },
            { icon: MapPin, label: "Distance", value: "< 0.6 mi" },
          ].map((f) => (
            <div key={f.label} className="rounded-xl border border-border bg-background px-3 py-2.5">
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <f.icon className="h-3 w-3" />
                <span className="uppercase tracking-wider">{f.label}</span>
              </div>
              <div className="mt-1 font-medium text-foreground">{f.value}</div>
            </div>
          ))}
        </div>

        {/* Listings */}
        <div className="mt-5 space-y-3">
          {[
            { title: "Studio · Morewood Ave", price: "$1,050/mo", dates: "Aug 15 – Dec 20", dist: "0.3 mi", tag: "Verified" },
            { title: "1BR in Shadyside", price: "$1,180/mo", dates: "Aug 20 – May 10", dist: "0.7 mi", tag: "Verified" },
            { title: "Sublet · Forbes Ave", price: "$890/mo", dates: "Jun 1 – Aug 10", dist: "0.2 mi", tag: "Summer" },
          ].map((l, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-2xl border border-border p-3 hover:border-foreground/30 transition-colors"
            >
              <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-cream to-cream-deep border border-border shrink-0 grid place-items-center">
                <BedDouble className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium truncate">{l.title}</p>
                  <span className="inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider text-foreground bg-cream-deep px-1.5 py-0.5 rounded">
                    <CheckCircle2 className="h-2.5 w-2.5" />
                    {l.tag}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {l.dates} · {l.dist} from campus
                </p>
              </div>
              <div className="text-sm font-medium tabular-nums">{l.price}</div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
          <span>34 listings · updated today</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
            CMU email verified
          </span>
        </div>
      </div>
    </div>
  );
};
