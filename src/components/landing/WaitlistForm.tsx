import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="bg-slate-50 py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">

        {submitted ? (
          <div className="text-center">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-500">
              You're in
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-900 md:text-5xl">
              We'll be in touch.
            </h2>
            <p className="mt-4 text-base text-slate-500">No spam. Only when it matters.</p>
          </div>
        ) : (
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-500">
              Early access
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-slate-900 md:text-5xl">
              Be the first to know.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-500 md:text-lg">
              We're building MadeIt for the moments that matter most.
            </p>

            <form onSubmit={handleSubmit} className="mt-10">
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 w-full max-w-xs rounded-xl border-slate-200 bg-white text-base placeholder:text-slate-400 focus-visible:ring-primary sm:max-w-[280px]"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 w-full rounded-xl px-8 text-base shadow-[0_12px_28px_-16px_hsl(var(--primary)/0.6)] sm:w-auto"
                >
                  Join the waitlist
                </Button>
              </div>
              {error && (
                <p className="mt-3 text-sm text-destructive">{error}</p>
              )}
              <p className="mt-5 text-xs text-slate-400">
                Joined by 400+ people already on the list. No spam, ever.
              </p>
            </form>
          </div>
        )}

      </div>
    </section>
  );
};

export default WaitlistForm;
