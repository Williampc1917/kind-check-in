import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import madeIItLogo from "@/imgs/MadeIIt-Logo.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type InfoPageLayoutProps = {
  title: string;
  subtitle: string;
  meta: string;
  children: React.ReactNode;
};

const InfoPageLayout = ({
  title,
  subtitle,
  meta,
  children,
}: InfoPageLayoutProps) => {
  const { pathname } = useLocation();
  const policyLinks = [
    { label: "Privacy", to: "/privacy" },
    { label: "Terms", to: "/terms" },
    { label: "Contact", to: "/contact" },
    { label: "SMS Consent", to: "/sms-consent" },
  ];

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--secondary))_100%)]">
      <header className="border-b border-border/80 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex min-h-16 w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center">
            <img
              src={madeIItLogo}
              alt="MadeIIt logo"
              className="h-7 w-auto max-w-[8.5rem] object-contain md:h-8 md:max-w-[10rem]"
            />
          </Link>

          <nav className="flex flex-wrap items-center justify-end gap-1 text-sm font-medium text-slate-600 sm:gap-2">
            {policyLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                aria-current={pathname === link.to ? "page" : undefined}
                className={cn(
                  "rounded-full px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900",
                  pathname === link.to && "bg-slate-100 text-slate-950",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="ghost" className="rounded-full px-3 sm:px-4">
              <Link to="/">
                <ArrowLeft className="h-4 w-4" />
                Back to home
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <section className="max-w-3xl">
          <h1 className="text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-slate-900 md:text-5xl lg:text-[3.8rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
            {subtitle}
          </p>
          <div className="mt-6 inline-flex rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm text-slate-500 shadow-sm">
            {meta}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/80 bg-white/88 p-6 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.28)] backdrop-blur-sm sm:p-8 lg:p-10">
          {children}
        </section>
      </main>
    </div>
  );
};

export default InfoPageLayout;
