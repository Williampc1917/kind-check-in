import { useEffect, useRef, type ReactNode } from "react";
import createCheckinImage from "@/imgs/final-step1-noshadow-trans.png";
import { cn } from "@/lib/utils";

const StepVideo = ({
  src,
  sizeClassName,
  loop = true,
  playbackRate = 1,
}: {
  src: string;
  sizeClassName?: string;
  loop?: boolean;
  playbackRate?: number;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = videoSectionRef.current;
    if (!video || !section) return;

    video.playbackRate = playbackRate;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => {
            // Ignore autoplay failures so the rest of the page stays responsive.
          });
        } else {
          video.pause();
          video.currentTime = 0;
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [playbackRate]);

  return (
    <div
      ref={videoSectionRef}
      className={cn(
        "relative w-full",
        sizeClassName ?? "max-w-[230px] sm:max-w-[260px] md:max-w-[290px]"
      )}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop={loop}
        playsInline
        preload="metadata"
        className="relative block w-full"
      />
    </div>
  );
};

const BentoTile = ({
  eyebrow,
  title,
  body,
  children,
  className,
  bodyClassName,
}: {
  eyebrow: string;
  title: string;
  body: string;
  children?: ReactNode;
  className?: string;
  bodyClassName?: string;
}) => (
  <article
    className={cn(
      "group relative isolate overflow-hidden rounded-[2rem] border border-white/80 bg-white/78 p-6 shadow-[0_28px_70px_-46px_rgba(15,23,42,0.32)] backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:bg-white sm:p-8",
      className
    )}
  >
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/95" />
    <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl transition duration-700 group-hover:scale-110 group-hover:bg-primary/15" />
    <div className={cn("relative z-10", bodyClassName)}>
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-slate-500">
        {eyebrow}
      </p>
      <h3 className="mt-3 max-w-[14ch] text-2xl font-semibold leading-[1.04] tracking-[-0.04em] text-slate-950 sm:text-3xl">
        {title}
      </h3>
      <p className="mt-3 max-w-[32ch] text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
        {body}
      </p>
    </div>
    {children}
  </article>
);


// ── Previous clock version — swap <GracePeriodGauge /> back to this if needed ──
const GracePeriodGaugeClock = () => {
  const toRad = (clockDeg: number) => (clockDeg - 90) * (Math.PI / 180);
  const cx = 100, cy = 100;
  const arcR = 66;

  const pt = (deg: number, r: number) => ({
    x: cx + r * Math.cos(toRad(deg)),
    y: cy + r * Math.sin(toRad(deg)),
  });

  // Hour hand at 8:00 (240° from 12)
  const hour = pt(240, 42);
  // Minute hand tip at 12 (0°), animated to 3 (90°)
  const min = pt(0, 60);
  // Grace arc endpoints
  const arcStart = pt(0, arcR);   // 12 o'clock
  const arcEnd   = pt(90, arcR);  // 3 o'clock (+15 min)

  return (
    <div className="mt-6 flex flex-col items-center gap-5">
      <style>{`
        @keyframes graceMinute {
          0%, 8%   { transform: rotate(0deg); }
          68%, 86% { transform: rotate(90deg); }
          100%     { transform: rotate(0deg); }
        }
        @keyframes graceArcFill {
          0%, 8%   { stroke-dashoffset: 104; }
          68%, 86% { stroke-dashoffset: 0; }
          100%     { stroke-dashoffset: 104; }
        }
      `}</style>

      <svg
        viewBox="0 0 200 200"
        className="h-[148px] w-[148px] drop-shadow-[0_10px_32px_rgba(15,23,42,0.13)]"
      >
        {/* Face */}
        <circle cx={cx} cy={cy} r={82} fill="white" />
        <circle cx={cx} cy={cy} r={82} fill="none" stroke="rgba(15,23,42,0.07)" strokeWidth="1.5" />

        {/* Subtle tick marks */}
        {Array.from({ length: 12 }, (_, i) => {
          const isCardinal = i % 3 === 0;
          const outer = pt(i * 30, 80);
          const inner = pt(i * 30, isCardinal ? 71 : 75);
          return (
            <line
              key={i}
              x1={outer.x} y1={outer.y}
              x2={inner.x} y2={inner.y}
              stroke={isCardinal ? "rgba(15,23,42,0.18)" : "rgba(15,23,42,0.09)"}
              strokeWidth={isCardinal ? 2 : 1.5}
              strokeLinecap="round"
            />
          );
        })}

        {/* Grace arc track (faint) */}
        <path
          d={`M ${arcStart.x} ${arcStart.y} A ${arcR} ${arcR} 0 0 1 ${arcEnd.x} ${arcEnd.y}`}
          fill="none"
          stroke="hsl(var(--primary) / 0.15)"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Grace arc fill — animates with the hand */}
        <path
          d={`M ${arcStart.x} ${arcStart.y} A ${arcR} ${arcR} 0 0 1 ${arcEnd.x} ${arcEnd.y}`}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="104"
          strokeDashoffset="104"
          style={{ animation: "graceArcFill 5.5s cubic-bezier(0.33,1,0.68,1) infinite" }}
        />

        {/* Arc endpoint marker — 3 o'clock (alert threshold) */}
        <circle cx={arcEnd.x} cy={arcEnd.y} r="5" fill="hsl(var(--primary) / 0.3)" />

        {/* Arc start marker — 12 o'clock (due time) */}
        <circle cx={arcStart.x} cy={arcStart.y} r="5" fill="hsl(var(--primary))" />

        {/* Hour hand */}
        <line
          x1={cx} y1={cy} x2={hour.x} y2={hour.y}
          stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round"
        />

        {/* Minute hand (animated) */}
        <line
          x1={cx} y1={cy} x2={min.x} y2={min.y}
          stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round"
          style={{
            transformOrigin: `${cx}px ${cy}px`,
            animation: "graceMinute 5.5s cubic-bezier(0.33,1,0.68,1) infinite",
          }}
        />

        {/* Center cap */}
        <circle cx={cx} cy={cy} r="4.5" fill="#0f172a" />
      </svg>

      {/* Legend */}
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-primary/70" />
        <span className="text-[0.7rem] font-semibold tracking-wide text-slate-500">
          15 min grace window
        </span>
      </div>
    </div>
  );
};
// ── End of clock version ────────────────────────────────────────────────────

