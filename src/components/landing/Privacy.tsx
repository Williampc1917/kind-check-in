import { Check, AlertCircle } from "lucide-react";

const Privacy = () => {
  const features = [
    "Even after alerts are sent, you can tap 'I'm safe'",
    "Future alerts stop immediately",
    "Contacts get an 'all good' update",
    "No punishment for being late; no assumptions—just support",
  ];

  return (
    <section id="privacy" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">You're always in control</h2>
            <p className="text-lg text-muted-foreground">
              Life is unpredictable. We designed for that.
            </p>
          </div>

          {/* Features */}
          <div className="bg-card rounded-2xl p-6 md:p-8 card-shadow-lg border border-border mb-8">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
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

export default Privacy;