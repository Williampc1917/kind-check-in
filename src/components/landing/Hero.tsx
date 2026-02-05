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
    "No live location sharing",
    "Contacts don't need the app (SMS fallback)",
    "Designed for calm—not panic",
  ];

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
              If you don't check in, the people you trust will know.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Set a timer for your commute, gym, date night, or walk home. The app stays quiet unless something goes wrong.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
            <div className="space-y-3">
              {trustBullets.map((bullet, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Phone Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <PhonePlaceholder label="Hero app screen" size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;