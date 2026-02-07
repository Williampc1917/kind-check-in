import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Simple email validation
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    // Simulate form submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="waitlist" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-card rounded-2xl p-8 card-shadow-lg border border-border text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">You're on the list!</h3>
            <p className="text-muted-foreground">
              We'll be in touch with updates. No spam, promise.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3">Get early access</h2>
            <p className="text-muted-foreground">
              Be the first to know when we launch.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8 card-shadow-lg border border-border">
            <div className="space-y-4">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email <span className="text-destructive">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-xl"
                  required
                />
              </div>

              {/* Error Message */}
              {error && (
                <p className="text-sm text-destructive">{error}</p>
              )}

              {/* Submit Button */}
              <Button type="submit" className="w-full rounded-xl" size="lg">
                Get early access
              </Button>

              {/* Microcopy */}
              <p className="text-xs text-center text-muted-foreground">
                No spam. Only product updates.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
