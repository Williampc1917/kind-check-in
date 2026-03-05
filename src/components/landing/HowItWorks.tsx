import PhonePlaceholder from "./PhonePlaceholder";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Create a check-in",
      description: "Set your duration, optional grace period, and choose your trusted contacts.",
      placeholder: "Create check-in screen",
      featureBadge: "Customizable escalation",
      featureDetail: "Set 3 tiers of alerts — text, call, then additional contacts",
    },
    {
      number: 2,
      title: "Start and go live your day",
      description: "Your timer runs quietly in the background while you commute, work out, or head home.",
      placeholder: "Timer running screen",
      featureBadge: "Lock screen & Dynamic Island",
      featureDetail: "One tap from your lock screen, no app unlock needed",
    },
    {
      number: 3,
      title: "Check in with one tap",
      description: "When your timer ends, confirm you're safe from your phone in seconds.",
      placeholder: "I'm safe tap screen",
      featureBadge: "False-alarm friendly",
      featureDetail: "Grace periods give you extra time. Contacts receive calm, supportive language",
    },
    {
      number: 4,
      title: "Missed check-ins trigger your backup plan",
      description: "If you don't check in, trusted contacts get your status alert based on your escalation settings.",
      placeholder: "Escalation alert screen",
      featureBadge: "Privacy-first",
      featureDetail: "Status-only alerts, never live location. Your privacy is non-negotiable",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">How it works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to peace of mind. No complicated setup required.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-10 md:space-y-14">
          {steps.map((step, index) => {
            const isReversed = index % 2 === 1;

            if (step.number === 2) {
              return (
                <div
                  key={step.number}
                  className="rounded-[32px] border border-border/60 bg-[#f5f5f7] px-6 py-12 md:px-14 md:py-16"
                >
                  <div className="mx-auto max-w-3xl text-center">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary/80 md:text-sm">
                      Step 2
                    </p>
                    <h3 className="text-3xl font-semibold tracking-tight md:text-5xl">
                      Go live and move freely
                    </h3>
                    <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                      Your check-in runs quietly in the background, with lock screen updates ready
                      when you need them.
                    </p>
                  </div>

                  <div className="mt-10 flex justify-center md:mt-14">
                    <div className="w-full max-w-lg rounded-[28px] border border-white/70 bg-gradient-to-b from-white to-[#eceff3] p-2 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.45)] md:p-3">
                      <img
                        src="/live-acitvity-square-crop.png"
                        alt="Live check-in status preview"
                        className="mx-auto block w-[90%] rounded-[20px] md:w-[88%]"
                      />
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={step.number}
                className="grid md:grid-cols-2 gap-8 md:gap-12 items-center rounded-3xl border border-border/70 bg-background/60 p-6 md:p-8 card-shadow"
              >
                <div className={isReversed ? "md:order-2" : ""}>
                  <div className="flex justify-center">
                    <PhonePlaceholder label={step.placeholder} size="md" />
                  </div>
                </div>

                <div className={`max-w-lg ${isReversed ? "md:order-1 md:justify-self-end" : ""}`}>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold mb-5">
                    {step.number}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                  
                  {/* Feature callout badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary/20">
                    <span className="text-sm font-medium text-primary">{step.featureBadge}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{step.featureDetail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
