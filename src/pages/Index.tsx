import {
  ArrowUpRight,
  ArrowRight,
  ArrowUp,
  Layers,
  Clock3,
  ShieldCheck,
  Compass,
  Mail,
  Filter,
  Image as ImageIcon,
  CalendarDays,
  MessageSquare,
  Database,
  Workflow,
  Network,
  TrendingUp,
  Users,
  Building2,
  Check,
  X,
  Minus,
  GraduationCap,
  Plane,
  Briefcase,
  Home,
} from "lucide-react";
import { Nav } from "@/components/sublet/Nav";
import { MockListing } from "@/components/sublet/MockListing";

const Section = ({
  id,
  eyebrow,
  title,
  intro,
  children,
  tone = "default",
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  tone?: "default" | "cream";
}) => (
  <section
    id={id}
    className={`py-24 md:py-32 ${tone === "cream" ? "bg-cream/60" : "bg-background"}`}
  >
    <div className="container-editorial">
      <div className="max-w-3xl">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="section-title mt-4">{title}</h2>
        {intro && (
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{intro}</p>
        )}
      </div>
      <div className="mt-14 md:mt-16">{children}</div>
    </div>
  </section>
);

const PainCard = ({ icon: Icon, title, body }: any) => (
  <div className="editorial-card">
    <Icon className="h-5 w-5 text-foreground" strokeWidth={1.4} />
    <h3 className="mt-5 font-serif text-xl">{title}</h3>
    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section id="overview" className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--cream))_0%,transparent_55%),radial-gradient(ellipse_at_bottom_right,hsl(var(--cream-deep))_0%,transparent_50%)]"
        />
        <div className="container-editorial grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 fade-up">
            <span className="eyebrow">Carnegie Mellon · Information Systems Project</span>
            <h1 className="mt-6 font-serif font-light text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Sublet<span className="italic text-accent">CMU</span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl font-serif font-light text-foreground/80 leading-snug max-w-2xl">
              A verified CMU-only housing platform for last-minute sublets and
              off-campus apartment search.
            </p>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-xl">
              CMU students — especially freshmen and sophomores — struggle to find
              housing quickly. Listings are scattered across Instagram, group chats,
              and informal channels, leaving students without a trustworthy place to
              search when timing matters most.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#solution"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:bg-accent transition-colors"
              >
                View Solution
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#strategy"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 text-sm font-medium text-foreground hover:border-foreground/40 transition-colors"
              >
                See Research & Strategy
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "Scope", v: "CMU-only" },
                { k: "Focus", v: "Timing-first" },
                { k: "Trust", v: "Verified" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {s.k}
                  </dt>
                  <dd className="mt-1 font-serif text-lg">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5 fade-up" style={{ animationDelay: "120ms" }}>
            <MockListing />
          </div>
        </div>
      </section>

      <div className="container-editorial"><div className="divider-rule" /></div>

      {/* PROBLEM */}
      <Section
        id="problem"
        eyebrow="The Problem"
        title="Why housing search at CMU feels chaotic"
        intro="The CMU off-campus housing experience is not broken because listings don't exist — it's broken because they're invisible, unstructured, and untimed. Students lose hours navigating fragmented channels just to confirm basics."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <PainCard
            icon={Layers}
            title="Fragmented listings"
            body="Listings are scattered across Instagram stories, group chats, and word-of-mouth, with no canonical place to look."
          />
          <PainCard
            icon={CalendarDays}
            title="Unclear availability"
            body="Move-in and move-out timing is rarely visible upfront, forcing students to message each lister individually."
          />
          <PainCard
            icon={Clock3}
            title="Time-sensitive pressure"
            body="Decisions are made in days, not weeks — especially in the run-up to a semester or summer internship."
          />
          <PainCard
            icon={ShieldCheck}
            title="Low trust and verification"
            body="First-time renters cannot easily tell who is a real CMU student, raising the cost of every interaction."
          />
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-cream/50 p-6 md:p-8">
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-3xl">
            This problem is especially acute in the weeks right before a semester
            begins, when students need housing fast and cannot afford uncertainty.
            The cost of a bad match is not just financial — it is academic and
            emotional.
          </p>
        </div>
      </Section>

      {/* STAKEHOLDERS */}
      <Section
        id="stakeholders"
        eyebrow="Stakeholders"
        title="Who is affected"
        intro="SubletCMU centers students whose housing decisions are most time-sensitive, while remaining useful to a wider community of subletters and partners over time."
        tone="cream"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="editorial-card">
            <span className="eyebrow">Primary</span>
            <h3 className="mt-4 font-serif text-2xl">Students under time pressure</h3>
            <ul className="mt-6 space-y-4">
              {[
                { icon: GraduationCap, t: "CMU freshmen", d: "Searching off-campus housing for the first time, often with little local knowledge." },
                { icon: Home, t: "Sophomores moving off campus", d: "Navigating leases, roommates, and timing simultaneously." },
                { icon: Clock3, t: "Students searching 2–4 weeks before move-in", d: "Operating in the highest-urgency window of the year." },
              ].map((s) => (
                <li key={s.t} className="flex gap-4">
                  <s.icon className="h-5 w-5 mt-0.5 text-foreground shrink-0" strokeWidth={1.4} />
                  <div>
                    <p className="font-medium">{s.t}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{s.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="editorial-card">
            <span className="eyebrow">Secondary</span>
            <h3 className="mt-4 font-serif text-2xl">Subletters and adjacent users</h3>
            <ul className="mt-6 space-y-4">
              {[
                { icon: Briefcase, t: "Students subletting for summer internships", d: "Needing trusted short-term tenants while away." },
                { icon: Plane, t: "Students leaving for study abroad", d: "Looking to fill a semester-long gap reliably." },
                { icon: Workflow, t: "Students on co-op schedules", d: "Operating on non-standard housing timelines." },
                { icon: Building2, t: "Landlords and property managers (later)", d: "A potential surface for verified, structured listings." },
              ].map((s) => (
                <li key={s.t} className="flex gap-4">
                  <s.icon className="h-5 w-5 mt-0.5 text-foreground shrink-0" strokeWidth={1.4} />
                  <div>
                    <p className="font-medium">{s.t}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{s.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* SOLUTION */}
      <Section
        id="solution"
        eyebrow="The Solution"
        title="A timing-first housing marketplace"
        intro="SubletCMU is a verified, CMU-only platform that makes housing search fast, structured, and trustworthy. It replaces scattered messages with a clean interface designed around the way students actually decide."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: Mail, t: "CMU email verification", d: "Every account is confirmed against an Andrew email, establishing baseline trust." },
            { icon: ImageIcon, t: "Structured listings", d: "Price, location, room details, and photos in a consistent, scannable format." },
            { icon: CalendarDays, t: "Clear available dates", d: "Move-in and move-out windows are first-class fields, not afterthoughts." },
            { icon: Filter, t: "Powerful filters", d: "Filter by move-in date, price ceiling, and walking distance to campus." },
            { icon: MessageSquare, t: "Direct contact", d: "Reach listers directly via text or Instagram — no inbox middle layer." },
            { icon: Compass, t: "Clean listing layout", d: "No clutter, no ads, no algorithmic noise. Just what students need to decide." },
          ].map((f) => (
            <div key={f.t} className="editorial-card">
              <f.icon className="h-5 w-5 text-foreground" strokeWidth={1.4} />
              <h3 className="mt-5 font-serif text-lg">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>

        <blockquote className="mt-12 border-l-2 border-foreground pl-6 max-w-3xl">
          <p className="font-serif text-2xl md:text-3xl font-light leading-snug">
            SubletCMU does not try to overwhelm users with algorithmic
            recommendations. It focuses on <em>clarity</em>, <em>timing</em>, and{" "}
            <em>trust</em>.
          </p>
        </blockquote>
      </Section>

      {/* HOW IT WORKS */}
      <Section
        id="workflow"
        eyebrow="How the system works"
        title="System workflow"
        intro="A linear, low-friction pipeline that takes a listing from submission to a completed match — with verification and structure built in at every step."
        tone="cream"
      >
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              "Student logs in with CMU email",
              "Lister submits housing details",
              "Platform verifies and structures the listing",
              "Searcher filters by timing, price, and location",
              "Students connect directly and complete the match",
            ].map((step, i) => (
              <div key={i} className="relative editorial-card">
                <div className="font-serif text-3xl text-muted-foreground/70">
                  0{i + 1}
                </div>
                <p className="mt-3 text-sm leading-relaxed">{step}</p>
                {i < 4 && (
                  <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-sand z-10 bg-cream rounded-full" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Workflow, t: "Input layer", d: "Listing submission and CMU verification." },
              { icon: Database, t: "Database layer", d: "Structured housing records with consistent fields." },
              { icon: Filter, t: "Interface layer", d: "Filters and search experience tuned for urgency." },
              { icon: Network, t: "Communication layer", d: "Direct outreach between students, no middleman." },
            ].map((l) => (
              <div key={l.t} className="rounded-2xl border border-border bg-surface p-5">
                <l.icon className="h-4 w-4 text-foreground" strokeWidth={1.4} />
                <p className="mt-3 font-medium">{l.t}</p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{l.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* STRATEGY */}
      <Section
        id="strategy"
        eyebrow="Strategic Analysis"
        title="Why this creates value"
        intro="SubletCMU's value is not in inventory volume — it is in reducing friction at the most uncertain moment of a student's housing journey."
      >
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="editorial-card">
            <TrendingUp className="h-5 w-5" strokeWidth={1.4} />
            <h3 className="mt-5 font-serif text-xl">Value creation</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              The platform reduces search time, lowers uncertainty, improves trust,
              and helps students make faster, more confident housing decisions during
              their most stressful weeks.
            </p>
          </div>
          <div className="editorial-card">
            <Workflow className="h-5 w-5" strokeWidth={1.4} />
            <h3 className="mt-5 font-serif text-xl">Value chain position</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              SubletCMU creates value in the discovery and matching stage of student
              housing. It improves information flow before the leasing or subletting
              decision happens — upstream of the transaction itself.
            </p>
          </div>
          <div className="editorial-card">
            <Compass className="h-5 w-5" strokeWidth={1.4} />
            <h3 className="mt-5 font-serif text-xl">Competitive positioning</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Against general-purpose platforms, SubletCMU wins on student-fit,
              verified trust, and explicit move-in timing — three dimensions
              incumbents systematically underweight.
            </p>
          </div>
        </div>

        {/* Comparison table */}
        <div className="mt-12 rounded-2xl border border-border bg-surface overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-cream/60 border-b border-border">
                  <th className="text-left font-medium text-muted-foreground uppercase tracking-wider text-xs px-6 py-4">
                    Criteria
                  </th>
                  {["Instagram", "Facebook Groups", "Zillow", "SubletCMU"].map((c) => (
                    <th
                      key={c}
                      className={`text-left px-6 py-4 font-serif text-base ${
                        c === "SubletCMU" ? "text-foreground" : "text-foreground/70"
                      }`}
                    >
                      {c}
                      {c === "SubletCMU" && (
                        <span className="ml-2 text-[10px] uppercase tracking-wider text-muted-foreground">
                          Ours
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { c: "Student-specific", v: ["partial", "partial", "no", "yes"] },
                  { c: "Verified users", v: ["no", "partial", "partial", "yes"] },
                  { c: "Clear move-in timing", v: ["no", "no", "partial", "yes"] },
                  { c: "Easy filtering", v: ["no", "no", "yes", "yes"] },
                  { c: "Low clutter", v: ["no", "no", "no", "yes"] },
                ].map((row, i) => (
                  <tr
                    key={row.c}
                    className={`border-b border-border last:border-0 ${
                      i % 2 ? "bg-background" : "bg-surface"
                    }`}
                  >
                    <td className="px-6 py-4 font-medium">{row.c}</td>
                    {row.v.map((val, j) => (
                      <td
                        key={j}
                        className={`px-6 py-4 ${j === 3 ? "bg-cream/40" : ""}`}
                      >
                        {val === "yes" && (
                          <span className="inline-flex items-center gap-1.5 text-foreground">
                            <Check className="h-4 w-4" />
                            <span className="text-xs">Yes</span>
                          </span>
                        )}
                        {val === "no" && (
                          <span className="inline-flex items-center gap-1.5 text-muted-foreground/70">
                            <X className="h-4 w-4" />
                            <span className="text-xs">No</span>
                          </span>
                        )}
                        {val === "partial" && (
                          <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                            <Minus className="h-4 w-4" />
                            <span className="text-xs">Partial</span>
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* DIFFERENTIATION */}
      <Section
        id="differentiation"
        eyebrow="Differentiation"
        title="Differentiation under urgency"
        intro="The key competitive advantage is not inventory volume but usability during high-stress moments. When students are deciding in 48 hours, clarity beats catalog size."
        tone="cream"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { t: "Timing-first design", d: "Move-in dates are surfaced before everything else." },
            { t: "CMU-only trust layer", d: "Every interaction starts from a shared verified identity." },
            { t: "Simple structured listings", d: "A consistent format that loads, scans, and decides fast." },
            { t: "Built for urgent decisions", d: "Optimized for students choosing in days, not months." },
          ].map((d) => (
            <div key={d.t} className="rounded-2xl bg-surface border border-border p-6">
              <p className="font-serif text-xl">{d.t}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SOCIAL THEORY */}
      <Section
        id="theory"
        eyebrow="Social Theory"
        title="Social theories behind the design"
        intro="Each design choice in SubletCMU traces back to a specific theoretical commitment about how students adopt technology, build trust, and exchange value."
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              tag: "TAM",
              t: "Technology Acceptance Model",
              d: "SubletCMU increases perceived usefulness by making timing and pricing visible upfront, and increases ease of use through structured filters and a clean interface — the two factors TAM identifies as decisive in adoption.",
              link: "Design choice → upfront fields, minimal UI, default sort by relevance to timing.",
            },
            {
              tag: "Trust",
              t: "Trust Theory",
              d: "Housing decisions are high-stakes and information-asymmetric. A CMU-verified environment reduces uncertainty and increases confidence in both listings and contacts, lowering the perceived cost of every interaction.",
              link: "Design choice → CMU email verification, identity badges, direct contact.",
            },
            {
              tag: "Platform",
              t: "Platform Theory",
              d: "SubletCMU creates value by connecting two groups inside the CMU ecosystem — students seeking housing and students offering sublets — with structure that benefits both sides simultaneously.",
              link: "Design choice → two-sided submission and search flows, shared verification.",
            },
          ].map((t) => (
            <div key={t.t} className="editorial-card flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground bg-cream px-2 py-1 rounded">
                  {t.tag}
                </span>
                <span className="font-serif text-xs text-muted-foreground">Theory</span>
              </div>
              <h3 className="mt-5 font-serif text-2xl leading-tight">{t.t}</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{t.d}</p>
              <div className="mt-5 pt-5 border-t border-border text-xs text-foreground/80 leading-relaxed">
                {t.link}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* IMPACT */}
      <Section
        id="impact"
        eyebrow="Impact"
        title="Expected impact"
        intro="SubletCMU is small in scope but meaningful in effect — improving how a tightly defined community shares information about one of its most important decisions."
        tone="cream"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="editorial-card">
            <span className="eyebrow">Organizational / operational</span>
            <h3 className="mt-4 font-serif text-2xl">Operational impact</h3>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {[
                "Faster housing matching during peak windows",
                "Reduced information friction across student channels",
                "More efficient student-to-student subletting",
                "Lower reliance on scattered informal channels",
              ].map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 rounded-full bg-foreground shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="editorial-card">
            <span className="eyebrow">Societal / student life</span>
            <h3 className="mt-4 font-serif text-2xl">Community impact</h3>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {[
                "Less stress during transition periods",
                "Improved trust in peer housing exchange",
                "Better support for first-time renters",
                "Stronger student community infrastructure",
              ].map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 rounded-full bg-foreground shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-surface p-6 md:p-8">
          <span className="eyebrow">Risks and trade-offs</span>
          <div className="mt-5 grid md:grid-cols-3 gap-6">
            {[
              "Uneven listing supply at launch, especially outside peak windows.",
              "Need for moderation and verification standards as the platform scales.",
              "Possible exclusion of non-CMU housing participants in early stages.",
            ].map((r, i) => (
              <div key={i} className="flex gap-3">
                <span className="font-serif text-2xl text-muted-foreground/60 leading-none">
                  0{i + 1}
                </span>
                <p className="text-sm text-foreground/80 leading-relaxed">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* GTM */}
      <Section
        id="gtm"
        eyebrow="Go-to-market"
        title="Launch strategy"
        intro="A staged plan that builds supply before demand, then times the public launch to the moments of highest housing stress in the academic calendar."
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              p: "Phase 01",
              t: "Build supply",
              d: "Repost listings from Instagram with permission and seed the platform with around 50 verified listings to ensure first-time visitors find real options.",
            },
            {
              p: "Phase 02",
              t: "Reach demand",
              d: "Distribute through CMU GroupMe chats, Discord servers, Reddit, and existing student networks where housing conversations already happen.",
            },
            {
              p: "Phase 03",
              t: "Launch at peak urgency",
              d: "Time the public launch around August and January, when housing stress is highest and the marginal value of a verified, structured platform is greatest.",
            },
          ].map((ph) => (
            <div key={ph.p} className="editorial-card">
              <span className="eyebrow">{ph.p}</span>
              <h3 className="mt-4 font-serif text-2xl">{ph.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{ph.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* MVP + METRICS */}
      <Section
        id="mvp"
        eyebrow="MVP & metrics"
        title="Lean MVP and how we'd measure success"
        intro="The first version is intentionally realistic and no-code friendly. The goal is traction first, not technical complexity — proving the timing-first thesis before investing in custom infrastructure."
        tone="cream"
      >
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="editorial-card">
            <span className="eyebrow">Stack</span>
            <h3 className="mt-4 font-serif text-2xl">Lean MVP</h3>
            <dl className="mt-6 divide-y divide-border">
              {[
                { k: "Frontend", v: "Carrd, Glide, or Notion" },
                { k: "Database", v: "Airtable" },
                { k: "Intake form", v: "Google Form or Typeform" },
                { k: "Verification", v: "Manual CMU email screening at first" },
              ].map((s) => (
                <div key={s.k} className="flex items-center justify-between py-3">
                  <dt className="text-sm text-muted-foreground">{s.k}</dt>
                  <dd className="text-sm font-medium">{s.v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              The goal is to validate demand and learn from real student behavior
              before committing to engineering investment.
            </p>
          </div>

          <div className="editorial-card">
            <span className="eyebrow">Success Metrics</span>
            <h3 className="mt-4 font-serif text-2xl">How success would be measured</h3>
            <div className="mt-6 rounded-xl bg-cream/60 border border-border p-5">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Primary metric</p>
              <p className="mt-2 font-serif text-3xl">Successful housing matches</p>
            </div>
            <div className="mt-5">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Secondary metrics</p>
              <ul className="mt-3 grid grid-cols-2 gap-3 text-sm">
                {["Listings posted", "Search inquiries sent", "Time to match", "Repeat usage during peaks"].map((m) => (
                  <li key={m} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-foreground" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* TEAM */}
      <Section
        id="team"
        eyebrow="Team"
        title="Team process and collaboration"
        intro="Responsibilities were divided to play to individual strengths while keeping the project tightly integrated. Decisions were made by consensus after written drafts and short working sessions."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { n: "Team Member 1", r: "Research and problem framing" },
            { n: "Team Member 2", r: "Solution design and strategy" },
            { n: "Team Member 3", r: "Social theory and impact analysis" },
            { n: "Team Member 4", r: "Website design and synthesis" },
          ].map((m) => (
            <div key={m.n} className="editorial-card">
              <div className="h-12 w-12 rounded-full bg-cream-deep border border-border grid place-items-center">
                <Users className="h-5 w-5 text-foreground" strokeWidth={1.4} />
              </div>
              <p className="mt-5 font-serif text-lg">{m.n}</p>
              <p className="mt-1 text-sm text-muted-foreground">{m.r}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            {
              t: "How responsibilities were divided",
              d: "Each member owned one of four pillars — research, strategy, theory, and synthesis — while contributing to shared deliverables.",
            },
            {
              t: "How decisions were made",
              d: "Decisions were made through written proposals followed by short working sessions, prioritizing clarity over speed.",
            },
            {
              t: "Meetings, drafts, and iteration",
              d: "Weekly working meetings, two rounds of structured drafts per section, and continuous iteration on the website until launch.",
            },
          ].map((b) => (
            <div key={b.t} className="rounded-2xl border border-border bg-surface p-6">
              <p className="font-serif text-lg">{b.t}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FINAL TAKEAWAY */}
      <section className="relative py-32 md:py-40 bg-foreground text-background overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(ellipse_at_center,white,transparent_60%)]"
        />
        <div className="container-editorial relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-background/60">
              <span className="h-px w-8 bg-background/40" />
              Final Takeaway
            </span>
            <h2 className="mt-6 font-serif font-light text-4xl md:text-6xl leading-[1.05] tracking-tight">
              Why SubletCMU matters
            </h2>
            <p className="mt-8 text-lg md:text-xl text-background/80 leading-relaxed font-serif font-light">
              SubletCMU shows how a well-designed information system can reduce
              stress, improve decision-making, and create real value in a tightly
              defined community. It is not a flashy marketplace — it is a careful
              intervention at the moment students need it most.
            </p>
            <div className="mt-12">
              <a
                href="#overview"
                className="group inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3.5 text-sm font-medium hover:bg-cream transition-colors"
              >
                <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                Back to top
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background">
        <div className="container-editorial py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-full bg-foreground grid place-items-center">
              <span className="font-serif text-background text-xs leading-none">S</span>
            </span>
            <span className="font-serif">SubletCMU</span>
            <span className="text-xs text-muted-foreground ml-2">
              Carnegie Mellon · Information Systems Project
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            Academic project site · Concept presentation only
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
