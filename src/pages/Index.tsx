import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import TrustStrip from "@/components/landing/TrustStrip";
import UseCases from "@/components/landing/UseCases";
import WaitlistForm from "@/components/landing/WaitlistForm";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <HowItWorks />
        <TrustStrip />
        <UseCases />
        <WaitlistForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
