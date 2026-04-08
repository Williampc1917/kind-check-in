import { useEffect, useRef, type ReactNode } from "react";
import createCheckinImage from "@/imgs/final-step1-noshadow-trans.png";
import { cn } from "@/lib/utils";

const StepVideo = ({
  src,
  sizeClassName,
  loop = true,
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

const PrivacyGlyph = () => (
  <div className="relative mt-9 h-28 overflow-hidden rounded-[1.6rem] border border-slate-200/80 bg-[radial-gradient(circle_at_50%_45%,rgba(94,173,164,0.2),rgba(255,255,255,0.78)_58%)] shadow-[0_16px_42px_-34px_rgba(15,23,42,0.36)]">
    <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/80" />
    <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-slate-300" />
    <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950 text-white shadow-[0_18px_38px_-26px_rgba(15,23,42,0.75)]">
      <svg viewBox="0 0 64 64" fill="none" className="h-6 w-6">
        <path
          d="M22 28v-6c0-5.4 4.2-9.5 10-9.5s10 4.1 10 9.5v6"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2.6"
        />
        <rect x="17" y="27" width="30" height="24" rx="8" stroke="currentColor" strokeWidth="2.6" />
      </svg>
    </div>
    <div className="absolute left-8 top-8 h-2 w-2 rounded-full bg-slate-300" />
    <div className="absolute bottom-7 right-10 h-2 w-2 rounded-full bg-slate-300" />
    <div className="absolute right-8 top-5 h-px w-16 rotate-[-24deg] bg-slate-300/80" />
  </div>
);

const GracePeriodGauge = () => (
  <div className="relative mt-9 rounded-[1.6rem] border border-slate-200/80 bg-white/72 p-5 shadow-[0_16px_42px_-34px_rgba(15,23,42,0.36)]">
    <div className="relative flex items-center justify-between">
      <div className="absolute left-7 right-7 top-1/2 h-1 -translate-y-1/2 rounded-full bg-slate-100" />
      <div className="absolute left-[28%] right-[28%] top-1/2 h-1 -translate-y-1/2 rounded-full bg-[hsl(var(--primary))]" />
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white shadow-[0_18px_38px_-26px_rgba(15,23,42,0.75)]">
        Due
      </div>
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary/12 text-primary ring-8 ring-primary/8">
        <svg viewBox="0 0 64 64" fill="none" className="h-8 w-8">
          <circle cx="32" cy="32" r="17" stroke="currentColor" strokeWidth="2.4" />
          <path d="M32 22v11l7 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
        </svg>
      </div>
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-500">
        Alert
      </div>
    </div>
    <div className="mt-5 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
      <span className="h-px w-6 bg-slate-200" />
      <span>buffer zone</span>
      <span className="h-px w-6 bg-slate-200" />
    </div>
  </div>
);

const ContactStack = () => (
  <div className="mt-9 space-y-3">
    {["Maya", "Sam", "Alex"].map((contact, index) => (
      <div
        key={contact}
        className="flex items-center justify-between rounded-[1.25rem] border border-slate-200/80 bg-white/74 px-4 py-3 shadow-[0_16px_42px_-34px_rgba(15,23,42,0.36)]"
        style={{ transform: `translateX(${index * 10}px)` }}
      >
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
            {contact.charAt(0)}
          </span>
          <span className="text-sm font-semibold text-slate-900">{contact}</span>
        </div>
        <span className="text-xs font-medium text-slate-500">SMS</span>
      </div>
    ))}
  </div>
);

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
            A check-in that quietly has your back
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
            Set your plan, keep moving, and let SafeCheck handle the backup if you miss your window.
          </p>
        </div>

        <div className="grid gap-4 md:gap-5 lg:grid-cols-6">
          <BentoTile
            eyebrow="Daily check-ins"
            title="Set the plan before you head out."
            body="Pick a time, add a grace period, and choose who should hear from SafeCheck if you miss it."
            className="min-h-[560px] lg:col-span-4"
            bodyClassName="max-w-xl"
          >
            <div className="relative z-10 mt-8 flex justify-center lg:absolute lg:bottom-0 lg:right-8 lg:mt-0">
              <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(94,173,164,0.16),transparent_68%)]" />
              <img
                src={createCheckinImage}
                alt="Create a check-in screen"
                className="block w-full max-w-[210px] object-contain drop-shadow-[0_30px_50px_rgba(15,23,42,0.16)] sm:max-w-[235px] lg:max-w-[260px]"
              />
            </div>
          </BentoTile>

          <div className="grid gap-4 md:gap-5 lg:col-span-2">
            <BentoTile
              eyebrow="Grace period"
              title="Built-in buffer."
              body="Add extra time for the moments when you are just running late."
              className="min-h-[270px]"
            >
              <GracePeriodGauge />
            </BentoTile>

            <BentoTile
              eyebrow="Private by design"
              title="Your location stays yours."
              body="SafeCheck shares the check-in status, not a live location feed."
              className="min-h-[270px]"
            >
              <PrivacyGlyph />
            </BentoTile>
          </div>

          <BentoTile
            eyebrow="Lock screen"
            title="Your check-in stays close."
            body="See time left, extend it, or mark yourself safe without digging through the app."
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
            title="One tap says you are safe."
            body="When you are done, confirm quickly and the backup plan stops."
            className="min-h-[560px] lg:col-span-2 lg:flex lg:flex-col"
          >
            <div className="relative z-10 mt-8 flex justify-center lg:mt-auto">
              <StepVideo
                src={`${import.meta.env.BASE_URL}mock-movies/step3-web-mov.mov`}
                sizeClassName="max-w-[210px] sm:max-w-[235px] md:max-w-[260px]"
              />
            </div>
          </BentoTile>

          <BentoTile
            eyebrow="Trusted contacts"
            title="No app needed."
            body="Alerts arrive over SMS, so the people you trust can respond right away."
            className="min-h-[440px] lg:col-span-2"
          >
            <ContactStack />
          </BentoTile>

          <BentoTile
            eyebrow="Backup plan"
            title="If you miss it, SafeCheck sends the heads-up."
            body="After your grace period, your trusted contacts get a clear text message so they can check on you."
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
