import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import madeIItLogo from "@/imgs/MadeIIt-Logo.png";

const XLogo = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.901 2H21.98l-6.727 7.689L23.167 22h-6.194l-4.849-7.351L5.69 22H2.61l7.195-8.223L.833 2h6.351l4.383 6.714L18.901 2Zm-1.086 18h1.706L6.259 3.895H4.428L17.815 20Z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={madeIItLogo}
              alt="MadeIIt logo"
              className="h-6 w-auto max-w-[8rem] object-contain md:h-7 md:max-w-[8.75rem]"
            />
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link to="/privacy" className="text-muted-foreground transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link to="/terms" className="text-muted-foreground transition-colors hover:text-foreground">
              Terms
            </Link>
            <Link to="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
              aria-label="X"
            >
              <XLogo className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SafeCheck. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
