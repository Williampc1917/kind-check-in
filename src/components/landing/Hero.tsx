import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  ArrowRight,
  Clock3,
  Dumbbell,
  Heart,
  Hourglass,
  House,
  MoonStar,
  MoreHorizontal,
} from "lucide-react";

type SwiftCheckInCard = {
  title: string;
  from: string;
  to: string;
  duration: string;
  grace: string;
  icon: LucideIcon;
  accentColor: string;
  chipBackground: string;
  statusLabel?: string;
  isActive?: boolean;
};

type FloatingSwiftCard = SwiftCheckInCard & {
  position: string;
  animationDelay: string;
  rotateClass: string;
};

const desktopFloatingCards: FloatingSwiftCard[] = [
  {
    title: "Gym Session",
    from: "Office",
    to: "Gym",
    duration: "1 hr",
    grace: "10 min grace",
    icon: Dumbbell,
    accentColor: "#7A73C9",
    chipBackground: "rgba(122, 115, 201, 0.18)",
    position: "left-[-2.75rem] top-[10%] xl:left-[-2.25rem]",
    animationDelay: "360ms",
    rotateClass: "rotate-[-7deg]",
  },
  {
    title: "Late Night Commute",
    from: "Office",
    to: "Station",
    duration: "45 min",
    grace: "10 min grace",
    icon: MoonStar,
    accentColor: "#6B84C6",
    chipBackground: "rgba(107, 132, 198, 0.18)",
    position: "left-[-2.1rem] top-[38%] xl:left-[-1.75rem]",
    animationDelay: "480ms",
    rotateClass: "rotate-[4deg]",
  },
  {
    title: "Leaving Work",
    from: "Office",
    to: "Home",
    duration: "45 min",
    grace: "10 min grace",
    icon: House,
    accentColor: "#4FAF7A",
    chipBackground: "rgba(79, 175, 122, 0.18)",
    position: "left-[-2.8rem] bottom-[10%] xl:left-[-2.25rem]",
    animationDelay: "600ms",
    rotateClass: "rotate-[-4deg]",
  },
];

const mobileFloatingCards: SwiftCheckInCard[] = [
  desktopFloatingCards[0],
  desktopFloatingCards[2],
];

const swiftCardStyle = {
  background: "linear-gradient(135deg, #25272C 0%, #202226 100%)",
  boxShadow: "0 12px 22px rgba(0, 0, 0, 0.5)",
};

const ACTIVE_GREEN = "#34C759";

const SwiftCheckInCardPreview = ({ card }: { card: SwiftCheckInCard }) => {
  const Icon = card.icon;
  const iconColor = card.isActive ? ACTIVE_GREEN : card.accentColor;
  const iconChipBackground = card.isActive
    ? "rgba(52, 199, 89, 0.18)"
    : card.chipBackground;

  return (
    <div
      className="rounded-[16px] border border-[#444850] bg-transparent px-3 py-3"
      style={swiftCardStyle}
    >
      <div className="flex items-start gap-[9px]">
        <div
          className="flex h-[31px] w-[31px] shrink-0 items-center justify-center rounded-[10px]"
          style={{ background: iconChipBackground }}
        >
          <Icon
            className="h-[14px] w-[14px] shrink-0"
            style={{ color: iconColor }}
            strokeWidth={2.2}
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-[0.86rem] font-semibold tracking-[-0.02em] text-[rgba(255,255,255,0.9)]">
              {card.title}
            </p>

            {card.isActive ? (
              <span className="rounded-full bg-[rgba(52,199,89,0.16)] px-[7px] py-[3px] text-[11px] font-semibold leading-none text-[#34C759]">
                Active
              </span>
            ) : null}
          </div>

          <div className="mt-1 flex min-w-0 items-center gap-1 text-[12px] text-[rgba(255,255,255,0.62)]">
            <span className="truncate">{card.from}</span>
            <ArrowRight
              className="h-[11px] w-[11px] shrink-0 text-[rgba(255,255,255,0.38)]"
              strokeWidth={2.2}
            />
            <span className="truncate">{card.to}</span>
          </div>

          <div className="mt-1.5 flex min-w-0 items-center gap-1.5 text-[10px] text-[rgba(255,255,255,0.62)]">
            <div className="flex min-w-0 items-center gap-1">
              <Clock3 className="h-[11px] w-[11px] shrink-0" strokeWidth={2.2} />
              <span className="truncate tabular-nums">{card.duration}</span>
            </div>

            <span className="h-[3px] w-[3px] shrink-0 rounded-full bg-[rgba(255,255,255,0.28)]" />

            <div className="flex min-w-0 items-center gap-1">
              <Hourglass className="h-[11px] w-[11px] shrink-0" strokeWidth={2.2} />
              <span className="truncate tabular-nums">{card.grace}</span>
            </div>
          </div>

          {card.statusLabel ? (
            <div className="mt-2 flex items-center gap-1.5 pt-[2px] text-[12px] font-medium text-[#FF9500]">
              <AlertTriangle className="h-3.5 w-3.5 shrink-0" fill="currentColor" />
              <span className="truncate">{card.statusLabel}</span>
            </div>
          ) : null}
        </div>

        <MoreHorizontal className="mt-[2px] h-3 w-3 shrink-0 text-[rgba(255,255,255,0.62)]" />
      </div>
    </div>
  );
};

