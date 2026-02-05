import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Feel safer without changing how you live.
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of people who are ready for a smarter way to stay connected.
          </p>
          <Button onClick={scrollToWaitlist} size="lg" className="rounded-xl px-8">
            Join the waitlist
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;