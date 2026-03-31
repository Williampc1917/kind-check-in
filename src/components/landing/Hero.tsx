import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-background">
      {/* Main layout */}
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

            {/* Right: Phone image */}
            <div
              className="hero-fade-up relative mx-auto flex w-full justify-center lg:mx-0 lg:justify-end"
              style={{ animationDelay: "240ms" }}
            >
              <div className="relative w-full max-w-[300px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-none lg:overflow-visible">
                <img
                  src={`${import.meta.env.BASE_URL}hero/Mockuuups%20Free%20iPhone%20Hand%20Mockup.webp`}
                  alt="SafeCheck app preview on a phone held in hand"
                  className="relative w-full object-contain drop-shadow-[0_24px_56px_rgba(15,23,42,0.14)] lg:w-[107%] lg:max-w-none xl:w-[112%]"
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
