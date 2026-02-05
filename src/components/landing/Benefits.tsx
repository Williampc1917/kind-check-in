import { Shield, Smartphone, Clock, Layers, Eye } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Proactive, not reactive",
      description: "Peace of mind before anything happens. You're in control from the start.",
    },
    {
      icon: Smartphone,
      title: "One tap from lock screen",
      description: "Dynamic Island and widget support for iPhone. Check in without unlocking.",
    },
    {
      icon: Clock,
      title: "False-alarm friendly",
      description: "Grace periods give you extra time. Contacts receive calm, supportive language.",
    },
    {
      icon: Layers,
      title: "Customizable escalation ladder",
      description: "Three tiers of alerts you control. Escalate gradually, not all at once.",
    },
    {
      icon: Eye,
      title: "Privacy-first",
      description: "Status-only alerts, never live location. Your privacy is non-negotiable.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Built for real life</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Features designed around how you actually live—not how apps think you should.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 card-shadow border border-border hover:border-primary/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;