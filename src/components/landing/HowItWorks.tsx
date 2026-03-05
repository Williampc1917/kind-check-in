import { useRef, useEffect } from "react";

type StepMedia =
  | { type: "video"; src: string }
  | {
      type: "mock";
      variant: "create" | "safe" | "alert";
      label: string;
    };

type Step = {
  number: number;
  title: string;
  description: string;
  media: StepMedia;
  mediaSide: "left" | "right";
};

const HowItWorks = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = videoSectionRef.current;
    if (!video || !section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const steps: Step[] = [
    {
      number: 1,
      title: "Create a check-in",
      description: "Set your duration, optional grace period, and choose your trusted contacts.",
      media: {
        type: "mock",
        variant: "create",
        label: "Create check-in mock",
      },
      mediaSide: "left",
    },
    {
      number: 2,
      title: "Always there, never in the way",
      description: "Start your check-in and go about your day. When you're ready, everything you need is waiting on your lock screen.",
      media: {
        type: "video",
        src: "/mock-movies/final-closeup-mock-live.mov",
      },
      mediaSide: "right",
    },
    {
      number: 3,
      title: "Check in with one tap",
      description: "When your timer ends, confirm you're safe from your phone in seconds.",
      media: {
        type: "mock",
        variant: "safe",
        label: "I'm safe tap mock",
      },
      mediaSide: "left",
    },
    {
      number: 4,
      title: "Missed check-ins trigger your backup plan",
      description: "If you don't check in, trusted contacts get your status alert based on your escalation settings.",
      media: {
        type: "mock",
        variant: "alert",
        label: "Escalation alert mock",
      },
      mediaSide: "right",
    },
  ];

  const renderMockPhone = (variant: "create" | "safe" | "alert", label: string) => {
    const sharedFrame =
      "relative w-full max-w-[290px] sm:max-w-[320px] rounded-[2rem] bg-[#111827] p-[10px] shadow-[0_24px_50px_-30px_rgba(15,23,42,0.45)]";
    const sharedScreen =
      "overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(160deg,#f9fafb_0%,#eef2f7_100%)]";

    if (variant === "create") {
      return (
        <div className={sharedFrame} aria-label={label}>
          <div className={sharedScreen}>
            <div className="px-4 pb-4 pt-5">
              <div className="mb-4 h-5 w-24 rounded-full bg-slate-200" />
              <div className="rounded-[1.35rem] bg-white/95 p-4 shadow-[0_18px_30px_-24px_rgba(15,23,42,0.35)]">
                <div className="mb-3 text-sm font-semibold text-slate-900">Tonight&apos;s check-in</div>
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-2.5">
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">Duration</span>
                    <span className="text-sm font-semibold text-slate-900">45 min</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-2.5">
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">Grace</span>
                    <span className="text-sm font-semibold text-slate-900">10 min</span>
                  </div>
                  <div className="rounded-2xl bg-slate-50 px-3 py-3">
                    <div className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">Trusted contacts</div>
                    <div className="flex gap-2">
                      <div className="h-8 w-8 rounded-full bg-emerald-200" />
                      <div className="h-8 w-8 rounded-full bg-amber-200" />
                      <div className="h-8 w-8 rounded-full bg-sky-200" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 rounded-full bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white">
                  Start check-in
                </div>
              </div>
              <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-slate-300" />
            </div>
          </div>
        </div>
      );
    }

    if (variant === "safe") {
      return (
        <div className={sharedFrame} aria-label={label}>
          <div className={sharedScreen}>
            <div className="relative min-h-[355px] bg-[radial-gradient(circle_at_top_left,#dbeafe_0%,#bfdbfe_24%,#dfe8f7_55%,#eef2f7_100%)] px-3 pb-4 pt-5">
              <div className="mx-auto mb-5 h-1.5 w-20 rounded-full bg-white/70" />
              <div className="mt-28 rounded-[1.5rem] bg-[#0f172a]/92 p-4 text-white shadow-[0_20px_40px_-24px_rgba(15,23,42,0.8)] backdrop-blur">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="mb-1 text-xs uppercase tracking-[0.18em] text-emerald-300">Check-in</div>
                    <div className="text-lg font-semibold">10 min left</div>
                  </div>
                  <div className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white">
                    I&apos;m safe
                  </div>
                </div>
                <div className="mt-3 text-sm text-slate-300">Tap once when you&apos;re done.</div>
                <div className="mt-4 h-1.5 rounded-full bg-white/15">
                  <div className="h-full w-1/3 rounded-full bg-emerald-400" />
                </div>
              </div>
              <div className="mx-auto mt-8 h-1.5 w-24 rounded-full bg-slate-300/80" />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className={sharedFrame} aria-label={label}>
        <div className={sharedScreen}>
          <div className="px-4 pb-4 pt-5">
            <div className="mb-4 h-5 w-28 rounded-full bg-slate-200" />
            <div className="rounded-[1.5rem] border border-rose-100 bg-white/95 p-4 shadow-[0_18px_30px_-24px_rgba(15,23,42,0.35)]">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-rose-600">!</div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Grace period missed</div>
                  <div className="text-xs text-slate-500">Escalation ready</div>
                </div>
              </div>
              <div className="rounded-2xl bg-rose-50 px-3 py-3 text-sm text-rose-900">
                Grace didn&apos;t check in. Notify Maya and Alex with her last status?
              </div>
              <div className="mt-4 space-y-2">
                <div className="rounded-full bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white">
                  Send alerts
                </div>
                <div className="rounded-full border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-700">
                  Wait 5 more minutes
                </div>
              </div>
            </div>
            <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-slate-300" />
          </div>
        </div>
      </div>
    );
  };

  const renderMedia = (step: Step) => {
    if (step.media.type === "video") {
      return (
        <div
          ref={videoSectionRef}
          className="relative w-full max-w-[300px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[420px]"
        >
          <div className="absolute inset-x-[12%] bottom-[10%] h-20 rounded-full bg-slate-900/12 blur-3xl" />
          <video
            ref={videoRef}
            src={step.media.src}
            muted
            loop
            playsInline
            className="relative block w-full"
          />
        </div>
      );
    }

    return renderMockPhone(step.media.variant, step.media.label);
  };

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-4xl text-center md:mb-20">
          <div className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-500">
            How it works
          </div>
          <h2 className="mx-auto mb-4 max-w-[14ch] text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-slate-900 md:text-5xl lg:text-[3.5rem]">
            A simple check-in, backed by a plan
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
            Start a timer, go about your day, and confirm when you&apos;re safe. If you don&apos;t, your backup plan takes over.
          </p>
        </div>

        <div className="space-y-10 md:space-y-14">
          {steps.map((step) => {
            const mediaOnLeft = step.mediaSide === "left";

            return (
              <div
                key={step.number}
                className="relative isolate grid overflow-hidden rounded-[2rem] bg-[#f6f7f8] px-6 py-8 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.28)] md:min-h-[420px] md:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] md:items-center md:gap-8 md:px-10 md:py-10 lg:min-h-[460px] lg:grid-cols-[minmax(0,1fr)_minmax(360px,460px)] lg:px-12"
              >
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/40 to-transparent" />
                </div>

                <div
                  className={`relative z-10 max-w-lg self-center ${mediaOnLeft ? "md:col-start-2" : ""}`}
                >
                  <div className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Step {step.number}
                  </div>
                  <h3 className="mb-4 max-w-[12ch] text-3xl font-semibold leading-[1.03] tracking-[-0.04em] text-slate-900 md:text-[2.75rem] lg:text-[3rem]">
                    {step.title}
                  </h3>
                  <p className="max-w-[32ch] text-base leading-7 text-slate-600 md:text-[1.125rem] md:leading-8">
                    {step.description}
                  </p>
                </div>

                <div
                  className={`relative z-10 mt-8 flex justify-center md:mt-0 ${
                    mediaOnLeft ? "md:col-start-1 md:row-start-1 md:justify-start" : "md:justify-end md:self-start"
                  }`}
                >
                  {renderMedia(step)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
