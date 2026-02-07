import { Button } from "@/components/ui/button";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">SC</span>
          </div>
          <span className="font-semibold text-lg">SafeCheck</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            How it works
          </button>
          <button
            onClick={() => scrollToSection("privacy")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            FAQ
          </button>
        </div>

        {/* Desktop CTA + Dev Theme */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeSwitcher />
          <Button onClick={() => scrollToSection("waitlist")} className="rounded-xl">
            Join waitlist
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection("privacy")}
              className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Privacy
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              FAQ
            </button>
            <Button onClick={() => scrollToSection("waitlist")} className="rounded-xl w-full">
              Join waitlist
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
