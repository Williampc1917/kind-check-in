import { Moon, Dumbbell, Heart, Car, Clock } from "lucide-react";

const UseCases = () => {
  const useCases = [
    { icon: Moon, label: "Late-night commute" },
    { icon: Dumbbell, label: "Gym session" },
    { icon: Heart, label: "Date night" },
    { icon: Car, label: "Rideshare / travel" },
    { icon: Clock, label: "Quick check-in" },
  ];

  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Perfect for</h2>
          <p className="text-muted-foreground">Everyday moments when a little backup goes a long way.</p>
        </div>

        {/* Use Cases */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-card rounded-full px-5 py-3 card-shadow border border-border"
            >
              <useCase.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">{useCase.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;