const GracePeriodGauge = () => {
  const R = 54;
  const CIRC = +(2 * Math.PI * R).toFixed(1);
  // Cycle: 13s
  // 0–28%  : Act 1 — Due phase: slate ring drains, "Due in" timer 5:00→0:00
  // 28–34% : Transition — ring resets to full teal (quick refill)
  // 34–78% : Act 2 — Grace phase: teal ring drains, "Grace period" 15:00→0:00
  // 78–93% : Act 3 — Alert phase: bell fires, "Alert sent"
  // 93–100%: reset
  const DUR = "13s";

  return (
    <div className="mt-6 flex flex-col items-center gap-4">
      <style>{`
        /* ── Ring: drain due (0→28%), reset & drain grace (34→78%) ── */
        @keyframes gpDrain {
          0%   { stroke-dashoffset: 0; }
          28%  { stroke-dashoffset: ${CIRC}; }
          34%  { stroke-dashoffset: 0; }
          78%  { stroke-dashoffset: ${CIRC}; }
          100% { stroke-dashoffset: ${CIRC}; }
        }
        /* ── Ring color: slate for due → teal for grace → dim ── */
        @keyframes gpColor {
          0%,  26% { stroke: #64748b; }
          30%      { stroke: hsl(var(--primary) / 0.5); }
          35%      { stroke: hsl(var(--primary)); }
          76%      { stroke: hsl(var(--primary)); }
          80%      { stroke: hsl(var(--primary) / 0.2); }
          100%     { stroke: hsl(var(--primary) / 0.2); }
        }

        /* ── Due timer: minutes 5→0 over 0–28% ── */
        @keyframes gpDueMin {
          0%        { content: "5"; }
          6%        { content: "4"; }
          11%       { content: "3"; }
          17%       { content: "2"; }
          22%       { content: "1"; }
          27%, 100% { content: "0"; }
        }
        .gpDueMin::after { content: "5"; animation: gpDueMin ${DUR} steps(1) infinite; }

        /* ── Grace timer: minutes 15→00 over 34–78% ── */
        @keyframes gpGraceMin {
          0%,  33% { content: "15"; }
          41%      { content: "12"; }
          49%      { content: "09"; }
          56%      { content: "06"; }
          64%      { content: "03"; }
          71%, 100%{ content: "00"; }
        }
        .gpGraceMin::after { content: "15"; animation: gpGraceMin ${DUR} steps(1) infinite; }

        /* ── Due timer block visibility ── */
        @keyframes gpDueVis {
          0%,  26% { opacity: 1; }
          31%, 100%{ opacity: 0; }
        }
        /* ── Grace timer block visibility ── */
        @keyframes gpGraceVis {
          0%,  33% { opacity: 0; }
          37%      { opacity: 1; }
          76%      { opacity: 1; }
          80%, 100%{ opacity: 0; }
        }
        /* ── Alert block visibility ── */
        @keyframes gpAlertVis {
          0%,  77% { opacity: 0; }
          82%      { opacity: 1; }
          91%      { opacity: 1; }
          96%, 100%{ opacity: 0; }
        }

        /* ── Bell shake at Act 3 ── */
        @keyframes gpBell {
          0%,  77% { transform: rotate(0deg); }
          81%      { transform: rotate(-22deg); }
          84%      { transform: rotate(18deg); }
          87%      { transform: rotate(-10deg); }
          90%      { transform: rotate(4deg); }
          93%      { transform: rotate(0deg); }
          100%     { transform: rotate(0deg); }
        }

        /* ── Flash pulse at transition ── */
        @keyframes gpFlash {
          0%,  27% { opacity: 0; transform: scale(0.95); }
          30%      { opacity: 1; transform: scale(1.04); }
          34%, 100%{ opacity: 0; transform: scale(1); }
        }

        /* ── 3-dot progress strip ── */
        @keyframes gpD1 { 0%,28%{opacity:1} 29%,100%{opacity:0.25} }
        @keyframes gpD2 { 0%,34%{opacity:0.25} 35%,78%{opacity:1} 79%,100%{opacity:0.25} }
        @keyframes gpD3 { 0%,78%{opacity:0.25} 79%,100%{opacity:1} }
        @keyframes gpLine1 {
          0%,  28% { transform: scaleX(0); }
          35%, 100%{ transform: scaleX(1); }
        }
        @keyframes gpLine2 {
          0%,  78% { transform: scaleX(0); }
          90%, 100%{ transform: scaleX(1); }
        }
      `}</style>

      {/* ── Ring ── */}
      <div className="relative">
        <svg viewBox="0 0 128 128" className="h-[128px] w-[128px] -rotate-90">
          {/* Track */}
          <circle cx="64" cy="64" r={R} fill="none" stroke="hsl(var(--primary) / 0.1)" strokeWidth="7" />
          {/* Animated arc */}
          <circle
            cx="64" cy="64" r={R}
            fill="none"
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={CIRC}
            strokeDashoffset="0"
            style={{
              animation: `gpDrain ${DUR} cubic-bezier(0.4,0,0.2,1) infinite, gpColor ${DUR} ease-in-out infinite`,
            }}
          />
        </svg>

        {/* Transition flash ring */}
        <div
          className="pointer-events-none absolute inset-0 rounded-full bg-primary/25 blur-md"
          style={{ opacity: 0, animation: `gpFlash ${DUR} ease-out infinite` }}
        />

        {/* Centre content */}
        <div className="absolute inset-0 flex items-center justify-center">

          {/* Act 1 — Due timer */}
          <div
            className="flex flex-col items-center gap-0.5"
            style={{ animation: `gpDueVis ${DUR} ease-in-out infinite` }}
          >
            <div className="flex items-baseline gap-px tabular-nums">
              <span className="gpDueMin text-[1.5rem] font-bold leading-none tracking-[-0.04em] text-slate-700" />
              <span className="text-[1.1rem] font-semibold text-slate-300">:00</span>
            </div>
            <span className="text-[0.52rem] font-semibold uppercase tracking-[0.16em] text-slate-400">
              Due in
            </span>
          </div>

          {/* Act 2 — Grace timer */}
          <div
            className="absolute flex flex-col items-center gap-0.5"
            style={{ opacity: 0, animation: `gpGraceVis ${DUR} ease-in-out infinite` }}
          >
            <div className="flex items-baseline gap-px tabular-nums">
              <span className="gpGraceMin text-[1.5rem] font-bold leading-none tracking-[-0.04em] text-slate-900" />
              <span className="text-[1.1rem] font-semibold text-slate-300">:00</span>
            </div>
            <span className="text-[0.52rem] font-semibold uppercase tracking-[0.16em] text-primary">
              Grace period
            </span>
          </div>

          {/* Act 3 — Alert sent */}
          <div
            className="absolute flex flex-col items-center gap-0.5"
            style={{ opacity: 0, animation: `gpAlertVis ${DUR} ease-in-out infinite` }}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ animation: `gpBell ${DUR} ease-in-out infinite` }}
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            <span className="text-[0.52rem] font-semibold uppercase tracking-[0.16em] text-primary">
              Alert sent
            </span>
          </div>

        </div>
      </div>

      {/* ── 3-dot progress strip ── */}
      <div className="flex items-center">
        {/* Dot 1 — Due */}
        <div className="flex flex-col items-center gap-1" style={{ animation: `gpD1 ${DUR} steps(1) infinite` }}>
          <div className="h-2 w-2 rounded-full bg-slate-600" />
          <span className="text-[0.55rem] font-semibold text-slate-500">Due</span>
        </div>

        {/* Line 1 */}
        <div className="relative mx-2 h-px w-10 overflow-hidden bg-slate-200">
          <div className="absolute inset-0 origin-left bg-slate-500" style={{ animation: `gpLine1 ${DUR} ease-in-out infinite` }} />
        </div>

        {/* Dot 2 — Grace */}
        <div className="flex flex-col items-center gap-1" style={{ animation: `gpD2 ${DUR} steps(1) infinite` }}>
          <div className="h-2 w-2 rounded-full bg-primary" />
          <span className="text-[0.55rem] font-semibold text-primary">Grace</span>
        </div>

        {/* Line 2 */}
        <div className="relative mx-2 h-px w-10 overflow-hidden bg-primary/15">
          <div className="absolute inset-0 origin-left bg-primary/60" style={{ animation: `gpLine2 ${DUR} ease-in-out infinite` }} />
        </div>

        {/* Dot 3 — Alert */}
        <div className="flex flex-col items-center gap-1" style={{ animation: `gpD3 ${DUR} steps(1) infinite` }}>
          <div className="h-2 w-2 rounded-full bg-primary" />
          <span className="text-[0.55rem] font-semibold text-primary">Alert</span>
        </div>
      </div>
    </div>
  );
};

