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
      <section id="waitlist" className="bg-primary/5 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-8 text-center card-shadow-lg">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <h3 className="mb-2 text-2xl font-semibold">You&apos;re on the list!</h3>
            <p className="text-muted-foreground">
              We&apos;ll be in touch with updates. No spam, promise.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="bg-primary/5 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-md">
          <div className="mb-8 text-center">
            <h2 className="mb-3 text-3xl font-semibold md:text-4xl">
              Get early access
            </h2>
            <p className="text-muted-foreground">
              Be the first to know when we launch.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-6 card-shadow-lg md:p-8"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email <span className="text-destructive">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 rounded-xl"
                  required
                />
              </div>

              {error && <p className="text-sm text-destructive">{error}</p>}

              <Button type="submit" className="h-12 w-full rounded-xl" size="lg">
                Get early access
              </Button>

              <p className="text-center text-xs text-muted-foreground">
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
