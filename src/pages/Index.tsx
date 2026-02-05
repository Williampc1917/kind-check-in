import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Benefits from "@/components/landing/Benefits";
import UseCases from "@/components/landing/UseCases";
import Privacy from "@/components/landing/Privacy";
import WaitlistForm from "@/components/landing/WaitlistForm";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <HowItWorks />
        <Benefits />
        <UseCases />
        <Privacy />
        <WaitlistForm />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;