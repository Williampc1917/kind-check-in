import { Clock, Heart, Shield, AlertCircle } from "lucide-react";

const WhatIfImLate = () => {
  const reassurances = [
    {
      icon: Clock,
      title: "Grace periods are built in",
      description: "You set a grace period when you create a check-in. If you're running behind, you have extra time to tap 'I'm safe'.",
      callout: "No punishment. No assumptions. Just support.",
    },
    {
      icon: Heart,
      title: "Even after alerts go out, you can still stop them",
      description: "Even after your contacts get an alert, you can tap 'I'm safe' at any time. This immediately stops future alerts for that check-in.",
      callout: "Contacts get an 'all good' update — no lingering worry.",
    },
    {
      icon: Shield,
      title: "Your privacy is always protected",
      description: "We only send your status (you checked in or didn't), never live location data. Your whereabouts stay private.",
      callout: "Status-only. Never live location.",
    },
  ];

  return (
    <section id="what-if-im-late" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">What if I'm late?</h2>
            <p className="text-lg text-muted-foreground">
              Life is unpredictable. We designed for that.
            </p>
          </div>

          {/* Reassurance Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {reassurances.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 card-shadow border border-border hover:border-primary/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full inline-block">
                  {item.callout}
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 border border-border">
            <AlertCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              <strong>Important:</strong> This is not an emergency services app. If you're in immediate danger, please contact emergency services directly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIfImLate;
