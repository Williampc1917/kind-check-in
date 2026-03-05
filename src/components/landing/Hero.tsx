import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const trustBullets = [
    "Check in from your lock screen.",
    "No live location sharing.",
    "Only alerts if you miss it.",
  ];

  return (
    <section className="bg-background pt-16">
      <div className="container mx-auto flex min-h-[calc(100svh-4rem)] items-center px-5 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <h1 className="mb-6 max-w-[12ch] text-4xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-5xl lg:text-6xl">
            Backup for the moments you don&apos;t overthink
          </h1>
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Set a check-in, go about your day, and if you don&apos;t check in, your trusted contacts get a heads-up.
          </p>

          <div className="mb-10 flex max-w-3xl flex-wrap items-center justify-center gap-3">
            {trustBullets.map((bullet, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-secondary px-4 py-2 text-sm font-medium text-foreground/80 shadow-sm"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <p>{bullet}</p>
              </div>
            ))}
          </div>

          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:justify-center">
            <Button
              onClick={() => scrollToSection("waitlist")}
              size="lg"
              className="rounded-xl text-base px-8"
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
