import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import PhonePlaceholder from "./PhonePlaceholder";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const trustBullets = [
    "No need to remember to text.",
    "No live location sharing.",
    "Only alerts if you don't check in.",
  ];

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <h1 className="max-w-3xl text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
            Miss a check-in. Your trusted contacts get a heads-up.
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            For commutes, gym sessions, date nights, and walks home. We'll notify your trusted contacts only if you don't check in.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row sm:justify-center gap-4 mb-8 w-full sm:w-auto">
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

          {/* Trust Bullets */}
          <div className="space-y-2 mb-10 md:mb-12 w-full max-w-md">
            {trustBullets.map((bullet, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2.5"
              >
                <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-2.5 h-2.5 text-primary" />
                </div>
                <p className="text-sm leading-snug text-muted-foreground">{bullet}</p>
              </div>
            ))}
          </div>

          {/* Phone Placeholder */}
          <div className="flex justify-center">
            <PhonePlaceholder label="Hero app screen" size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
