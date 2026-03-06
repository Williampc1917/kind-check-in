import { Button } from "@/components/ui/button";
import { Check, Shield, Clock, Bell } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const trustBullets = [
    "One-tap check-in from your lock screen.",
    "No live location tracking - ever.",
    "Alerts only go out if you miss it.",
  ];

  return (
    <section className="relative overflow-hidden bg-background">
      <div
        className="hero-float absolute left-[6%] top-24 hidden h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary lg:flex"
        style={{ animationDuration: "6s" }}
      >
        <Shield className="h-5 w-5" />
      </div>
      <div
        className="hero-float absolute right-[8%] top-40 hidden h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary/70 lg:flex"
        style={{ animationDelay: "1.5s", animationDuration: "7s" }}
      >
        <Clock className="h-4 w-4" />
      </div>
      <div
        className="hero-float absolute bottom-32 left-[10%] hidden h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary/60 lg:flex"
        style={{ animationDelay: "2.5s", animationDuration: "5.5s" }}
      >
        <Bell className="h-4 w-4" />
      </div>
      <div
        className="hero-float absolute right-[5%] top-56 hidden h-3 w-3 rounded-full bg-primary/20 lg:block"
        style={{ animationDelay: "0.8s", animationDuration: "4.5s" }}
      />
      <div
        className="hero-float absolute bottom-48 right-[14%] hidden h-2 w-2 rounded-full bg-primary/15 lg:block"
        style={{ animationDelay: "3s", animationDuration: "5s" }}
      />

      <div className="container mx-auto flex min-h-[85svh] flex-col justify-center px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
          <h1 className="hero-fade-up text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Your safety net for everyday moments
          </h1>

          <p
            className="hero-fade-up max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl"
            style={{ animationDelay: "120ms" }}
          >
            Set a check-in before you head out. If you don&apos;t tap &ldquo;I&apos;m safe&rdquo; in time, your trusted contacts get a&nbsp;heads&#8209;up.
          </p>

          <div
            className="hero-fade-up flex flex-wrap items-center justify-center gap-3"
            style={{ animationDelay: "250ms" }}
          >
            {trustBullets.map((bullet, index) => (
              <div
                key={index}
                className="hero-fade-up inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-secondary px-4 py-2 text-sm font-medium text-foreground/80 shadow-sm"
                style={{ animationDelay: `${350 + index * 80}ms` }}
              >
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <p>{bullet}</p>
              </div>
            ))}
          </div>

          <div
            className="hero-fade-up flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:justify-center"
            style={{ animationDelay: "450ms" }}
          >
            <Button
              onClick={() => scrollToSection("waitlist")}
              size="lg"
              className="rounded-xl px-8 text-base"
            >
              Join the waitlist
            </Button>
            <Button
              onClick={() => scrollToSection("how-it-works")}
              variant="ghost"
              size="lg"
              className="rounded-xl text-base"
            >
              See how it works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
