import PhonePlaceholder from "./PhonePlaceholder";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Create a check-in",
      description: "Set your duration, optional grace period, and choose your trusted contacts.",
      placeholder: "Create check-in screen",
    },
    {
      number: 2,
      title: "Start and go live your day",
      description: "Your timer runs quietly in the background while you commute, work out, or head home.",
      placeholder: "Timer running screen",
    },
    {
      number: 3,
      title: "Check in with one tap",
      description: "When your timer ends, confirm you're safe from your phone in seconds.",
      placeholder: "I'm safe tap screen",
    },
    {
      number: 4,
      title: "Missed check-ins trigger your backup plan",
      description: "If you don't check in, trusted contacts get your status alert based on your escalation settings.",
      placeholder: "Escalation alert screen",
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
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
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
