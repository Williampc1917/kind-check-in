import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import madeIItLogo from "@/imgs/MadeIIt-Logo.png";

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
      <nav className="container mx-auto grid h-16 grid-cols-[auto_1fr_auto] items-center gap-4 px-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={madeIItLogo}
            alt="MadeIIt logo"
            className="h-7 w-auto max-w-[8.5rem] object-contain md:h-8 md:max-w-[10rem]"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden justify-self-center md:flex items-center gap-6 lg:gap-8">
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="text-[0.95rem] font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            How it works
          </button>
          <button
            onClick={() => scrollToSection("use-cases")}
            className="text-[0.95rem] font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Use cases
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-[0.95rem] font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            FAQ
          </button>
        </div>

        {/* Desktop CTA */}
        <div className="hidden justify-self-end md:flex items-center">
          <Button onClick={() => scrollToSection("waitlist")} className="rounded-xl px-5">
            Join waitlist
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="justify-self-end p-2 md:hidden"
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
              className="py-2 text-left text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection("use-cases")}
              className="py-2 text-left text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Use cases
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="py-2 text-left text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
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