const ContactStack = () => {
  const contacts = [
    { firstName: "Alex",   lastName: "Rivera",  phone: "(415) 555-0182", fromColor: "#6B9BF2", toColor: "#4A7AE8" },
    { firstName: "Maya",   lastName: "Johnson", phone: "(628) 555-0034", fromColor: "#C96EF5", toColor: "#A94FD8" },
    { firstName: "Sam",    lastName: "Chen",    phone: "(510) 555-0217", fromColor: "#FFB340", toColor: "#F59500" },
    { firstName: "Jordan", lastName: "Kim",     phone: "(650) 555-0091", fromColor: "#4CD964", toColor: "#2DB84B" },
  ];

  return (
    <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-[#D1D1D6] bg-white shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
      {/* Search bar */}
      <div className="border-b border-[#E5E5EA] px-3 py-3">
        <div className="flex items-center gap-1.5 rounded-[10px] bg-[#F2F2F7] px-3 py-[7px]">
          <svg className="h-3.5 w-3.5 shrink-0 text-[#8E8E93]" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <circle cx="8.5" cy="8.5" r="5.5" /><path d="m15 15-3-3" />
          </svg>
          <span className="text-[0.82rem] text-[#8E8E93]">Search</span>
        </div>
      </div>

      {/* Contact rows */}
      {contacts.map((c, i) => (
        <div key={c.firstName} className="flex items-center pl-4 pr-3">
          {/* Avatar */}
          <div
            className="mr-3 flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full"
            style={{ background: `linear-gradient(160deg, ${c.fromColor} 0%, ${c.toColor} 100%)` }}
          >
            <span className="text-[0.78rem] font-semibold text-white">
              {c.firstName[0]}{c.lastName[0]}
            </span>
          </div>

          {/* Name + phone — inset separator */}
          <div className={cn(
            "flex flex-1 items-center gap-2 py-[10px]",
            i < contacts.length - 1 && "border-b border-[#E5E5EA]"
          )}>
            <div className="flex flex-1 flex-col justify-center">
              <span className="text-[0.9rem] leading-tight text-[#1C1C1E]">
                {c.firstName} <span className="font-medium">{c.lastName}</span>
              </span>
              <span className="mt-[2px] text-[0.72rem] text-[#8E8E93]">{c.phone}</span>
            </div>
            {/* SMS badge */}
            <div className="flex shrink-0 items-center gap-1 rounded-full bg-primary/8 px-2 py-1">
              <svg className="h-3 w-3 text-primary/70" viewBox="0 0 16 16" fill="currentColor">
                <path d="M2 2h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5l-3 2V3a1 1 0 0 1 1-1z" />
              </svg>
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-primary/70">SMS</span>
            </div>
          </div>
        </div>
      ))}

      {/* Footer */}
      <div className="flex items-center justify-center gap-1.5 border-t border-[#E5E5EA] px-4 py-2.5">
        <svg className="h-3 w-3 shrink-0 text-slate-400" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2H3a1 1 0 0 0-1 1v9l3-2h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
        </svg>
        <span className="text-[0.68rem] font-medium text-slate-400">No account or app required</span>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="relative z-10 overflow-hidden bg-[linear-gradient(180deg,hsl(var(--background-secondary))_0%,hsl(var(--background))_24%,hsl(var(--background))_100%)] py-16 md:py-24 lg:-mt-24 lg:pt-[9rem] xl:-mt-28 xl:pt-[10rem]"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
          <div className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-500">
            Product experience
          </div>
          <h2 className="mx-auto mb-4 max-w-[15ch] text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-slate-900 md:text-5xl lg:text-[3.5rem]">
            A simple plan for getting there.
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
            Set your plan, keep moving, and let MadeIt handle the backup if you miss your window.
          </p>
        </div>

        <div className="grid gap-4 md:gap-5 lg:grid-cols-6">
          <BentoTile
            eyebrow="Daily check-ins"
            title="Set the plan."
            body="Pick a time, add a grace period, and choose who should hear from MadeIt if you miss it."
            className="min-h-[440px] sm:min-h-[500px] lg:col-span-4 lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(220px,0.72fr)] lg:items-center lg:gap-8 xl:grid-cols-[minmax(0,0.92fr)_minmax(240px,0.68fr)]"
            bodyClassName="max-w-md lg:py-10"
          >
            <div className="relative z-10 mt-8 flex min-h-[255px] items-end justify-center lg:mt-0 lg:min-h-[410px] lg:justify-end">
              <div className="pointer-events-none absolute inset-x-4 bottom-0 -z-10 h-[82%] rounded-[2rem] bg-[radial-gradient(circle_at_55%_54%,rgba(94,173,164,0.2),transparent_62%)]" />
              <div className="pointer-events-none absolute bottom-3 h-12 w-52 rounded-full bg-slate-900/10 blur-2xl" />
              <img
                src={createCheckinImage}
                alt="Create a check-in screen"
                className="block w-full max-w-[205px] object-contain drop-shadow-[0_30px_50px_rgba(15,23,42,0.16)] sm:max-w-[235px] lg:max-w-[285px]"
              />
            </div>
          </BentoTile>

          <div className="grid gap-4 md:gap-5 lg:col-span-2">
            <BentoTile
              eyebrow="Grace period"
              title="Built-in buffer."
              body="Add extra time for the moments when you are safe, but just running late."
              className="min-h-[270px]"
            >
              <GracePeriodGauge />
            </BentoTile>

            <BentoTile
              eyebrow="Private by design"
              title="Message, not map"
              body="Contacts get a simple text alert. No coordinates, no route history, no live tracking."
              className="min-h-[270px]"
            />

          </div>

          <BentoTile
            eyebrow="Lock screen"
            title="Keep it close"
            body="See time left, extend your window, or mark yourself safe without opening the app."
            className="min-h-[560px] lg:col-span-2 lg:flex lg:flex-col"
          >
            <div className="relative z-10 mt-8 flex justify-center lg:mt-auto">
              <StepVideo
                src={`${import.meta.env.BASE_URL}mock-movies/step2-final-pls.mov`}
                sizeClassName="max-w-[210px] sm:max-w-[235px] md:max-w-[260px]"
              />
            </div>
          </BentoTile>

          <BentoTile
            eyebrow="One tap safe"
            title="Done in one tap"
            body="When you are safe, tap once to check in and stop the backup plan."
            className="min-h-[560px] lg:col-span-2 lg:flex lg:flex-col"
          >
            <div className="relative z-10 mt-8 flex justify-center lg:mt-auto">
              <StepVideo
                src={`${import.meta.env.BASE_URL}mock-movies/step3-web-mov.mov`}
                sizeClassName="max-w-[210px] sm:max-w-[235px] md:max-w-[260px]"
                playbackRate={0.85}
              />
            </div>
          </BentoTile>

          <BentoTile
            eyebrow="Trusted contacts"
            title="No app needed."
            body="Alerts arrive by SMS, so trusted contacts can respond without downloading MadeIt."
            className="min-h-[440px] lg:col-span-2"
          >
            <ContactStack />
          </BentoTile>

          <BentoTile
            eyebrow="Backup plan"
            title="Missed check-in?"
            body="After your grace period, MadeIt sends a clear text alert to the contacts you chose."
            className="min-h-[500px] lg:col-span-6 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(260px,360px)] lg:items-center lg:gap-12"
            bodyClassName="max-w-xl"
          >
            <div className="relative z-10 mt-8 flex justify-center lg:mt-0">
              <StepVideo
                src={`${import.meta.env.BASE_URL}mock-movies/step4-message-web-final-trans.mov`}
                sizeClassName="max-w-[210px] sm:max-w-[235px] md:max-w-[260px]"
              />
            </div>
          </BentoTile>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