const FloatingSwiftCards = () => {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 z-20 hidden lg:block">
        {desktopFloatingCards.map(({ position, animationDelay, rotateClass, ...card }) => (
          <div
            key={card.title}
            className={cn("hero-fade-up absolute w-[14.5rem]", position)}
            style={{ animationDelay }}
          >
            <div className={rotateClass}>
              <div className="hero-float">
                <SwiftCheckInCardPreview card={card} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-20 mt-6 flex w-full max-w-[18rem] flex-col gap-3 lg:hidden">
        {mobileFloatingCards.map((card, index) => (
          <div
            key={card.title}
            className="hero-fade-up"
            style={{ animationDelay: `${360 + index * 120}ms` }}
          >
            <SwiftCheckInCardPreview card={card} />
          </div>
        ))}
      </div>
    </>
  );
};

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-surface absolute inset-0" />
        <div className="hero-glow-pulse absolute -left-24 top-[-7rem] h-[20rem] w-[20rem] rounded-full bg-primary/10 blur-3xl sm:h-[24rem] sm:w-[24rem]" />
        <div
          className="hero-glow-pulse absolute right-[-6rem] top-[16%] h-[18rem] w-[18rem] rounded-full bg-primary/12 blur-3xl sm:h-[23rem] sm:w-[23rem]"
          style={{ animationDelay: "900ms" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
      </div>

      <div className="relative flex min-h-[calc(100svh-4rem)] items-center">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:gap-0">
            <div className="mx-auto flex max-w-xl flex-col items-center py-12 text-center lg:mx-0 lg:max-w-[34rem] lg:items-start lg:py-16 lg:pr-10 lg:text-left xl:max-w-[36rem]">
              <h1 className="hero-fade-up max-w-[11ch] text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-foreground sm:text-5xl md:text-6xl lg:text-[4.25rem]">
                Your safety net for everyday moments
              </h1>

              <p
                className="hero-fade-up mt-4 max-w-[34rem] text-base leading-relaxed text-muted-foreground sm:text-lg md:mt-5 md:text-[1.125rem]"
                style={{ animationDelay: "120ms" }}
              >
                Set a check-in before you head out. If you don&apos;t tap
                &ldquo;I&apos;m safe&rdquo; in time, your trusted contacts get
                a&nbsp;heads&#8209;up.
              </p>

              <div
                className="hero-fade-up mt-7 flex w-full max-w-sm flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:flex-wrap lg:mt-8 lg:justify-start lg:gap-4"
                style={{ animationDelay: "250ms" }}
              >
                <Button
                  onClick={() => scrollToSection("waitlist")}
                  size="lg"
                  className="min-w-[12rem] rounded-xl px-8 text-base shadow-[0_16px_32px_-20px_hsl(var(--primary)/0.75)]"
                >
                  Join the waitlist
                </Button>
                <Button
                  onClick={() => scrollToSection("how-it-works")}
                  variant="outline"
                  size="lg"
                  className="min-w-[12rem] rounded-xl border-border/80 bg-background/90 text-base shadow-sm hover:bg-secondary"
                >
                  See the experience
                </Button>
              </div>
            </div>

            <div
              className="hero-fade-up relative mx-auto flex w-full justify-center lg:mx-0 lg:justify-center"
              style={{ animationDelay: "240ms" }}
            >
              <div className="hero-device-stage relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[50rem]">
                <FloatingSwiftCards />

                <div className="relative z-10 ml-auto lg:w-[31rem] lg:translate-x-[-1rem] xl:w-[34rem] xl:translate-x-[-1.5rem]">
                  <img
                    src={`${import.meta.env.BASE_URL}hero/Mockuuups%20Free%20iPhone%20Hand%20Mockup.webp`}
                    alt="MadeIt app preview on a phone held in hand"
                    className="relative w-full object-contain drop-shadow-[0_26px_60px_rgba(15,23,42,0.15)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
