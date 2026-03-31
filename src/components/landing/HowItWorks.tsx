import { useRef, useEffect, useState } from "react";
import createCheckinImage from "@/imgs/final-step1-noshadow-trans.png";

type StepMedia =
  | { type: "video"; src: string; sizeClassName?: string; loop?: boolean }
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

const StepVideo = ({
  src,
  sizeClassName,
  loop = false,
}: {
  src: string;
  sizeClassName?: string;
  loop?: boolean;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = videoSectionRef.current;
    if (!video || !section) return;

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
  }, []);

  return (
    <div
      ref={videoSectionRef}
      className={`relative w-full ${sizeClassName ?? "max-w-[240px] sm:max-w-[270px] md:max-w-[300px] lg:max-w-[330px]"}`}
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

const AlertMessageMock = ({ label }: { label: string }) => {
  const [showMissedState, setShowMissedState] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const timeoutsRef = useRef<number[]>([]);
  const loopRef = useRef<number | null>(null);

  useEffect(() => {
    const clearTimers = () => {
      timeoutsRef.current.forEach((timeout) => window.clearTimeout(timeout));
      timeoutsRef.current = [];

      if (loopRef.current !== null) {
        window.clearTimeout(loopRef.current);
        loopRef.current = null;
      }
    };

    const runSequence = () => {
      clearTimers();
      setShowMissedState(false);
      setShowTyping(false);
      setShowMessage(false);

      timeoutsRef.current.push(
        window.setTimeout(() => setShowMissedState(true), 300),
        window.setTimeout(() => setShowTyping(true), 1300),
        window.setTimeout(() => setShowTyping(false), 2850),
        window.setTimeout(() => setShowMessage(true), 3050)
      );

      loopRef.current = window.setTimeout(runSequence, 6200);
    };

    runSequence();
    return clearTimers;
  }, []);

  return (
    <div
      className="relative w-full max-w-[290px] sm:max-w-[320px]"
      aria-label={label}
    >
      <div className="rounded-[2rem] bg-[#111827] p-[10px] shadow-[0_24px_50px_-30px_rgba(15,23,42,0.45)]">
        <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,#eef4ff_0%,#f7f9fc_32%,#ffffff_100%)]">
          <div className="relative min-h-[392px] px-4 pb-4 pt-4">
            <div className="mx-auto mb-4 h-1.5 w-20 rounded-full bg-slate-300/70" />

            <div
              className={`rounded-[1.35rem] border border-rose-200/80 bg-white/80 p-3 shadow-[0_16px_30px_-24px_rgba(225,29,72,0.55)] backdrop-blur transition-all duration-500 ${
                showMissedState
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="relative mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                  <span
                    className={`absolute inset-0 rounded-full bg-rose-300/70 transition-opacity duration-300 ${
                      showMissedState ? "animate-ping opacity-60" : "opacity-0"
                    }`}
                  />
                  <span className="relative text-base font-semibold">!</span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-slate-900">Check-in missed</p>
                    <span className="rounded-full bg-rose-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-rose-700">
                      Sending
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Grace didn&apos;t respond during her 15 minute grace period.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 overflow-hidden rounded-[1.6rem] border border-slate-200/80 bg-white/92 shadow-[0_18px_36px_-28px_rgba(15,23,42,0.38)]">
              <div className="border-b border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] px-4 pb-3 pt-3">
                <div className="flex items-center justify-between text-[#3b82f6]">
                  <span className="text-base leading-none">‹</span>
                  <div className="flex flex-col items-center">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-slate-700">
                      M
                    </div>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Trusted contact
                    </p>
                    <p className="text-sm font-semibold text-slate-900">Maya</p>
                  </div>
                  <span className="text-sm leading-none">i</span>
                </div>
              </div>

              <div className="flex min-h-[218px] flex-col justify-end gap-3 bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] px-3 pb-3 pt-6">
                <div
                  className={`max-w-[78%] rounded-[1.15rem] bg-slate-200/95 px-3 py-2.5 text-left text-[13px] leading-5 text-slate-800 shadow-[0_10px_24px_-18px_rgba(15,23,42,0.4)] transition-all duration-500 ${
                    showTyping
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-2 opacity-0"
                  }`}
                >
                  <div className="flex items-center gap-1">
                    {[0, 1, 2].map((dot) => (
                      <span
                        key={dot}
                        className="h-2 w-2 animate-bounce rounded-full bg-slate-400"
                        style={{ animationDelay: `${dot * 0.14}s`, animationDuration: "0.9s" }}
                      />
                    ))}
                  </div>
                </div>

                <div
                  className={`max-w-[84%] rounded-[1.35rem] bg-[#e9ecef] px-3.5 py-3 text-left text-[13px] leading-5 text-slate-900 shadow-[0_14px_28px_-20px_rgba(15,23,42,0.35)] transition-all duration-500 ${
                    showMessage
                      ? "translate-y-0 scale-100 opacity-100"
                      : "translate-y-4 scale-[0.96] opacity-0"
                  }`}
                >
                  Kind Check-In: Grace missed her 6:30 PM check-in. Please reach out and make sure she&apos;s okay.
                </div>

                <div
                  className={`self-start rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-500 transition-all duration-500 ${
                    showMessage ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                  }`}
                >
                  Last update: Heading home
                </div>
              </div>
            </div>

            <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-slate-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
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
        src: `${import.meta.env.BASE_URL}mock-movies/step2-final-pls.mov`,
      },
      mediaSide: "right",
    },
    {
      number: 3,
      title: "Check in with one tap",
      description: "When your timer ends, confirm you're safe from your phone in seconds.",
      media: {
        type: "video",
        src: `${import.meta.env.BASE_URL}mock-movies/step3-web-mov.mov`,
      },
      mediaSide: "left",
    },
    {
      number: 4,
      title: "Missed check-ins trigger your backup plan",
      description: "If you don't check in, trusted contacts get your status alert based on your escalation settings.",
      media: {
        type: "video",
        src: `${import.meta.env.BASE_URL}mock-movies/step4-message-web-final-trans.mov`,
        sizeClassName: "max-w-[220px] sm:max-w-[240px] md:max-w-[260px] lg:max-w-[280px]",
        loop: false,
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
        <div
          className="w-full max-w-[220px] sm:max-w-[240px] md:max-w-[260px] lg:max-w-[280px]"
          aria-label={label}
        >
          <img
            src={createCheckinImage}
            alt="Create a check-in screen"
            className="block h-auto w-full"
          />
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

    return <AlertMessageMock label={label} />;
  };

  const renderMedia = (step: Step) => {
    if (step.media.type === "video") {
      return (
        <StepVideo
          src={step.media.src}
          sizeClassName={step.media.sizeClassName}
          loop={step.media.loop}
        />
      );
    }

    return renderMockPhone(step.media.variant, step.media.label);
  };

  return (
    <section
      id="how-it-works"
      className="relative z-10 overflow-hidden bg-[linear-gradient(180deg,hsl(var(--background-secondary))_0%,hsl(var(--background))_22%,hsl(var(--background))_100%)] py-16 md:py-24 lg:-mt-24 lg:pt-[9rem] xl:-mt-28 xl:pt-[10rem]"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
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

        <div className="relative">
          <div className="pointer-events-none absolute bottom-0 left-7 top-0 hidden w-px bg-[linear-gradient(180deg,transparent_0%,rgba(148,163,184,0.5)_8%,rgba(148,163,184,0.5)_92%,transparent_100%)] md:block lg:left-1/2 lg:-translate-x-px" />
          {steps.map((step) => {
            const mediaOnLeft = step.mediaSide === "left";

            return (
              <article
                key={step.number}
                className="relative grid gap-10 border-t border-slate-200/70 py-12 first:border-t-0 first:pt-0 md:grid-cols-[minmax(0,1fr)_minmax(300px,360px)] md:items-center md:gap-12 md:py-16 lg:grid-cols-2 lg:gap-20"
              >
                <div className="absolute left-0 top-12 flex items-center gap-4 md:left-7 md:-translate-x-1/2 lg:left-1/2">
                  <div className="h-px w-8 bg-slate-300 lg:w-12" />
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-300/80 bg-white/90 text-sm font-semibold tracking-[0.24em] text-slate-700 shadow-[0_10px_30px_-24px_rgba(15,23,42,0.4)] backdrop-blur">
                    {String(step.number).padStart(2, "0")}
                  </div>
                </div>

                <div
                  className={`relative max-w-xl pt-20 md:pt-0 ${mediaOnLeft ? "lg:col-start-2" : ""}`}
                >
                  <h3 className="max-w-[12ch] text-3xl font-semibold leading-[1.03] tracking-[-0.045em] text-slate-900 md:text-[2.7rem] lg:text-[3.2rem]">
                    {step.title}
                  </h3>
                  <p className="mt-5 max-w-[34ch] text-base leading-7 text-slate-600 md:text-[1.1rem] md:leading-8">
                    {step.description}
                  </p>
                  <div className="mt-8 h-px w-24 bg-slate-300/80" />
                </div>

                <div
                  className={`relative flex justify-center md:mt-0 ${
                    mediaOnLeft ? "lg:col-start-1 lg:row-start-1 lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  <div className="pointer-events-none absolute inset-0 -z-10 hidden bg-[radial-gradient(circle_at_center,rgba(148,163,184,0.14),transparent_68%)] lg:block" />
                  {renderMedia(step)}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
