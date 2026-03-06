import { Button } from "@/components/ui/button";
import { Shield, Clock, Bell } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-background">
      {/* Floating decorative icons */}
      <div
        className="hero-float absolute left-[5%] top-20 hidden h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary xl:flex"
        style={{ animationDuration: "6s" }}
      >
        <Shield className="h-5 w-5" />
      </div>
      <div
        className="hero-float absolute right-[52%] top-16 hidden h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary/70 xl:flex"
        style={{ animationDelay: "1.5s", animationDuration: "7s" }}
      >
        <Clock className="h-4 w-4" />
      </div>
      <div
        className="hero-float absolute bottom-24 left-[9%] hidden h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary/60 xl:flex"
        style={{ animationDelay: "2.5s", animationDuration: "5.5s" }}
      >
        <Bell className="h-4 w-4" />
      </div>
      <div
        className="hero-float absolute left-[3%] top-48 hidden h-3 w-3 rounded-full bg-primary/20 xl:block"
        style={{ animationDelay: "0.8s", animationDuration: "4.5s" }}
      />
      <div
        className="hero-float absolute bottom-36 left-[12%] hidden h-2 w-2 rounded-full bg-primary/15 xl:block"
        style={{ animationDelay: "3s", animationDuration: "5s" }}
      />

      {/* Main layout: two-column with image bleeding to viewport edge */}
      <div className="flex min-h-[calc(100svh-4rem)] items-center">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-0">
            {/* Left: Text content */}
            <div className="mx-auto flex max-w-xl flex-col items-center py-12 text-center lg:mx-0 lg:max-w-[34rem] lg:items-start lg:py-16 lg:text-left xl:max-w-[36rem]">
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
                  See how it works
                </Button>
              </div>
            </div>

            {/* Right: Phone image — on lg+ it bleeds to the right viewport edge */}
            <div
              className="hero-fade-up relative mx-auto flex w-full justify-center lg:mx-0 lg:justify-end"
              style={{ animationDelay: "240ms" }}
            >
              {/* Glow behind phone */}
              <div className="absolute inset-0 flex items-center justify-center lg:justify-end">
                <div className="h-[60%] w-[60%] rounded-full bg-primary/8 blur-[80px]" />
              </div>

              {/* Image wrapper: on lg+, overflow is visible and image shifts right to bleed */}
              <div className="relative w-full max-w-[300px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-none lg:overflow-visible">
                <img
                  src="/hero/Mockuuups%20Free%20iPhone%20Hand%20Mockup.webp"
                  alt="SafeCheck app preview on a phone held in hand"
                  className="relative w-full object-contain drop-shadow-[0_24px_56px_rgba(15,23,42,0.14)] lg:w-[115%] lg:max-w-none xl:w-[120%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
