import { Button } from "@/components/ui/button";
import { Check, Shield, Clock, Bell } from "lucide-react";
import { motion, type Transition } from "framer-motion";

const floatingAnimation = (delay: number, duration: number, y: number) => ({
  y: [0, y, 0],
  transition: {
    duration,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay,
  } satisfies Transition,
});

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const trustBullets = [
    "One-tap check-in from your lock screen.",
    "No live location tracking — ever.",
    "Alerts only go out if you miss it.",
  ];

  return (
    <section className="relative bg-background overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-24 left-[6%] hidden lg:flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"
        animate={floatingAnimation(0, 6, -14)}
      >
        <Shield className="h-5 w-5" />
      </motion.div>
      <motion.div
        className="absolute top-40 right-[8%] hidden lg:flex h-10 w-10 items-center justify-center rounded-xl bg-primary/8 text-primary/70"
        animate={floatingAnimation(1.5, 7, 12)}
      >
        <Clock className="h-4 w-4" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-[10%] hidden lg:flex h-9 w-9 items-center justify-center rounded-xl bg-primary/6 text-primary/50"
        animate={floatingAnimation(2.5, 5.5, -10)}
      >
        <Bell className="h-4 w-4" />
      </motion.div>
      <motion.div
        className="absolute top-56 right-[5%] hidden lg:block h-3 w-3 rounded-full bg-primary/20"
        animate={floatingAnimation(0.8, 4.5, 8)}
      />
      <motion.div
        className="absolute bottom-48 right-[14%] hidden lg:block h-2 w-2 rounded-full bg-primary/15"
        animate={floatingAnimation(3, 5, -6)}
      />

      <div className="container mx-auto flex min-h-[85svh] flex-col justify-center px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center gap-8">
          <motion.h1
            className="text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            Your safety net for everyday moments
          </motion.h1>

          <motion.p
            className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
          >
            Set a check-in before you head out. If you don&apos;t tap &ldquo;I&apos;m safe&rdquo; in time, your trusted contacts get a&nbsp;heads&#8209;up.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25, ease: "easeOut" }}
          >
            {trustBullets.map((bullet, index) => (
              <motion.div
                key={index}
                className="inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-secondary px-4 py-2 text-sm font-medium text-foreground/80 shadow-sm"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.35 + index * 0.08, ease: "easeOut" }}
              >
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <p>{bullet}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45, ease: "easeOut" }}
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
