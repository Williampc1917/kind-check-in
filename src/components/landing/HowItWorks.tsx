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
      title: "It runs quietly in the background",
      description: "Go about your day. Silence means success—no notifications needed.",
      placeholder: "Timer running screen",
    },
    {
      number: 3,
      title: "If you don't tap 'I'm safe,' contacts get a status alert",
      description: "Only when time expires do your contacts receive a calm notification.",
      placeholder: "I'm safe confirmation screen",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">How it works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to peace of mind. No complicated setup required.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              {/* Step Number */}
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold mb-6">
                {step.number}
              </div>

              {/* Phone Placeholder */}
              <div className="mb-6">
                <PhonePlaceholder label={step.placeholder} size="sm" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;