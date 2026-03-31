import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import madeIItLogo from "@/imgs/MadeIIt-Logo.png";
import { Button } from "@/components/ui/button";

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
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--secondary))_100%)]">
      <header className="border-b border-border/80 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center">
            <img
              src={madeIItLogo}
              alt="MadeIIt logo"
              className="h-7 w-auto max-w-[8.5rem] object-contain md:h-8 md:max-w-[10rem]"
            />
          </Link>

          <Button asChild variant="ghost" className="rounded-full px-4">
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
          </Button>
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
